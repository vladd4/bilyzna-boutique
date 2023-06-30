package com.example.jwtsecurity.controllers;

import com.example.jwtsecurity.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MainController {
    UserRepository userRepository;
    @GetMapping("/unsecured")
    public String unsecuredData(){
        return "Unsecured Data";
    }
    @GetMapping("/secured")
    public String securedData(){
        return "Secured Data";
    }
    @GetMapping("/admin")
    public String adminData(){
        return "Admin Data";
    }
    @GetMapping("/info")
    public String userData(Principal principal){
        return principal.getName();
    }


}
