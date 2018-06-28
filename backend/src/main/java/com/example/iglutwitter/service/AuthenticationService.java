package com.example.iglutwitter.service;

import java.math.BigInteger;

import org.springframework.stereotype.Service;

import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AuthenticationService{

    private final UserRepository userRepo;

    public BigInteger createAccount( String userName, String firstname, String lastName, char[] password ){
        String validationResult = validateUserCreation( userName, password );
        User user = new User();
        if( validationResult == null ){
            user = userRepo.insert( new User( userName, firstname, lastName, password ) );
        }
        return user.getId();
    }

    private String validateUserCreation( String accountName, char[] password ){
        return isUserNameTaken( accountName ) ? accountName + " is taken" : null;
    }

    private boolean isUserNameTaken( String userName ){
        return userRepo.findByUserName( userName ) != null;
    }

}
