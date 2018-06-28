package com.example.iglutwitter;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class User{

    @Id
    private long id;
    private String userName;
    private String firstName;
    private String lastName;

    @Override
    public String toString(){
        return String.format( "Customer[id=%s, userName=%s, firstName='%s', lastName='%s']",
                this.id, this.userName, this.firstName, this.lastName);
    }
}
