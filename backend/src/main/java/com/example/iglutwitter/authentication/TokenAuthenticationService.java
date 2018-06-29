package com.example.iglutwitter.authentication;

import static java.util.Collections.emptyList;

import java.math.BigInteger;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenAuthenticationService{
    static final long EXPIRATIONTIME = 86_400_000; // 1 day
    static final String SECRET = "ThisIsASecret";

    public static final String HEADER_STRING = "Authorization";

    static void addAuthentication( HttpServletResponse res, String username, BigInteger userId ){
        String JWT = Jwts.builder()
                .setSubject( username )
                .setId( userId.toString() )
                .setExpiration( new Date( System.currentTimeMillis() + EXPIRATIONTIME ) )
                .signWith( SignatureAlgorithm.HS512, SECRET )
                .compact();
        res.addHeader( HEADER_STRING, JWT );
    }

    static Authentication getAuthentication( HttpServletRequest request ){
        String token = request.getHeader( HEADER_STRING );
        if( token != null ){
            String user = Jwts.parser()
                    .setSigningKey( SECRET )
                    .parseClaimsJws( token )
                    .getBody()
                    .getSubject();

            return user != null ? new UsernamePasswordAuthenticationToken( user, null, emptyList() ) : null;
        }
        return null;
    }

    public static String getUserIdFromJWT( String jwt ){
        return Jwts.parser().setSigningKey( SECRET ).parseClaimsJws( jwt ).getBody().getId();
    }
}
