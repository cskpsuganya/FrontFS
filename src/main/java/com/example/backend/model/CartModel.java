package com.example.backend.model;

import javax.persistence.*;

@Entity
public class CartModel {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long cartItemID;
	@OneToOne
	private User userId;
	private String ProductName;
	private int Quantity;
	private String Price;
	public Long getCartItemID() {
		return cartItemID;
	}
	public void setCartItemID(Long cartItemID) {
		this.cartItemID = cartItemID;
	}
	public User getUserId() {
		return userId;
	}
	public void setUserId(User userId) {
		this.userId = userId;
	}
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public String getPrice() {
		return Price;
	}
	public void setPrice(String price) {
		Price = price;
	}
	
	
	
}
