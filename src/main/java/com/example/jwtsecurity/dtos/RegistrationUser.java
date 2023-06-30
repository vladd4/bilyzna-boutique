package com.example.jwtsecurity.dtos;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Collection;
@Data

public class RegistrationUser {
    private String username;
    private String password;

    private String confirmPassword;
    private String email;

}
