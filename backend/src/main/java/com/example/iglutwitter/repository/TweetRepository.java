package com.example.iglutwitter.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.iglutwitter.model.Tweet;

public interface TweetRepository extends MongoRepository<Tweet, BigInteger>{

    List<Tweet> findByUserId( BigInteger userId );

}
