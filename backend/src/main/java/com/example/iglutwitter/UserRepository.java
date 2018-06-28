package com.example.iglutwitter;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findByUserName( String userName );
    List<User> findByLastName( String lastName );
}
