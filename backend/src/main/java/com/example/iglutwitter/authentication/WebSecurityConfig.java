package com.example.iglutwitter.authentication;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.iglutwitter.repository.UserRepository;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    private UserRepository userRepository;

    @Override
    protected void configure( HttpSecurity http ) throws Exception{
        JWTLoginFilter filter = new JWTLoginFilter( "/api/auth/login", new CustomAuthenticationManager( userRepository ), userRepository );
        http.csrf().disable().cors().and().authorizeRequests()
                .antMatchers( "/**" ).permitAll()
                .antMatchers( "/api/auth/**" ).permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore( filter,
                        UsernamePasswordAuthenticationFilter.class )
                .addFilterBefore( new JWTAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class );
    }

    @Bean(name = "corsConfigurationSource")
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins( Arrays.asList( "*" ) );
        configuration.setAllowedMethods( Arrays.asList( "*" ) );
        configuration.addAllowedHeader( "*" );
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration( "/**", configuration );
        return source;
    }
}
