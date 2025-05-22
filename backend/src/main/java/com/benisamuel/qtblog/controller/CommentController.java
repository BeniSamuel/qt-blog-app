package com.benisamuel.qtblog.controller;

import com.benisamuel.qtblog.dto.CommentDto;
import com.benisamuel.qtblog.model.Comment;
import com.benisamuel.qtblog.service.CommentService;
import com.benisamuel.qtblog.utils.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qtblog/comment")
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<Comment>>> getAllComments () {
        return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained all comments!!!", this.commentService.getAllComments()));
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<ApiResponse<Comment>> getCommentById (@PathVariable Long commentId) {
        Comment comment = this.commentService.getCommentById(commentId);
        if (comment != null) {
            return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained a comment!!!", comment));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Failed to obtain comment!!!", null));
    }

    @GetMapping("/post/{postId}/all")
    public ResponseEntity<ApiResponse<List<Comment>>> getAllCommentsByPosts (@PathVariable Long postId) {
        List<Comment> comments = this.commentService.getAllCommentsByPost(postId);
        if (!comments.isEmpty()) {
            return ResponseEntity.ok(new ApiResponse<>(true, "Successfully obtained all comments by post", comments));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Failed to obtain comments on post", null));
    }

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<Comment>> createComment (@RequestBody CommentDto commentDto) {
        Comment newComment = this.commentService.createComment(commentDto);
        if (newComment != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true, "Successfully created comment!!!", newComment));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(false, "Failed to create a comment bad request!!!", null));
    }

}
