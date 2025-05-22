package com.benisamuel.qtblog.dto;

import lombok.Getter;

@Getter
public class CommentDto {
    private String content;
    private Long user_id;
    private Long post_id;
}
