package com.example.crudjava.repository;

import com.example.crudjava.domain.venda.Venda;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepository extends JpaRepository<Venda, Long> {
    Page<Venda> findAllByFuncionarioId(Long id, Pageable pageable);
}
