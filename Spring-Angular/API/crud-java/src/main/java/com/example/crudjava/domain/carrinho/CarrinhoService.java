package com.example.crudjava.domain.carrinho;

import com.example.crudjava.infra.exception.ValidacaoException;
import com.example.crudjava.repository.CarrinhoRepository;
import com.example.crudjava.repository.FuncionarioRepository;
import com.example.crudjava.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;
    @Autowired
    private FuncionarioRepository funcionarioRepository;
    @Autowired
    private ProdutoRepository produtoRepository;
    public void addNoCarrinho(List<DadosCarrinho> dadosList) {
        for (DadosCarrinho dados : dadosList) {
            if (!funcionarioRepository.existsById(dados.funcionarioId()) || (!produtoRepository.existsById(dados.produtoId()))) {
                throw new ValidacaoException("Funcionário ou Produto inexistentes!");
            }

            var funcionario = funcionarioRepository.getReferenceByIdAndAtivoTrue(dados.funcionarioId());
            var produto = produtoRepository.getReferenceByIdAndAtivoTrue(dados.produtoId());
            var carrinho = new Carrinho(null, funcionario, produto);
            carrinhoRepository.save(carrinho);
        }
    }

    public void removerItemDoCarrinho(List<DadosCarrinho> dadosList) {
        for (DadosCarrinho dados : dadosList) {
            var carrinho = carrinhoRepository.findFirstByFuncionarioIdAndProdutoId(dados.funcionarioId(), dados.produtoId());
            carrinhoRepository.deleteById(carrinho.getId());
        }
    }

    public Page<DadosListagemCarrinho> listarCarrinho(Long id, Pageable pageable) {
        return carrinhoRepository.findAllByFuncionarioId(id, pageable);
    }
}
