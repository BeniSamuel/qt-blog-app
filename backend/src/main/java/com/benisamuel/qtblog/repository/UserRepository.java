package com.benisamuel.qtblog.repository;

import com.benisamuel.qtblog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
