package com.example.iglutwitter.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.iglutwitter.model.Tweet;

public interface TweetRepository extends MongoRepository<Tweet, String> {

}
