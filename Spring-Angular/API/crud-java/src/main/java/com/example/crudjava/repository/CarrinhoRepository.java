package com.example.crudjava.repository;

import com.example.crudjava.domain.carrinho.Carrinho;
import com.example.crudjava.domain.carrinho.DadosListagemCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

    Carrinho findFirstByFuncionarioIdAndProdutoId(Long funcionarioId, Long produtoId);
    List<DadosListagemCarrinho> findAllByFuncionarioId(Long funcionarioId);
}
