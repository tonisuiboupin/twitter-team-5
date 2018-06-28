package com.example.iglutwitter.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.iglutwitter.model.User;

public interface UserRepository extends MongoRepository<User, String> {

    User findByUserName( String userName );
    List<User> findByLastName( String lastName );
}
