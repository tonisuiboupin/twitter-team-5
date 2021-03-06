package com.example.iglutwitter.model;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserProfile{
    @Id
    private BigInteger id;
    private String userName;
    private String firstName;
    private String lastName;
    private String imageUrl;

    public UserProfile( String userName, String firstName, String lastName, String imageUrl ){
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
    }
}
