package com.example.iglutwitter.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/auth")
public class AuthenticationController{

    @GetMapping(params = {"name", "password"})
    public ResponseEntity<Boolean> authenticate( @RequestParam("name") String name, @RequestParam("password") String password ){
        return ResponseEntity.ok( name != null && name.equals( password ) );
    }
}
