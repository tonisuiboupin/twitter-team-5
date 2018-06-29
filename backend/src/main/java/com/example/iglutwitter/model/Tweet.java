package com.example.iglutwitter.model;

import java.math.BigInteger;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Tweet{

    @Id
    private BigInteger id;
    private BigInteger userId;
    private String txt;
    private LocalDateTime createdAt;

    public Tweet( BigInteger userId, String txt, LocalDateTime createdAt ){
        this.userId = userId;
        this.txt = txt;
        this.createdAt = createdAt;
    }
}
