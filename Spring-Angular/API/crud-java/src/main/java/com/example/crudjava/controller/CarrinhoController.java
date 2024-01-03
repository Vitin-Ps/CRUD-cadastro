package com.example.crudjava.controller;

import com.example.crudjava.domain.carrinho.CarrinhoService;
import com.example.crudjava.domain.carrinho.DadosCarrinho;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinho")
@CrossOrigin(origins = "http://localhost:4200")
public class CarrinhoController {
    @Autowired
    private CarrinhoService service;

    @PostMapping
    @Transactional
    public ResponseEntity addCarrinho(@RequestBody @Valid DadosCarrinho dados) {
        service.addNoCarrinho(dados);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity listarCarrinho(@PathVariable Long id) {
        var dto = service.listarCarrinho(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/remover")
    @Transactional
    public ResponseEntity removerItem(@RequestBody @Valid DadosCarrinho dados) {
        service.removerItemDoCarrinho(dados);
        return ResponseEntity.noContent().build();
    }
}
