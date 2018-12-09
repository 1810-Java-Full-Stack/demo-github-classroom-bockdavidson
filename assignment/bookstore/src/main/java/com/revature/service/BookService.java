package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.beans.Book;


@Service("bookService")
public class BookService {
	
	static ArrayList<Book> books = new ArrayList<Book>();
	static int seq = 3;
	
	static {
		books.add(new Book(1, "The Fellowship of the Ring", "J.R.R Tolkien", "first"));
		books.add(new Book(2, "The Two Towers", "J.R.R Tolkien", "Second"));
		books.add(new Book(3, "The Return of the King", "J.R.R Tolkien", "third"));
		books.add(new Book(4, "The Hobbit", "J.R.R Tolkien", "Before LotR"));
	}

	
	
	public List<Book> getAll(){
		return books;	
	}
	
	public Book getById(int id) {
		return books.stream().filter(t -> t.getId()==id).findFirst().orElse(null);
	}
	
	public Book findByTitle(String title) {
		return books.stream().filter(t -> t.getTitle().equalsIgnoreCase(title)).findFirst().orElse(null);
	}
	
	public Book addBook(Book b) {
		Book test = findByTitle(b.getTitle());
		if(test==null) {
			b.setId(seq++);
			books.add(b);
			return b;
			
		} else {
			return null;
		}
		
		
	}
	
	public Book updateBook(int id, Book b) {
		Book old = getById(id);
		if(old == null) {
			return addBook(b);
		
		}
		else {
			int index = 0;
			//weird work around to change in-memory store of users
			for(Book s : books) {
				if(s.getId() == id) {
					
					s.setTitle(b.getTitle());
					s.setAuthor(b.getAuthor());
					s.setInfo(b.getInfo());

					return s;
				}
			}
			
		}
		return null;
		
	}

}
