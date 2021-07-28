package com.example.backend.Controller;

import com.example.backend.Model.ProductModel;
import com.example.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/admin")
    public List<ProductModel> getProduct(){
        return productService.getProduct();
    }

    @PostMapping("/admin/productEdit/{id}")
    public ProductModel productEditSave(@RequestBody ProductModel productModel){
        return productService.productEditSave(productModel);
    }


    @GetMapping("/admin/productEdit/{id}")
    public ProductModel productEditData(@PathVariable Long id){
        return productService.productEditData(id);
    }

    @PostMapping("/admin/addProduct")
    public ProductModel productSave(@RequestBody ProductModel productModel){
        return productService.productSave(productModel);
    }

    @GetMapping("/admin/delete/{id}")
    public String productDelete(@PathVariable Long id){
        return productService.productDelete(id);
    }

}
