package com.example.demo.repository;

import com.example.demo.model.ModPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModPostRepository extends JpaRepository<ModPost, Long> {
}
