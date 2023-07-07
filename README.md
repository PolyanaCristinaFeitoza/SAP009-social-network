# Friandy

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Definição do produto](#2-definição-do-produto)
* [3. Protótipos](#3-protótipos)
* [4. Testes unitários](#4-testes-unitários)
* [5. Checklist](#5-checklist)
* [6. Ferramentas utilizadas](#6-ferramentas-utilizadas)
* [7. Desenvolvedoras](#7-desenvolvedoras)

***

## 1. Resumo do projeto

Neste projeto proposto pela Laboratoria, o principal objetivo era construir uma rede social que permite qualquer usuário criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar _likes_ em publicações.

Nosso tema escolhido foi uma rede social para os amantes de doces em geral. Para entender melhor as necessidades dos usuários, fizemos uma pesquisa perguntando o que gostaria de ver e fazer no Friandy, para assim construir uma interface sugestiva e interessante.

### Para acessar o projeto [clique aqui](https://friandy-47ea8.web.app/#home)

## 2. Definição do produto

Os principais usuários são pessoas que adoram doces e gostariam de compartilhar sobre eles em uma interface web, onde pudessem publicar e visualizar posts.

A nossa rede social __Friandy__, permite ao usuário conhecer novos doces através dos posts de outros usuários, onde será possível curtir e descurtir. Além disso, editar e excluir as suas pŕoprias publicações.

### Histórias de usuários

Planejamos um protótipo capaz de atender as necessidades dos nossos usuários. Partindo das seguintes histórias de usuários:

1. Eu como usuário, quero poder criar uma conta para ter acesso a rede social.

2. Eu como usuário, quero poder compartilhar sobre os meus doces para outros usuários.

3. Eu como usuário, gostaria de ter a opção de editar meus posts.

4. Eu como usuário, gostaria de ter a opção de deleter meus posts.

5. Eu como usuário, gostaria de ter opções de curtir e descurtir posts.
 
## 3. Protótipos

### Baixa fidelidade

![Protótipo baixa fidelidade tela home](/src/image/prototipo-baixa-fidelidade.png)

### Alta fidelidade

![Protótipo alta fidelidade tela feed](/src/image/prototipo-alta-fidelidade.png)

## 4. Testes unitários

Realizamos testes unitários para as funções do Firebase e Firestore. 
Os testes cobrem mais de 70% das linhas do código.

Funções do Firebase testadas:
* signInWithEmailAndPassword
* createUserWithEmailAndPassword
* signInWithPopup
* signOut
* onAuthStateChanged
* updateProfile

Funções do Firestore testadas:
* addDoc
* deleteDoc
* updateDoc

## 5. Checklist

* [✓] Ser uma SPA
* [✓] Ser responsivo
* [✓] Receber code review de pelo menos uma parceira de outra equipe
* [✓] Fazer tests unitários
* [✓] Fazer testes manuais buscando erros e imperfeições simples
* [✓] Fazer deploy do aplicativo e marcar a versão (git tag)
* [✓] O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de e-mail e senha  e também com uma conta do Google
* [✓] Somente usuários com contas válidas têm acesso permitido
* [✓] Não haver usuários repetidos
* [✓] Se houver erros, mensagens descritivas devem ser exibidas para ajudar o usuário
* [✓] Ao publicar, deve ser validado se há conteúdo no input
* [✓] Ao recarregar o aplicativo, é necessário verificar se o usuário está logado antes de exibir o conteúdo
* [✓] Conseguir publicar um post
* [✓] Poder dar e remover likes em uma publicação. Máximo de um por usuário
* [✓] Visualizar contagem de likes
* [✓] Poder excluir uma postagem específica
* [✓] Solicitar confirmação antes de excluir um post
* [✓] Ao clicar em editar um post, você deve alterar o texto para um input que permite editar o texto e salvar as alterações
* [✓] Ao salvar as alterações, você deve voltar ao texto normal, mas com a informação editada
* [✓] Ao recarregar a página, poder ver os textos editados

## 6. Ferramentas utilizadas

* JavaScript

* HTML

* CSS

* Node

* Jest

* Vite

* Trello

* Figma

## 7. Desenvolvedoras

__Polyana Feitoza__

* [GitHub](https://github.com/PolyanaCristinaFeitoza)

* [Linkedln](https://www.linkedin.com/in/polyftza/)

__Adriana Oliveira__

* [GitHub](https://github.com/AdrianaKatarina)

* [Linkedln](https://www.linkedin.com/in/adroliveira/)
