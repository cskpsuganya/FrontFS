package com.example.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Model.UserModel;
import com.example.backend.Service.SignUpService;

@RestController
public class SignupController {
	
	@Autowired
	private SignUpService signupservice;
	
	@PostMapping("/signup")
	public UserModel saveUser(@RequestBody UserModel user) {
		return signupservice.saveUser(user);
	}
}
