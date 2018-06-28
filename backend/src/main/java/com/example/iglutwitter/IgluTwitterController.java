package com.example.iglutwitter;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class IgluTwitterController{

    private CopyOnWriteArrayList<Tweet> tweets = new CopyOnWriteArrayList<>();

    public static class Tweet{
        private final long id;
        private final String name;
        private final String txt;

        public Tweet( long id, String name, String txt ){
            this.id = id;
            this.name = name;
            this.txt = txt;
        }

        public long getId(){
            return id;
        }

        public String getTxt(){
            return txt;
        }

        public String getName(){
            return name;
        }
    }

    @RequestMapping("/")
    public String index(){
        return "Greetings from Iglu Twitter!";
    }

    @RequestMapping("/api/tweet/post")
    public void twiiiiiit( @RequestParam String name, @RequestParam String txt ){
        tweets.add( new Tweet( tweets.size(), name, txt ) );
    }

    @GetMapping("/api/tweet/get")
    public List<Tweet> getTweets( String name ){
        return tweets.stream().filter( tweet -> tweet.name.equals( name ) ).collect( Collectors.toList() );
    }
}
