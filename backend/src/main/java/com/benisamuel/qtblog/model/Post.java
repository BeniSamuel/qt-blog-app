package com.benisamuel.qtblog.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    private String cover;

    private LocalDateTime posted_at;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public Post (String title, String content, String cover, LocalDateTime posted_at, User user) {
        this.title = title;
        this.cover = content;
        this.cover = cover;
        this.posted_at = posted_at;
        this. user = user;
    }
}
