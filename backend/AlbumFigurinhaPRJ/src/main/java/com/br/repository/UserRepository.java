package com.br.repository;

import com.br.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNomeContainingIgnoreCase(String nome);
    List<User> findByPerfil(Profile perfil);
    boolean existsByNome(String nome);
}