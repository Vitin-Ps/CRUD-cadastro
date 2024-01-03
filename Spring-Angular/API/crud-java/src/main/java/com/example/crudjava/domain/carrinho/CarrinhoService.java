package com.example.crudjava.domain.carrinho;

import com.example.crudjava.infra.exception.ValidacaoException;
import com.example.crudjava.repository.CarrinhoRepository;
import com.example.crudjava.repository.FuncionarioRepository;
import com.example.crudjava.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void addNoCarrinho(DadosCarrinho dados) {
        if(!funcionarioRepository.existsById(dados.funcionarioId()) || (!produtoRepository.existsById(dados.produtoId()))) throw new ValidacaoException("Funcionário ou Produto inexistentes!");
        var funcionario = funcionarioRepository.getReferenceByIdAndAtivoTrue(dados.funcionarioId());
        var produto = produtoRepository.getReferenceByIdAndAtivoTrue(dados.produtoId());
        var carrinho = new Carrinho(null, funcionario, produto);
        carrinhoRepository.save(carrinho);
    }

    public void removerItemDoCarrinho(DadosCarrinho dados) {
        var carrinho = carrinhoRepository.findFirstByFuncionarioIdAndProdutoId(dados.funcionarioId(), dados.produtoId());
        carrinhoRepository.deleteById(carrinho.getId());
    }
    public List<DadosListagemCarrinho> listarCarrinho(Long id) {
        return carrinhoRepository.findAllByFuncionarioId(id);
    }
}
