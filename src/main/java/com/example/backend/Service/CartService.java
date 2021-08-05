package com.example.backend.Service;


import com.example.backend.model.CartModel;
import com.example.backend.model.ProductModel;
import com.example.backend.model.User;
import com.example.backend.repository.CartRepo;

import com.example.backend.repository.Product_repo;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    
	@Autowired
	private CartRepo cart_repo;
	
	@Autowired
	private Product_repo product_repo;
	
	@Autowired
	private UserRepository user_repo;
	
	public CartModel addToCart(Long id, int quantity) {

		ProductModel product = (ProductModel) product_repo.findById(id).orElse(null);
		User user = (User) user_repo.findByEmail("a@a").orElse(null);
		CartModel cartItem = new CartModel();
		cartItem.setPrice(product.getPrice());
		cartItem.setProductName(product.getProductName());
		cartItem.setQuantity(quantity);
		cartItem.setUserId(user);
//
		return cart_repo.save(cartItem);
	}

	public List<CartModel> showCart(long id){
		return cart_repo.findById(id);
	}
}
