package com.example.crudjava.controller;

import com.example.crudjava.domain.venda.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vendas")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.100.46:4200"})
public class VendaController {
    @Autowired
    private VendaService service;

    @PostMapping
    @Transactional
    public ResponseEntity registrarVenda(@RequestBody @Valid DadosResgistroVenda dados) {
        var dto = service.registrarVenda(dados);
        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<Page<DadosListagemVenda>> listarVendas(@PageableDefault(size = 10, page = 0, sort = {"funcionario_id"})Pageable pageable) {
        var page = service.listarVendas(pageable);
        return ResponseEntity.ok(page);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Page<DadosListagemVenda>> listarVendasPorId(@PathVariable Long id, @PageableDefault(size = 10, page = 0, sort = {"funcionario_id"})Pageable pageable) {
        var page = service.listarVendasPorId(id, pageable);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizarVenda(@RequestBody @Valid DadosAtualizaVenda dados) {
        var dto = service.atualizaVenda(dados);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{id}")
    @Transactional
    // o PathVariable vai pegar a informação da url delete
    public ResponseEntity apagarDefinitivo(@PathVariable Long id) {
        service.excluirVenda(id);
        return ResponseEntity.noContent().build();
    }

}
