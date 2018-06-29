package com.example.iglutwitter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.iglutwitter.model.Tweet;
import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;
import com.example.iglutwitter.service.IgluTwitterService;

@SpringBootApplication(scanBasePackages = {"com.example.iglutwitter"})
public class IgluTwitterApplication implements CommandLineRunner{

    private final UserRepository userRepository;
    private final IgluTwitterService igluTwitterService;

    @Autowired
    public IgluTwitterApplication( UserRepository userRepository, IgluTwitterService igluTwitterService ){
        this.userRepository = userRepository;
        this.igluTwitterService = igluTwitterService;
    }

    public static void main( String[] args ){
        SpringApplication.run( IgluTwitterApplication.class, args );
    }

    @Override
    public void run( String... args ) throws Exception{

        userRepository.deleteAll();

        // save a couple of customers
        User user1 = userRepository.save( new User( "alice", "Alice", "Smith", "asd".toCharArray() ) );
        igluTwitterService.add( user1.getId(), "Test" );
        List<Tweet> tweetByUserId = igluTwitterService.getTweetByUserId( user1.getId() );
        tweetByUserId.forEach( tweet -> System.out.println( user1.toString() + "tweet:" + tweet ) );
        userRepository.save( new User( "bob", "Bob", "Smith", "asd".toCharArray() ) );

        // fetch all customers
        System.out.println( "Customers found with findAll():" );
        System.out.println( "-------------------------------" );
        for( User customer : userRepository.findAll() ){
            System.out.println( customer );
        }
        System.out.println();

        // fetch an individual customer
        System.out.println( "Customer found with findByFirstName('Alice'):" );
        System.out.println( "--------------------------------" );
        System.out.println( userRepository.findByUserName( "alice" ) );

        System.out.println( "Customers found with findByLastName('Smith'):" );
        System.out.println( "--------------------------------" );
        for( User customer : userRepository.findByLastName( "Smith" ) ){
            System.out.println( customer );
        }

    }
}
