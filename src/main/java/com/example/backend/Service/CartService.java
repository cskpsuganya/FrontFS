package com.example.backend.Service;

import com.example.backend.Model.CartModel;
import com.example.backend.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    CartRepo cartRepo;

    public CartModel addToCart(String Quantity, String id){
        return 
    }

}
