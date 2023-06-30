package com.example.jwtsecurity.controllers;

import com.example.jwtsecurity.dtos.JwtRequest;
import com.example.jwtsecurity.dtos.RegistrationUser;
import com.example.jwtsecurity.services.AuthService;
import com.example.jwtsecurity.utils.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/auth")
    public ResponseEntity<?> createAuthToken(@RequestBody JwtRequest authRequest){
        return authService.createAuthToken(authRequest);
    }
    @PostMapping("/registration")
    public ResponseEntity<?> createNewUser(@RequestBody RegistrationUser registrationUser){
        return authService.createNewUser(registrationUser);
    }
}
