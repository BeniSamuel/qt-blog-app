package com.benisamuel.qtblog.controller;

import com.benisamuel.qtblog.dto.PostDto;
import com.benisamuel.qtblog.model.Post;
import com.benisamuel.qtblog.service.PostService;
import com.benisamuel.qtblog.utils.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qtblog/post")
@AllArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<Post>>> getAllPosts () {
        return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained all posts!!!", this.postService.getAllPost()));
    }

    @GetMapping("/{postId}")
    public ResponseEntity<ApiResponse<Post>> getPostById (@PathVariable long postId) {
        Post post = this.postService.getPostById(postId);
        if (post != null) {
            return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained post!!!", post));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Failed to obtain post!!!", null));
    }

    @GetMapping("/user/{userId}/all")
    public ResponseEntity<ApiResponse<List<Post>>> getAllPostByUser (@PathVariable Long userId) {
        List<Post> posts = this.postService.getAllPostsByUser(userId);
        if (!posts.isEmpty()) {
            return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained all post by user!!!", posts));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Failed to obtain user's posts!!!", null));
    }

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Post>> createPost (@RequestBody PostDto postDto) {
        Post post = this.postService.createPost(postDto);
        if (post != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true, "Successfully created post!!!", post));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(false, "Failed to create post bad request!!!", null));
    }
}
