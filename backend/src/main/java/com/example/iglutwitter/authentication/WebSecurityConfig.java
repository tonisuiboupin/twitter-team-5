package com.example.iglutwitter.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.example.iglutwitter.repository.UserRepository;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    private UserRepository userRepository;

    @Override
    protected void configure( HttpSecurity http ) throws Exception{
        JWTLoginFilter filter = new JWTLoginFilter( "/login", new CustomAuthenticationManager( userRepository ), userRepository );
        http.csrf().disable().authorizeRequests()
                .antMatchers( "/" ).permitAll()
                .antMatchers( HttpMethod.POST, "/login" ).permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore( filter,
                        UsernamePasswordAuthenticationFilter.class )
                .addFilterBefore( new JWTAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class );
    }
}
