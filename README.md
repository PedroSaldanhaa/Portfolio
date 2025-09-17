<br>
<p align="center">
<img src="https://raw.githubusercontent.com/PedroSaldanhaa/Portfolio/refs/heads/main/logoPS.png" alt="Logo do Portfólio" width="430">
</p>
<br>

# Portfólio de Desenvolvedor | Pedro Saldanha

Este portfólio apresenta meus projetos e minha trajetória como desenvolvedor. É uma aplicação **Full-Stack**, onde o front-end interage com uma **API Node.js própria, responsável pelo envio de e-mails** através do formulário de contato.

A escolha por não utilizar um framework JavaScript no front-end foi intencional, com o objetivo de demonstrar um forte domínio das tecnologias fundamentais da web: HTML, CSS e JavaScript puros, utilizando o Bootstrap pontualmente para o sistema de grid.

O site está no ar! Você pode acessá-lo aqui: **[portfolio-pedrosaldanha.vercel.app](https://portfolio-pedrosaldanha.vercel.app/)**

### Próximos Passos

A próxima evolução deste trabalho será um projeto separado: uma aplicação full-stack completa construída com a minha stack principal (**React, TypeScript, Node.js e SQL**). O objetivo será criar uma experiência mais interativa e tecnológica, com funcionalidades complexas que demonstrem minhas habilidades em um ambiente de produção moderno.

---

# Principais Funcionalidades

O projeto foi dividido em duas frentes principais, cada parte com suas responsabilidades e tecnologias.

### Front-End
A interface do usuário foi construída do zero com foco em design, responsividade e uma experiência de usuário fluida e interativa.
* **Design Responsivo:** Layout adaptado para uma navegação otimizada em desktops, tablets e celulares.
* **Imagens Otimizadas:** Uso de imagens diferentes para desktop e mobile no carrossel de projetos, garantindo performance e melhor enquadramento em cada dispositivo.
* **Animações de Scroll:** Efeitos de "fade-in" suaves aplicados a seções e elementos via `IntersectionObserver` para uma experiência de navegação mais dinâmica.
* **Carrossel de Projetos:** Componente interativo para apresentar os principais trabalhos de forma visual e organizada.
* **Formulário de Contato Funcional:** Interface de contato que se conecta a uma API própria para o envio de e-mails.

### Back-End
Uma API REST foi desenvolvida em Node.js para servir como o "cérebro" por trás das funcionalidades dinâmicas do site.
* **API para Envio de E-mail:** Um endpoint (`/send-email`) que recebe os dados do formulário do front-end e os envia diretamente para o meu e-mail.
* **Integração com Nodemailer:** Utilização da biblioteca Nodemailer para autenticar com um serviço de e-mail e enviar as mensagens de forma segura.
* **Segurança:** As credenciais sensíveis são protegidas através de Variáveis de Ambiente na plataforma de deploy.

---

# Arquitetura e Deploy

Este projeto utiliza uma arquitetura de **monorepo**, com o código do front-end e do back-end contidos no mesmo repositório, mas organizados em pastas separadas. O deploy é feito de forma independente em plataformas especializadas:

* **Front-End:** Hospedado na Vercel, otimizado para performance e entrega rápida de conteúdo estático através de sua Edge Network global.
* **Back-End:** Hospedado no Render como um "Web Service", garantindo que a API Node.js esteja sempre disponível para receber requisições.

# Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5
* Node.js
* Express.js
* Git & GitHub
* Vercel & Render


## Ajustes
Com foco em boas práticas e performance, planejo implementar melhorias no código CSS do projeto. As principais ações previstas incluem:

* Reestruturação das Media Queries para trechos do layout que não utilizam o grid do Bootstrap

* Limpeza total e organização do código

* Otimização para dispositivos móveis
