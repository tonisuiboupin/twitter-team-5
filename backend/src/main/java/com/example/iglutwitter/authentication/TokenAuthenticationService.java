package com.example.iglutwitter.authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

import static java.util.Collections.emptyList;

import java.math.BigInteger;

class TokenAuthenticationService{
    static final long EXPIRATIONTIME = 86_400_000; // 1 day
    static final String SECRET = "ThisIsASecret";
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    static void addAuthentication( HttpServletResponse res, String username, BigInteger userId ){
        String JWT = Jwts.builder()
                .setSubject( username )
                .setId( userId.toString() )
                .setExpiration( new Date( System.currentTimeMillis() + EXPIRATIONTIME ) )
                .signWith( SignatureAlgorithm.HS512, SECRET )
                .compact();
        res.addHeader( HEADER_STRING, TOKEN_PREFIX + " " + JWT );
    }

    static Authentication getAuthentication( HttpServletRequest request ){
        String token = request.getHeader( HEADER_STRING );
        if( token != null ){
            String user = Jwts.parser()
                    .setSigningKey( SECRET )
                    .parseClaimsJws( token.replace( TOKEN_PREFIX, "" ) )
                    .getBody()
                    .getSubject();

            return user != null ? new UsernamePasswordAuthenticationToken( user, null, emptyList() ) : null;
        }
        return null;
    }
}
