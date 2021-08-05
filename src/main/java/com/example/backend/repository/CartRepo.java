package com.example.backend.repository;


import com.example.backend.model.CartModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepo extends JpaRepository<CartModel,String>{

    List<CartModel> findById(long id);
}
