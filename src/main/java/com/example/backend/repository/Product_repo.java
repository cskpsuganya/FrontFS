package com.example.backend.repository;

import com.example.backend.Model.ProductModel;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface Product_repo extends CrudRepository<ProductModel, Long> {

    Optional<Object> findById(String id);

    void deleteById(String id);
}
