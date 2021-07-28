package com.example.backend.repository;

import com.example.backend.Model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface Product_repo extends JpaRepository<ProductModel, Long> {
}
