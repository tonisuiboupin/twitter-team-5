package com.example.iglutwitter.repository;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.iglutwitter.model.User;

public interface UserRepository extends MongoRepository<User, BigInteger> {

    User findByUserName( String userName );
    List<User> findByLastName( String lastName );
}
