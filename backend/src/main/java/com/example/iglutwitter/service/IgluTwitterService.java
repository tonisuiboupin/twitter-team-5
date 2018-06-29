package com.example.iglutwitter.service;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.iglutwitter.model.Tweet;
import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.TweetRepository;
import com.example.iglutwitter.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class IgluTwitterService{

    private final TweetRepository tweetRepo;
    private final UserRepository userRepo;

    public void add( BigInteger userId, String txt ){
        tweetRepo.insert( new Tweet( userId, txt, LocalDateTime.now() ) );
    }

    public List<Tweet> getTweetByUserId( BigInteger userId ){
        return tweetRepo.findByUserId( userId );
    }

    public User findUserById( BigInteger userId ){
        return userRepo.findById( userId ).orElse( null );
    }
}
