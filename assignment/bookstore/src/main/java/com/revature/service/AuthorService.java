package com.revature.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.beans.Author;
import com.revature.beans.Book;

@Service("authorService")
public class AuthorService {
	
	static ArrayList<Author> authors = new ArrayList<Author>();
	static int seq = 3;
	
	static {
		authors.add(new Author(1, "J.R.R Tolkien", "Best writer ever"));
		authors.add(new Author(2, "J.K Rowling", "Wrote Harry Potter"));
	}

	
	
	public List<Author> getAll(){
		return authors;	
	}
	
	public Author getById(int id) {
		return authors.stream().filter(t -> t.getId()==id).findFirst().orElse(null);
	}
	
	public Author findByName(String name) {
		return authors.stream().filter(t -> t.getName().equalsIgnoreCase(name)).findFirst().orElse(null);
	}
	
	public Author addAuthor(Author a) {
		Author test = findByName(a.getName());
		if(test==null) {
			a.setId(seq++);
			authors.add(a);
			return a;
			
		} else {
			return null;
		}
		
		
	}
	
	public Author updateAuthor(int id, Author a) {
		Author old = getById(id);
		if(old == null) {
			return addAuthor(a);
		
		}
		else {
			int index = 0;
			//weird work around to change in-memory store of users
			for(Author s : authors) {
				if(s.getId() == id) {
					
					s.setName(a.getName());
					s.setBio(a.getBio());
	

					return s;
				}
			}
			
		}
		return null;
		
	}

}
