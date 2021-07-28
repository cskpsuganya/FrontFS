package com.example.backend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class CartModel {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String cartItemID;
	@OneToOne
	private UserModel userId;
	private String ProductName;
	private int Quantity;
	private String Price;
	public String getCartItemID() {
		return cartItemID;
	}
	public void setCartItemID(String cartItemID) {
		this.cartItemID = cartItemID;
	}
	public UserModel getUserId() {
		return userId;
	}
	public void setUserId(UserModel userId) {
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
