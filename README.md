# 📒 Álbum de Figurinhas — Trabalho IST P1 2026/01

Sistema web de álbum de figurinhas com controle de perfis de acesso, desenvolvido em Java com banco de dados SQLite embarcado.

---

## 👥 Participantes

| Matrícula | Nome |
|-----------|------|
| _         | _    |
| _         | _    |
| _         | _    |

---

## 🔐 Credenciais de Acesso (para avaliação)

| Perfil         | Usuário   | Senha    |
|----------------|-----------|----------|
| Administrador  | admin     | 123456   |
| Autor          | autor     | 123456   |
| Colecionador   | colecionador | 123456 |

---

## 📋 Funcionalidades por Perfil

### Administrador
- Gerenciamento completo de usuários (inclusão, edição, exclusão)
- Listagem e filtro de usuários por nome e perfil
- Reset de senha para valor padrão (`123456` ou nome do usuário)

### Autor
- Gerenciamento do álbum: inserção, edição e exclusão de figurinhas
- Listagem e filtro de figurinhas (por nome, número, página ou tag)
- Upload de imagem; tag calculada automaticamente como **MD5 do arquivo**
- Campos da figurinha: nome, número, descrição, página, tag (MD5), foto

### Colecionador
- Visualização do álbum organizado por páginas
- Duplo clique em uma figurinha para ver todos os detalhes e a imagem
- Marcação de figurinhas obtidas na coleção pessoal

---

## 🗂 Estrutura do Projeto

```
album-figurinhas/
├── backend/                        # Spring Boot — API REST
│   └── src/main/java/com/album/
│       ├── config/
│       │   ├── SecurityConfig.java     # Controle de perfis (ADMIN/AUTOR/COLECIONADOR)
│       │   └── DatabaseConfig.java     # Configuração do SQLite embarcado
│       ├── controller/
│       │   ├── AuthController.java     # POST /api/auth/login
│       │   ├── UserController.java     # CRUD /api/users
│       │   ├── StickerController.java  # CRUD /api/stickers
│       │   └── AlbumController.java    # GET /api/album/pages/{page}
│       ├── service/
│       │   ├── AuthService.java        # Autenticação e controle de sessão
│       │   ├── UserService.java        # Regras de negócio de usuários, reset de senha
│       │   ├── StickerService.java     # Cálculo de MD5, gerenciamento de figurinhas
│       │   └── AlbumService.java       # Montagem de páginas, coleção do usuário
│       ├── repository/
│       │   ├── UserRepository.java
│       │   ├── StickerRepository.java
│       │   └── CollectionRepository.java
│       ├── model/
│       │   ├── User.java               # id, nome, senha (hash), perfil
│       │   ├── Sticker.java            # id, numero, nome, descricao, pagina, tag, foto (BLOB)
│       │   ├── Collection.java         # userId × stickerId
│       │   ├── Profile.java            # enum: ADMIN, AUTOR, COLECIONADOR
│       │   └── AuditLog.java           # registro de ações (arquivo texto)
│       └── util/
│           ├── Md5Util.java            # calcula hash MD5 do byte[] da imagem
│           ├── FileUtil.java           # leitura/gravação de arquivo texto (log)
│           └── BinaryUtil.java         # serialização binária (export/import)
│
├── frontend/                       # HTML + TypeScript + SCSS
│   ├── src/
│   │   ├── pages/
│   │   │   ├── splash.html             # Tela de splash
│   │   │   ├── login.html              # Tela de login (comum a todos)
│   │   │   ├── about.html              # Tela "Sobre"
│   │   │   ├── admin/                  # Telas do Administrador
│   │   │   ├── autor/                  # Telas do Autor
│   │   │   └── colecionador/           # Telas do Colecionador
│   │   ├── components/                 # Controles personalizados (user controls)
│   │   └── styles/                     # SCSS com tokens visuais e ícones
│   └── ...
│
├── album.db                        # SQLite — gerado automaticamente na 1ª execução
├── logs/
│   └── audit.log                   # Arquivo texto de auditoria de ações
├── export/
│   └── album.bin                   # Arquivo binário de export/import do álbum
└── README.md
```

---

## 🔌 Endpoints da API REST

| Método   | Rota                                  | Perfil           | Descrição                                 |
|----------|---------------------------------------|------------------|-------------------------------------------|
| `POST`   | `/api/auth/login`                     | Todos            | Autentica e retorna token/sessão          |
| `GET`    | `/api/users`                          | ADMIN            | Lista usuários (filtro por nome/perfil)   |
| `POST`   | `/api/users`                          | ADMIN            | Cria novo usuário                         |
| `PUT`    | `/api/users/{id}`                     | ADMIN            | Edita dados do usuário                    |
| `PUT`    | `/api/users/{id}/reset-password`      | ADMIN            | Reseta senha para valor padrão            |
| `DELETE` | `/api/users/{id}`                     | ADMIN            | Remove usuário                            |
| `GET`    | `/api/stickers`                       | AUTOR/COLECIONADOR | Lista figurinhas (filtro por nome/página) |
| `POST`   | `/api/stickers`                       | AUTOR            | Cria figurinha com upload de foto         |
| `PUT`    | `/api/stickers/{id}`                  | AUTOR            | Edita dados da figurinha                  |
| `DELETE` | `/api/stickers/{id}`                  | AUTOR            | Remove figurinha                          |
| `GET`    | `/api/album/pages/{page}`             | COLECIONADOR     | Retorna figurinhas de uma página          |
| `POST`   | `/api/album/collect/{stickerId}`      | COLECIONADOR     | Marca figurinha como obtida               |

