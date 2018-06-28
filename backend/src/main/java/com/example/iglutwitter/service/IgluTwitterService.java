package com.example.iglutwitter.service;

import java.math.BigInteger;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.iglutwitter.model.Tweet;
import com.example.iglutwitter.repository.TweetRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class IgluTwitterService{

    private final TweetRepository tweetRepo;

    public void add( BigInteger userId, String txt ){
        tweetRepo.insert( new Tweet( userId, txt ) );
    }

    public List<Tweet> getTweetByUserId( BigInteger userId ){
        return tweetRepo.findByUserId( userId );
    }
}
