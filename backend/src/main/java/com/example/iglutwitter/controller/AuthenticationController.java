package com.example.iglutwitter.controller;

import java.math.BigInteger;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.iglutwitter.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(value = "*")
@RestController("/api/auth")
public class AuthenticationController{

    private final AuthenticationService authenticationService;

    @GetMapping(params = {"name", "password"})
    public ResponseEntity<Boolean> authenticate( @RequestParam("name") String name, @RequestParam("password") String password ){
        return ResponseEntity.ok( name != null && name.equals( password ) );
    }

    //@PostMapping(params = {"name", "password"})
    @RequestMapping("/api/user/post")
    public BigInteger createAccount( @RequestParam("name") String accountName, @RequestParam("password") char[] password ){
        return authenticationService.createAccount( accountName, password );
    }
}
