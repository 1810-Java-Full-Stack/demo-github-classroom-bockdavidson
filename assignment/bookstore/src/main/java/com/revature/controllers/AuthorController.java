package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.revature.beans.Author;
import com.revature.beans.Book;
import com.revature.service.AuthorService;

@CrossOrigin
@RestController
@RequestMapping("/authors")//this annotation can be applied to both classes and methods
public class AuthorController {
	@Autowired
	private AuthorService service;
	
	//GET ALL
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, 
					produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Author> getAll(){
		return service.getAll();
	}
	
	//GET BY ID	
	@CrossOrigin
	@RequestMapping(value="/{id}",
					method=RequestMethod.GET, 
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Author> findById(@PathVariable int id) {
		Author a = service.getById(id);
		
		if(a == null) {
			//return not found status
			return new ResponseEntity<Author>(HttpStatus.I_AM_A_TEAPOT);
		}
		else {
			//return ok status
			return new ResponseEntity<Author>(a, HttpStatus.OK);
		}
	}
	
	//CREATE
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Author> addAuthor(@RequestBody Author a) {
		a = service.addAuthor(a);
		if(a == null) {
			return new ResponseEntity<Author>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<Author>(a, HttpStatus.CREATED);
		}
	}

	
	//UPDATE
		@CrossOrigin
		@RequestMapping(value="/{id}",
				method=RequestMethod.PUT,
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Author> updateAuthor(@PathVariable int id, @RequestBody Author a){
			Author author = service.updateAuthor(id, a);
			if(author == null) {
				return new ResponseEntity<Author>(HttpStatus.CONFLICT);
			}
			else {
				return new ResponseEntity<Author>(author, HttpStatus.OK);
			}
			
		}

}
