package com.example.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Model.UserModel;
import com.example.backend.repository.UserRepo;

@Service
public class SignUpService {
	
	@Autowired
	private UserRepo user_repo;
	
	public UserModel saveUser(UserModel user) {
		UserModel user1 = new UserModel();
		user1.setEmail(user.getEmail());
		user1.setActive(user.getActive());
		user1.setMobileNumber(user.getMobileNumber());
		user1.setPassword(user.getPassword());
		user1.setRole(user.getRole());
		user1.setUsername(user.getUsername());
		user1.setCart(user.getCart());
		return user_repo.save(user1);
	}

}
