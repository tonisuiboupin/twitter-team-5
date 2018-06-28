package com.example.iglutwitter.service;

import org.springframework.stereotype.Service;

import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AuthenticationService{

    private final UserRepository userRepo;

    public String createAccount( String userName, char[] password ){
        String validationResult = validateUserCreation( userName, password );
        if( validationResult == null ){
            userRepo.insert( new User( userName, userName, userName ) );
        }
        return validationResult;
    }

    private String validateUserCreation( String accountName, char[] password ){
        return isUserNameTaken( accountName ) ? accountName + " is taken" : null;
    }

    private boolean isUserNameTaken( String userName ){
        User user = userRepo.findByUserName( userName );
        System.out.println( "user: " + user );
        return user != null;
    }

}
