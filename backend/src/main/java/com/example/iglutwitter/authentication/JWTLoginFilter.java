package com.example.iglutwitter.authentication;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter{

    private final UserRepository userRepository;

    public JWTLoginFilter( String url, AuthenticationManager authManager, UserRepository userRepository ){
        super( new AntPathRequestMatcher( url ) );
        setAuthenticationManager( authManager );
        this.userRepository = userRepository;
    }

    @Override
    public Authentication attemptAuthentication(
                                                 HttpServletRequest req,
                                                 HttpServletResponse res ) throws AuthenticationException, IOException, ServletException{
        if( req.getMethod().equals( "POST" ) ){
            User user = new ObjectMapper()
                    .readValue( req.getInputStream(), User.class );
            return getAuthenticationManager().authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getUserName(),
                            user.getPassword(),
                            Collections.emptyList() ) );
        }
        return null;
    }

    @Override
    protected void successfulAuthentication(
                                             HttpServletRequest req,
                                             HttpServletResponse res,
                                             FilterChain chain,
                                             Authentication auth ) throws IOException, ServletException{
        User user = userRepository.findByUserName( auth.getName() );
        TokenAuthenticationService
                .addAuthentication( res, auth.getName(), user.getId() );
        chain.doFilter( req, res );
    }
}
