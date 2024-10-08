package com.example.demo.controller;

import com.example.demo.model.ModPost;
import com.example.demo.repository.ModPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class ModPostController {

    @Autowired
    private ModPostRepository modPostRepository;

    @GetMapping
    public List<ModPost> getAllPosts() {
        return modPostRepository.findAll();
    }

    @GetMapping("/{id}")
    public ModPost getPost(@PathVariable Long id) {
        ModPost post = modPostRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
        post.incrementViewCount();
        modPostRepository.save(post); // Save updated view count
        return post;
    }

    @PostMapping
    public ModPost createPost(@RequestBody ModPost modPost) {
        return modPostRepository.save(modPost);
    }
}
