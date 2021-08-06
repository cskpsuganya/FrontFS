package com.example.backend.controller;


import com.example.backend.Service.CartService;
import com.example.backend.model.CartModel;
import com.example.backend.model.ProductModel;
import com.example.backend.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {
	
	@Autowired
	private CartService cartservice;
	
	@Autowired
	private CartRepo cart_repo;

	@PostMapping("/home/{id}")
	public CartModel addToCart(@PathVariable Long id, @RequestBody String quantity) {

		CartModel cartItem = cartservice.addToCart(id, quantity);
		return cartItem;
	}

	@GetMapping("/cart/{id}")
	public List<CartModel> showCart(@PathVariable Long id){
		return  cartservice.showCart(id);
	}



}
