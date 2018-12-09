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

import com.revature.beans.Book;
import com.revature.service.BookService;


@CrossOrigin
@RestController
@RequestMapping("/books")//this annotation can be applied to both classes and methods
public class BookController {
	
	@Autowired
	private BookService service;
	
	//GET ALL
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, 
					produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Book> getAll(){
		return service.getAll();
	}
	
	//GET BY ID	
	@CrossOrigin
	@RequestMapping(value="/{id}",
					method=RequestMethod.GET, 
					produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Book> findById(@PathVariable int id) {
		Book b = service.getById(id);
		
		if(b == null) {
			//return not found status
			return new ResponseEntity<Book>(HttpStatus.I_AM_A_TEAPOT);
		}
		else {
			//return ok status
			return new ResponseEntity<Book>(b, HttpStatus.OK);
		}
	}
	
	//CREATE
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Book> addBook(@RequestBody Book b) {
		b = service.addBook(b);
		if(b == null) {
			return new ResponseEntity<Book>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<Book>(b, HttpStatus.CREATED);
		}
	}

	
	//UPDATE
	@CrossOrigin
		@RequestMapping(value="/{id}",
				method=RequestMethod.PUT,
				consumes=MediaType.APPLICATION_JSON_VALUE,
				produces=MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Book> updateUser(@PathVariable int id, @RequestBody Book b){
			Book book = service.updateBook(id, b);
			if(book == null) {
				return new ResponseEntity<Book>(HttpStatus.CONFLICT);
			}
			else {
				return new ResponseEntity<Book>(book, HttpStatus.OK);
			}
			
		}

}
