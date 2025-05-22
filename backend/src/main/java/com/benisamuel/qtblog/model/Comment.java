package com.benisamuel.qtblog.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tables")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private LocalTime comment_at;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    public Comment (String content, LocalTime comment_at, User user, Post post) {
        this.content = content;
        this.comment_at = comment_at;
        this.user = user;
        this.post = post;
    }
}
