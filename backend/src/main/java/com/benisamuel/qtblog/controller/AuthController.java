package com.benisamuel.qtblog.controller;

import com.benisamuel.qtblog.dto.UserLoginDto;
import com.benisamuel.qtblog.dto.UserRegisterDto;
import com.benisamuel.qtblog.model.User;
import com.benisamuel.qtblog.service.AuthService;
import com.benisamuel.qtblog.utils.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/qtblog/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register-user")
    public ResponseEntity<ApiResponse<User>> registerUser (@RequestBody UserRegisterDto userRegisterDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true, "Successfully registered user!!!", this.authService.registerUser(userRegisterDto)));
    }

    @PostMapping("/login-user")
    public ResponseEntity<ApiResponse<String>> loginUser (@RequestBody UserLoginDto userLoginDto) {
        return this.authService.loginUser(userLoginDto);
    }
}
