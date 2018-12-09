package com.revature.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;


@Controller
@CrossOrigin
@RequestMapping("/home") 
public class HomeController {
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	@ResponseBody //needed to return data as JSON when using @Controller. not needed when using @RestController. This is the only difference between the two annotations 
	public String home(){
		return "Welcome to Spring MVC!";
	}
}