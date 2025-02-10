# Food Order App 🍽️

## Descrição
O **Food Order App** é uma aplicação Android desenvolvida em **Kotlin** com **Jetpack Compose**, permitindo que os usuários façam reservas de comida e acompanhem suas entregas.

A aplicação se comunica com uma **API Node.js com Express e Prisma**, utilizando **OkHttp** para realizar requisições HTTP.

## Recursos Principais 🛠️
- **Autenticação de Usuário** (Login e Logout)
- **Listagem de Reservas de Comida**
- **Pesquisa de Reservas**
- **Adicionar uma Nova Reserva**
- **Editar uma Reserva Existente**
- **Excluir uma Reserva**
- **Apagar Todas as Reservas**
- **Interface Moderna com Jetpack Compose**

## Tecnologias Utilizadas 🏗️
- **Linguagem:** Kotlin
- **Framework UI:** Jetpack Compose
- **Back-End:** Node.js + Express + Prisma
- **Banco de Dados:** PostgreSQL (via Prisma ORM)
- **HTTP Client:** OkHttp
- **Gerenciamento de Estado:** State Management com **remember** e **LaunchedEffect**
- **Animações:** Lottie

## Como Configurar o Projeto 🚀

### 1️⃣ Clonar o Repositório
```sh
git clone https://github.com/seuusuario/food-order-app.git
cd food-order-app
```

### 2️⃣ Abrir no Android Studio
- Abra o **Android Studio**
- Selecione **Open an Existing Project** e escolha a pasta do repositório
- Aguarde o carregamento das dependências

### 3️⃣ Configurar a API
A API precisa estar rodando. Certifique-se de:
- Ter **Node.js** instalado
- Rodar os comandos no diretório da API:
  ```sh
  npm install
  npm start
  ```
- A API deve estar acessível em `http://192.168.152.29:3000/`

### 4️⃣ Executar o App
- No Android Studio, selecione um emulador ou dispositivo físico
- Clique em **Run ▶** para iniciar o app

## 📷 Capturas de Tela
📌 *Adicione imagens do app aqui*

## 📌 Melhorias Futuras
- Implementação de um sistema de pagamento
- Notificações push para atualizações de entrega
- Suporte para múltiplos idiomas

## 📄 Licença
Este projeto está sob a **Licença MIT**. Sinta-se à vontade para modificar e utilizar conforme necessário!

---

📌 **Desenvolvido por [Seu Nome]**

