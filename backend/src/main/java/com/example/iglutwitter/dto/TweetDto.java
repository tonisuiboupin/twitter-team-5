package com.example.iglutwitter.dto;

import java.math.BigInteger;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class TweetDto{
    private final BigInteger id;
    private final BigInteger userId;
    private final String userName;
    private final String txt;
}
