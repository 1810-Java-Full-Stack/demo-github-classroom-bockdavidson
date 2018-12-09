package com.revature.beans;

import org.springframework.stereotype.Component;

@Component
public class Book {
	
	private int id;
	private String title;
	private String author;
	private String info;
	
	public Book() {
		
	}
	
	
	public Book(String title, String author, String info) {
		super();
		this.title = title;
		this.author = author;
		this.info = info;
	}
	
	public Book(int id, String title, String author, String info) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.info = info;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}


	@Override
	public String toString() {
		return "Book [id=" + id + ", title=" + title + ", author=" + author + ", info=" + info + "]";
	}
	
	
	
	

}
