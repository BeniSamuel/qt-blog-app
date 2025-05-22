package com.benisamuel.qtblog.repository;

import com.benisamuel.qtblog.model.Post;
import com.benisamuel.qtblog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    Post getPostById (Long id);
    List<Post> getPostsByUser (User user);
}
