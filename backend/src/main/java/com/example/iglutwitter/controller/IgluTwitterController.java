package com.example.iglutwitter.controller;

import java.math.BigInteger;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.iglutwitter.model.Tweet;
import com.example.iglutwitter.model.User;
import com.example.iglutwitter.service.IgluTwitterService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
public class IgluTwitterController{

    private final IgluTwitterService twitterService;

    @RequestMapping("/")
    public String index(){
        return "Greetings from Iglu Twitter!";
    }

    @RequestMapping("/api/tweet/post")
    public void twiiiiiit( @RequestParam BigInteger userId, @RequestParam String txt ){
        twitterService.add( userId, txt );
    }

    @GetMapping("/api/tweet/get")
    public List<Tweet> getTweets( BigInteger userId ){
        return twitterService.getTweetByUserId( userId );
    }

    @GetMapping(path = "/user/{userId}")
    public User getUser( @PathVariable("userId") BigInteger userId ){
        return twitterService.findUserById( userId );
    }
}
