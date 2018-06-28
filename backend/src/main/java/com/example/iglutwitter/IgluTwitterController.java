package com.example.iglutwitter;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IgluTwitterController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Iglu Twitter!";
    }
}
