package com.benisamuel.qtblog.dto;

import lombok.Getter;

@Getter
public class PostDto {
    private String title;
    private String content;
    private Long user_id;
}