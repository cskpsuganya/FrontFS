package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Model.UserModel;

public interface UserRepo extends JpaRepository<UserModel,String> {

}
