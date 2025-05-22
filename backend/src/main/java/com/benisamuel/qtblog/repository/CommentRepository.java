package com.benisamuel.qtblog.repository;

import com.benisamuel.qtblog.model.Comment;
import com.benisamuel.qtblog.model.Post;
import com.benisamuel.qtblog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    Comment getCommentById(Long id);
    List<Comment> getAllCommentsByUser (User user);
    List<Comment> getAllCommentsByPost(Post post);
}
