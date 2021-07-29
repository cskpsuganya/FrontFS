package com.example.backend.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Model.CartModel;
import com.example.backend.Model.ProductModel;
import com.example.backend.Service.CartService;
import com.example.backend.repository.CartRepo;
import com.example.backend.repository.Product_repo;

@RestController
public class CartController {
	
	@Autowired
	private CartService cartservice;
	
	@Autowired
	private CartRepo cart_repo;
	
	public CartModel addToCart(@PathVariable Long id,@RequestParam int quantity) {
		CartModel cartItem = cartservice.addToCart(id,quantity);
		return cartItem;
	}
}
