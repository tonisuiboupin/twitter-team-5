package com.example.iglutwitter.model;
public class Tweet{
    private final long id;
    private final String name;
    private final String txt;

    public Tweet( long id, String name, String txt ){
        this.id = id;
        this.name = name;
        this.txt = txt;
    }

    public long getId(){
        return id;
    }

    public String getTxt(){
        return txt;
    }

    public String getName(){
        return name;
    }
}
