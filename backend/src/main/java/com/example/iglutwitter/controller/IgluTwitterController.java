package com.example.iglutwitter.controller;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.iglutwitter.model.Tweet;
import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class IgluTwitterController{

    private CopyOnWriteArrayList<Tweet> tweets = new CopyOnWriteArrayList<>();
    private final UserRepository userRepository;

    @RequestMapping("/")
    public String index(){
        return "Greetings from Iglu Twitter!";
    }

    @GetMapping(path = "/api/profile/{profileId}")
    public ResponseEntity<User> getProfile( @PathVariable("profileId") long profileId ){
        return ResponseEntity.ok( userRepository.findById( profileId ) );
    }

    @RequestMapping("/api/tweet/post")
    public void twiiiiiit( @RequestParam String name, @RequestParam String txt ){
        tweets.add( new Tweet( tweets.size(), name, txt ) );
    }

    @GetMapping("/api/tweet/get")
    public List<Tweet> getTweets( String name ){
        return tweets.stream().filter( tweet -> tweet.getName().equals( name ) ).collect( Collectors.toList() );
    }
}