---

## 🗄 Banco de Dados — SQLite Embarcado

O banco é criado automaticamente no arquivo `album.db` na raiz do projeto. Nenhuma instalação é necessária.

### Tabelas

```sql
CREATE TABLE users (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    nome    TEXT NOT NULL,
    senha   TEXT NOT NULL,   -- hash bcrypt
    perfil  TEXT NOT NULL    -- 'ADMIN', 'AUTOR', 'COLECIONADOR'
);

CREATE TABLE stickers (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    numero      INTEGER NOT NULL UNIQUE,
    nome        TEXT NOT NULL,
    descricao   TEXT,
    pagina      INTEGER NOT NULL,
    tag         TEXT,        -- hash MD5 da imagem
    foto        BLOB         -- imagem armazenada em binário
);

CREATE TABLE collections (
    user_id     INTEGER REFERENCES users(id),
    sticker_id  INTEGER REFERENCES stickers(id),
    PRIMARY KEY (user_id, sticker_id)
);

CREATE TABLE audit_log (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario     TEXT,
    acao        TEXT,
    data_hora   TEXT
);
```

### Dependência Maven (SQLite JDBC)

```xml
<dependency>
    <groupId>org.xerial</groupId>
    <artifactId>sqlite-jdbc</artifactId>
    <version>3.45.3.0</version>
</dependency>
```

URL do datasource: `jdbc:sqlite:album.db`

---

## ⚙️ Stack Tecnológica

| Camada       | Tecnologia                          |
|--------------|-------------------------------------|
| Frontend     | HTML + TypeScript + SCSS            |
| Backend      | Java 17 + Spring Boot 3             |
| Segurança    | Spring Security (controle de perfil)|
| Persistência | Spring Data JPA + Hibernate + SQLite|
| Build        | Maven                               |
| Banco        | SQLite (embarcado, sem instalação)  |

---

## ▶️ Como Executar

### Pré-requisitos

- Java 17+
- Maven 3.8+
- Node.js 18+ (para o frontend, se web)

### Backend

```bash
cd backend
mvn spring-boot:run
```

A API estará disponível em `http://localhost:8080`.

### Frontend (se web)

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

---

## 🔑 Cálculo da Tag MD5

A tag de cada figurinha é o hash MD5 do arquivo de imagem, calculado no momento do upload:

```java
import java.security.MessageDigest;
import java.util.HexFormat;

public class Md5Util {
    public static String calcular(byte[] dados) throws Exception {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] hash = md.digest(dados);
        return HexFormat.of().formatHex(hash);
    }
}
```

---

## 📁 Arquivo Texto e Binário

### Arquivo Texto — Log de Auditoria

Cada ação relevante (login, criação, edição, remoção) é registrada em `logs/audit.log`:

```
2026-06-09T14:32:00 | admin       | LOGIN
2026-06-09T14:33:10 | admin       | CRIOU_USUARIO: joao
2026-06-09T14:40:05 | autor       | INSERIU_FIGURINHA: #42 Pelé
```

### Arquivo Binário — Export/Import do Álbum

O álbum pode ser exportado e importado via serialização Java em `export/album.bin`:

```java
// Export
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("export/album.bin"));
oos.writeObject(listaFigurinhas);
oos.close();

// Import
ObjectInputStream ois = new ObjectInputStream(new FileInputStream("export/album.bin"));
List<Sticker> figurinhas = (List<Sticker>) ois.readObject();
ois.close();
```

---

## 📊 Critérios de Avaliação Atendidos

| Critério                                          | Pontos | Status |
|---------------------------------------------------|--------|--------|
| (ADM) Inserir, remover, editar usuários           | 2      | ✅     |
| (AUTOR) Gerenciar álbum — inserir, remover, editar figurinhas | 2 | ✅  |
| (COLECIONADOR) Visualizar e adicionar figurinha   | 2      | ✅     |
| Listar e filtrar usuários                         | 1      | ✅     |
| Listar e filtrar figurinhas                       | 1      | ✅     |
| Calcular e usar a tag (hash MD5)                  | 1      | ✅     |
| Tela de splash e sobre                            | 1      | ✅     |
| Tela de login                                     | 1      | ✅     |
| Usar banco de dados embarcado (SQLite)            | 2      | ✅     |
| Arquivo texto (log de auditoria)                  | 1      | ✅     |
| Arquivo binário (export/import)                   | 1      | ✅     |
| Fotos no banco (BLOB)                             | 1      | ✅     |
| Telas personalizadas e ícones                     | 1      | ✅     |
| Uso de controles personalizados (user controls)   | 1      | ✅     |
| **Total**                                         | **18** |        |

---

## 📧 Entrega

**Email:** mozar.silva@gmail.com  
**Assunto:** `trab ist P1 2026 01`  
**Prazo:** 03 de julho de 2026  

**Conteúdo do email:**
- Matrícula e nome de todos os participantes
- `.zip` com o código-fonte (sem executáveis)
- Logins e senhas de acesso

---

> Trabalho acadêmico — Instituto Superior de Tecnologia · P1 2026/01