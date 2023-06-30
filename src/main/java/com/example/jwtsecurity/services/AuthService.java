package com.example.jwtsecurity.services;

import com.example.jwtsecurity.dtos.JwtRequest;
import com.example.jwtsecurity.dtos.JwtResponse;
import com.example.jwtsecurity.dtos.RegistrationUser;
import com.example.jwtsecurity.dtos.UserDto;
import com.example.jwtsecurity.entities.User;
import com.example.jwtsecurity.exceptions.AppError;
import com.example.jwtsecurity.utils.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final JwtTokenUtils jwtTokenUtils;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/auth")
    public ResponseEntity<?> createAuthToken(@RequestBody JwtRequest authRequest){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
                    (authRequest.getUsername(),authRequest.getPassword()));
        }catch (BadCredentialsException e){
            return new ResponseEntity<>
                    (new AppError(HttpStatus.UNAUTHORIZED.value(),
                            "Incorrect login or password"),
                            HttpStatus.UNAUTHORIZED);
        }
        UserDetails userDetails = userService.loadUserByUsername(authRequest.getUsername());
        String token = jwtTokenUtils.generatedToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }
    @PostMapping("/registration")
    public ResponseEntity<?> createNewUser(@RequestBody RegistrationUser registrationUser){
        if(!registrationUser.getPassword().equals(registrationUser.getConfirmPassword())){
            return new ResponseEntity<>(new AppError(HttpStatus.BAD_REQUEST.value(), "Passwords don't match"),HttpStatus.BAD_REQUEST);
        }
        if(userService.findByUsername(registrationUser.getUsername()).isPresent()){
            return new ResponseEntity<>(new AppError(HttpStatus.BAD_REQUEST.value(), "User with such name already exists"),HttpStatus.BAD_REQUEST);
        }
        User user = userService.createNewUser(registrationUser);
        return ResponseEntity.ok(new UserDto(user.getId(), user.getUsername(),user.getEmail()));
    }
}
