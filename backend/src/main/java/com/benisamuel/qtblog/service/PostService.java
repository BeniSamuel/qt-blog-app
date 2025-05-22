package com.benisamuel.qtblog.service;

import com.benisamuel.qtblog.dto.PostDto;
import com.benisamuel.qtblog.model.Post;
import com.benisamuel.qtblog.model.User;
import com.benisamuel.qtblog.repository.PostRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserService userService;

    public List<Post> getAllPost () {
        return this.postRepository.findAll();
    }

    public Post getPostById (Long postId) {
        return this.postRepository.getPostById(postId);
    }

    public Page<Post> getAllPostPaginated (int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return this.postRepository.findAll(pageable);
    }

    public List<Post> getAllPostsByUser (Long userId) {
        User user = this.userService.getUserById(userId);
        if (user != null) {
            return this.postRepository.getPostsByUser(user);
        }
        return null;
    }

    public Post createPost (PostDto postDto) {
        User user = this.userService.getUserById(postDto.getUser_id());
        if (user != null) {
            Post newPost = new Post(postDto.getTitle(), postDto.getContent(), null, LocalDateTime.now(), user);
            return this.postRepository.save(newPost);
        }
        return null;
    }

    public Post updatePostById (Long postId, PostDto postDto) {
        Post post = this.getPostById(postId);
        User user = this.userService.getUserById(postDto.getUser_id());

        if (user != null && post != null) {
            post.setTitle(postDto.getTitle());
            post.setContent(postDto.getContent());
            post.setPosted_at(LocalDateTime.now());
            post.setCover(null);
            post.setUser(user);

            return this.postRepository.save(post);
        }
        return null;
    }

    public boolean deletePostById (Long postId) {
        Post post = this.getPostById(postId);
        if (post != null) {
            this.postRepository.delete(post);
            return true;
        }
        return false;
    }
}
