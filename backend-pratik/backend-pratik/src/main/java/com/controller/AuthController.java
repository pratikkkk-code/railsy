package com.railsy.backend.controller;

import com.railsy.backend.dto.AuthRequest;
import com.railsy.backend.dto.AuthResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {

        if ("admin".equals(request.getUsername())
                && "admin123".equals(request.getPassword())) {

            return new AuthResponse(
                    true,
                    "Login Successful");
        }

        return new AuthResponse(
                false,
                "Invalid Username or Password");
    }
}