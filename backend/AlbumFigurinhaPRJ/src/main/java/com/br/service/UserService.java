package com.br.service;

import com.br.model.Profile;
import com.br.model.User;
import com.br.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> listarTodos() {
        return repository.findAll();
    }

    public List<User> filtrarPorNome(String nome) {
        return repository.findByNomeContainingIgnoreCase(nome);
    }

    public List<User> filtrarPorPerfil(Profile perfil) {
        return repository.findByPerfil(perfil);
    }

    public User buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado: " + id));
    }

    public User salvar(User user) {
        return repository.save(user);
    }

    public User editar(Long id, User dados) {
        User user = buscarPorId(id);
        user.setNome(dados.getNome());
        user.setSenha(dados.getSenha());
        user.setPerfil(dados.getPerfil());
        return repository.save(user);
    }

    public void deletar(Long id) {
        buscarPorId(id);
        repository.deleteById(id);
    }

    public User resetarSenha(Long id) {
        User user = buscarPorId(id);
        user.setSenha("123456");
        return repository.save(user);
    }
}