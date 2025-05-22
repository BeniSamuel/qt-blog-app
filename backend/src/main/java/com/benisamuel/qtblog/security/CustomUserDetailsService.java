package com.benisamuel.qtblog.security;

import com.benisamuel.qtblog.exception.NotFoundException;
import com.benisamuel.qtblog.repository.UserRepository;
import lombok.AllArgsConstructor;
import com.benisamuel.qtblog.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userRepository.getUserByEmail(username).orElseThrow(() -> new NotFoundException("User not found!!!"));
        return new CustomUserDetails(user);
    }
}
