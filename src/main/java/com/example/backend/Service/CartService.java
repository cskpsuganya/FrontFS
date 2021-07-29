package com.example.backend.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Model.CartModel;
import com.example.backend.Model.ProductModel;
import com.example.backend.Model.UserModel;
import com.example.backend.repository.CartRepo;
import com.example.backend.repository.Product_repo;
import com.example.backend.repository.UserRepo;

@Service
public class CartService {
    
	@Autowired
	private CartRepo cart_repo;
	
	@Autowired
	private Product_repo product_repo;
	
	@Autowired
	private UserRepo user_repo;
	
	public CartModel addToCart(Long id,int quantity) {
		
		ProductModel product = (ProductModel) product_repo.findById(id).orElse(null);
		UserModel user = (UserModel) user_repo.findById("0").orElse(null); 
		CartModel cartItem = new CartModel();
		cartItem.setPrice(product.getPrice());
		cartItem.setProductName(product.getProductName());
		cartItem.setQuantity(quantity);
		cartItem.setUserId(user);
		
		return cart_repo.save(cartItem);
	}
}
