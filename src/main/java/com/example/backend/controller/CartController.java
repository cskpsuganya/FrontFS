package com.example.backend.controller;



import com.example.backend.Service.CartService;
import com.example.backend.model.CartModel;
import com.example.backend.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {
	
	@Autowired
	private CartService cartservice;
	
	@Autowired
	private CartRepo cart_repo;

	@PostMapping("/home/{id}")
	public CartModel addToCart(@PathVariable Long id, @RequestParam int quantity) {

		CartModel cartItem = cartservice.addToCart(id,quantity);
		return cartItem;
	}
}
