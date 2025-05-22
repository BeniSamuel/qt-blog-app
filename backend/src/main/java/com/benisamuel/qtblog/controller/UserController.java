package com.benisamuel.qtblog.controller;


import com.benisamuel.qtblog.model.User;
import com.benisamuel.qtblog.service.UserService;
import com.benisamuel.qtblog.utils.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qtblog/user")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<User>>> getAllUsers () {
        return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained all users!!!", this.userService.getAllUsers()));
    }

    @GetMapping("/paginated/all")
    public ResponseEntity<ApiResponse<Page<User>>> getAllUsersPaginated (
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "email") String sortBy
    ) {
        return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained all users paginated!!!", this.userService.getAllUserPaginated(page, size, sortBy)));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse<User>> getUserById (@PathVariable Long userId) {
        User user = this.userService.getUserById(userId);
        if ( user != null ) {
            return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained user!!!", user));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Failed to obtain user!!!", null));
    }

}
