package com.example.iglutwitter.authentication;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;

public class CustomAuthenticationManager implements AuthenticationManager{

    private final UserRepository userRepository;

    public CustomAuthenticationManager( UserRepository userRepository ){
        this.userRepository = userRepository;
    }

    @Override
    public Authentication authenticate( Authentication authentication ) throws AuthenticationException{
        String username = (String)authentication.getPrincipal();
        char[] password = (char[])authentication.getCredentials();
        User user = userRepository.findByUserName( username );

        if( user == null ){
            throw new BadCredentialsException( "1000" );
        }

        if( !Arrays.toString( password ).equals( Arrays.toString( user.getPassword() ) ) ){
            throw new BadCredentialsException( "1000" );
        }

        return new UsernamePasswordAuthenticationToken( username, password, Collections.emptyList() );
    }

}
