package com.benisamuel.qtblog.dto;

import com.benisamuel.qtblog.enums.Role;
import lombok.Getter;

@Getter
public class UserRegisterDto {
    private String name;
    private String email;
    private String password;
    private Role role;
}
