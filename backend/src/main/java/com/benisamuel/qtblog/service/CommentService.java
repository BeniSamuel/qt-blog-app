package com.benisamuel.qtblog.service;

import com.benisamuel.qtblog.dto.CommentDto;
import com.benisamuel.qtblog.model.Comment;
import com.benisamuel.qtblog.model.User;
import com.benisamuel.qtblog.model.Post;
import com.benisamuel.qtblog.repository.CommentRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final UserService userService;
    private final PostService postService;

    public Comment getCommentById (Long commentId) {
        return this.commentRepository.getCommentById(commentId);
    }

    public List<Comment> getAllComments () {
        return this.commentRepository.findAll();
    }

    public List<Comment> getAllCommentsByUser (Long userId) {
        User user = this.userService.getUserById(userId);
        if (user != null) {
            return this.commentRepository.getAllCommentsByUser(user);
        }
        return null;
    }

    public List<Comment> getAllCommentsByPost (Long postId) {
        Post post = this.postService.getPostById(postId);
        if (post != null) {
            return this.commentRepository.getAllCommentsByPost(post);
        }
        return null;
    }

    public Page<Comment> getAllCommentsPaginated (int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return this.commentRepository.findAll(pageable);
    }

    public Comment createComment (CommentDto commentDto) {
        User user = this.userService.getUserById(commentDto.getUser_id());
        Post post = this.postService.getPostById(commentDto.getPost_id());

        if (user != null & post != null) {
            Comment newComment = new Comment(commentDto.getContent(), LocalTime.now(), user, post);
            return this.commentRepository.save(newComment);
        }
        return null;
    }

}
