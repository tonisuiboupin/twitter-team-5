package com.example.iglutwitter.model;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;

public class User{

    @Id
    private BigInteger id;
    private String userName;
    private String firstName;
    private String lastName;

    public User( String userName, String firstName, String lastName ){
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString(){
        return String.format( "Customer[id=%s, userName=%s, firstName='%s', lastName='%s']",
                this.id, this.userName, this.firstName, this.lastName );
    }
}
