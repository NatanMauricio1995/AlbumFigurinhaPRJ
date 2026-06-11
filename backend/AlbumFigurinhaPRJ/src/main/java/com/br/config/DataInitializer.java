package com.br.config;

import com.br.model.*;
import com.br.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        criarSeNaoExistir("admin",        "123456", Profile.ADMIN);
        criarSeNaoExistir("autor",        "123456", Profile.AUTOR);
        criarSeNaoExistir("colecionador", "123456", Profile.COLECIONADOR);
    }

    private void criarSeNaoExistir(String nome, String senha, Profile perfil) {
        if (!userRepository.existsByNome(nome)) {
            User user = new User();
            user.setNome(nome);
            user.setSenha(senha);
            user.setPerfil(perfil);
            userRepository.save(user);
            System.out.println("Usuário criado: " + nome + " [" + perfil + "]");
        }
    }
}