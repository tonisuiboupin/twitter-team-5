package com.example.iglutwitter.controller;

import java.io.IOException;
import java.math.BigInteger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.iglutwitter.authentication.TokenAuthenticationService;
import com.example.iglutwitter.service.AuthenticationService;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(value = "*")
@RestController
@RequestMapping(path = "/api/auth")
public class AuthenticationController{

    private final AuthenticationService authenticationService;

    @RequiredArgsConstructor
    @Getter
    public static class AuthenticationResponse{
        private final String jwt;
        private final String userId;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<AuthenticationResponse> authenticate( HttpServletRequest request, HttpServletResponse response ) throws IOException{
        String jwt = response.getHeader( TokenAuthenticationService.HEADER_STRING );
        return ResponseEntity.ok( new AuthenticationResponse( jwt, "123123123" ) );
    }

    //@PostMapping(params = {"name", "password"})
    @RequestMapping("/api/user/post")
    public BigInteger createAccount( @RequestParam("userName") String userName,
                                     @RequestParam("firstName") String firstname,
                                     @RequestParam("lastName") String lastName,
                                     @RequestParam("password") char[] password ){
        return authenticationService.createAccount( userName, firstname, lastName, password );
    }
}
