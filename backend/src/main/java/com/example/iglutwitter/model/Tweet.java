package com.example.iglutwitter.model;
import java.math.BigInteger;

import org.springframework.data.annotation.Id;

import lombok.Getter;

@Getter
public class Tweet{

    @Id
    private BigInteger id;
    private BigInteger userId;
    private String txt;

    public Tweet( BigInteger userId, String txt ){
        this.userId = userId;
        this.txt = txt;
    }
}
