package com.benisamuel.qtblog.service;

import com.benisamuel.qtblog.dto.UserRegisterDto;
import com.benisamuel.qtblog.model.User;
import com.benisamuel.qtblog.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> getAllUsers () {
        return this.userRepository.findAll();
    }

    public Page<User> getAllUserPaginated (int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return this.userRepository.findAll(pageable);
    }

    public User getUserByEmail (String email) {
        return this.userRepository.getUserByEmail(email).orElse(null);
    }

    public User getUserById (Long id) {
        return this.userRepository.getUserById(id).orElse(null);
    }

    public User createUser (UserRegisterDto userRegisterDto) {
        User newUser = new User(userRegisterDto.getName(), userRegisterDto.getEmail(), passwordEncoder.encode(userRegisterDto.getPassword()), userRegisterDto.getRole());
        return this.userRepository.save(newUser);
    }

    public User updateUserById (Long id, UserRegisterDto userRegisterDto) {
        User user = this.getUserById(id);
        if (user != null) {
            user.setName(userRegisterDto.getName());
            user.setEmail(userRegisterDto.getEmail());
            user.setPassword(passwordEncoder.encode(userRegisterDto.getPassword()));
            user.setRole(userRegisterDto.getRole());

            return this.userRepository.save(user);
        }
        return null;
    }

    public boolean deleteUserById (Long id) {
        User user = this.getUserById(id);
        if (user != null) {
            this.userRepository.delete(user);
            return true;
        }
        return false;
    }
}
