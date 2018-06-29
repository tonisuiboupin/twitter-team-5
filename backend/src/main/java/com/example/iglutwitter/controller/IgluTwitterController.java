package com.example.iglutwitter.controller;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.iglutwitter.authentication.TokenAuthenticationService;
import com.example.iglutwitter.dto.TweetDto;
import com.example.iglutwitter.model.Tweet;
import com.example.iglutwitter.model.User;
import com.example.iglutwitter.model.UserProfile;
import com.example.iglutwitter.service.IgluTwitterService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RestController
public class IgluTwitterController{

    private final IgluTwitterService twitterService;

    private static final ObjectMapper objectMapper = new ObjectMapper().registerModule( new ParameterNamesModule() )
            .registerModule( new Jdk8Module() ).registerModule( new JavaTimeModule() );

    @RequestMapping("/")
    public String index(){
        return "Greetings from Iglu Twitter!";
    }

    @Getter
    @ToString
    @RequiredArgsConstructor
    public static class TweetRequest{
        private final String txt;
    }

    @RequestMapping("/api/tweet/post")
    public List<TweetDto> twiiiiiit( @RequestHeader(TokenAuthenticationService.HEADER_STRING) String jwt,
                                     HttpServletRequest request ) throws IOException{
        try (InputStream is = request.getInputStream()){
            String content = IOUtils.toString( is, "UTF-8" );
            TweetRequest tweet = objectMapper.readValue( content, TweetRequest.class );
            String userId = TokenAuthenticationService.getUserIdFromJWT( jwt );
            log.info( "Add twiit: {}, userId: {}", tweet, userId );
            twitterService.add( new BigInteger( userId, 10 ), tweet.getTxt() );
            return getTweets( new BigInteger( userId ) );
        }
    }

    @GetMapping("/api/user/{userId}/tweets")
    public List<TweetDto> getTweets( @PathVariable("userId") BigInteger userId ){
        List<Tweet> tweets = twitterService.getTweetByUserId( userId );
        log.info( "Tweets: {}", tweets );
        return tweets.stream()
                .map( tweet -> {
                    User user = twitterService.findUserById( tweet.getUserId() );
                    log.info( "User: {}", user );
                    return new TweetDto( tweet.getId(), tweet.getUserId(), user.getUserName(), tweet.getTxt(), tweet.getCreatedAt() );
                } )
                .collect( Collectors.toList() );
    }

    @GetMapping(path = "/api/user/{userId}")
    public UserProfile getUser( @PathVariable("userId") BigInteger userId ){
        User user = twitterService.findUserById( userId );
        return new UserProfile( user.getUserName(), user.getFirstName(), user.getLastName() );
    }

}
