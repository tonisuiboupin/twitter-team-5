package com.example.iglutwitter.model;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class User{

    @Id
    private BigInteger id;
    private String userName;
    private String firstName;
    private String lastName;
    private char[] password;
    private String imageUrl;

    public User( String userName, String firstName, String lastName, char[] password, String imageUrl ){
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString(){
        return String.format( "Customer[id=%s, userName=%s, firstName='%s', lastName='%s']",
                this.id, this.userName, this.firstName, this.lastName );
    }
}
