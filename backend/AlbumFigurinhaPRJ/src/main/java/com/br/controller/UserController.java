package com.br.controller;


import com.br.model.Profile;
import com.br.model.User;
import com.br.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public List<User> listar(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) Profile perfil) {

        if (nome != null) return service.filtrarPorNome(nome);
        if (perfil != null) return service.filtrarPorPerfil(perfil);
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> buscar(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<User> criar(@RequestBody User user) {
        return ResponseEntity.ok(service.salvar(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> editar(@PathVariable Long id, @RequestBody User user) {
        return ResponseEntity.ok(service.editar(id, user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/reset-password")
    public ResponseEntity<User> resetarSenha(@PathVariable Long id) {
        return ResponseEntity.ok(service.resetarSenha(id));
    }
}