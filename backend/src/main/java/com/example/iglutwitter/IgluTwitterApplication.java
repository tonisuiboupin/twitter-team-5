package com.example.iglutwitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.iglutwitter.model.User;
import com.example.iglutwitter.repository.UserRepository;

@SpringBootApplication
public class IgluTwitterApplication implements CommandLineRunner{

    private final UserRepository userRepository;

    @Autowired public IgluTwitterApplication( UserRepository userRepository ){
        this.userRepository = userRepository;
    }

    public static void main( String[] args ){
        SpringApplication.run( IgluTwitterApplication.class, args );
    }

    @Override
    public void run( String... args ) throws Exception{

        userRepository.deleteAll();

        // save a couple of customers
        userRepository.save( new User( 1, "alice", "Alice", "Smith" ) );
        userRepository.save( new User( 2, "bob", "Bob", "Smith" ) );

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
