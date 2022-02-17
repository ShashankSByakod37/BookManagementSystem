package com.example.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="Books")
public class Book {
	@Id
	int id;
	@Column
	String name;
	@Column
	String author;
	@Column
	double price;
	@Column
	int publishedyear;
	@Column
	String genre;
	@Column
	String imgurl;
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getPublishedyear() {
		return publishedyear;
	}

	public void setPublishedyear(int publishedyear) {
		this.publishedyear = publishedyear;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public Book updateCar(Book new_book) {
		this.setName(new_book.getName());
		this.setPrice(new_book.getPrice());
		this.setId(new_book.getId());
		this.setAuthor(new_book.getAuthor());
		this.setGenre(new_book.getGenre());
		this.setImgurl(new_book.getImgurl());
		this.setPublishedyear(new_book.getPublishedyear());
		return this;
	}
	
}
