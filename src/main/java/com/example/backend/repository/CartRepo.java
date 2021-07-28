package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Model.CartModel;

public interface CartRepo extends JpaRepository<CartModel,String>{

}
