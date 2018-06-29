package com.example.iglutwitter.controller;

import java.math.BigInteger;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.iglutwitter.dto.TweetDto;
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

    // TODO autentimise kontroll, userId peaks tulema autentimise tokenist
    @RequestMapping("/api/tweet/post")
    public void twiiiiiit( @RequestParam BigInteger userId, @RequestParam String txt ){
        twitterService.add( userId, txt );
    }

    @GetMapping("/api/user/{userId}/tweets")
    public List<TweetDto> getTweets( @PathVariable("userId") BigInteger userId ){
        return twitterService.getTweetByUserId( userId ).stream()
                .map( tweet -> new TweetDto( tweet.getId(), tweet.getUserId(), twitterService.findUserById( tweet.getUserId() ).getUserName(),
                        tweet.getTxt() ) )
                .collect( Collectors.toList() );
    }

    @GetMapping(path = "/api/user/{userId}")
    public User getUser( @PathVariable("userId") BigInteger userId ){
        return twitterService.findUserById( userId );
    }

}
