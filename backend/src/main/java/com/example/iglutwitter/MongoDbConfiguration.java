package com.example.iglutwitter;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.client.MongoDatabase;

import de.flapdoodle.embed.mongo.MongodExecutable;
import de.flapdoodle.embed.mongo.MongodStarter;
import de.flapdoodle.embed.mongo.config.IMongodConfig;
import de.flapdoodle.embed.mongo.config.MongodConfigBuilder;
import de.flapdoodle.embed.mongo.config.Net;
import de.flapdoodle.embed.mongo.distribution.Version;
import de.flapdoodle.embed.process.runtime.Network;

@Configuration
public class MongoDbConfiguration{
    @Bean
    @DependsOn(value = "embeddedMongoServer")
    public MongoDatabase mongoDatabase(){
        MongoClient mongo = new MongoClient( "localhost", 27017 );
        MongoCredential credential = MongoCredential.createCredential( "user", "database", "password".toCharArray() );
        return mongo.getDatabase( "database" );

    }

    @Bean(destroyMethod = "stop", name = "embeddedMongoServer")
    public MongodExecutable mongoDb() throws IOException{
        MongodStarter starter = MongodStarter.getDefaultInstance();

        String bindIp = "localhost";
        int port = 27017;
        IMongodConfig mongodConfig = new MongodConfigBuilder()
                .version( Version.Main.PRODUCTION )
                .net( new Net( bindIp, port, Network.localhostIsIPv6() ) )
                .build();

        MongodExecutable mongodExecutable = starter.prepare( mongodConfig );
        mongodExecutable.start();
        return mongodExecutable;
    }
}
