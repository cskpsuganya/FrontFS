package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Model.OrderModel;

public interface OrderRepo extends JpaRepository<OrderModel,String> {

}
