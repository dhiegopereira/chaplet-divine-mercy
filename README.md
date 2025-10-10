# Terço Digital 📿

Aplicativo web para rezar o Terço com meditações guiadas dos Mistérios Gozosos, Dolorosos, Gloriosos e Luminosos.

## 🚀 Como executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou baixe os arquivos
2. Instale as dependências:

```bash
npm install
```

### Executar o servidor

#### Modo produção:

```bash
npm start
```

#### Modo desenvolvimento (com auto-reload):

```bash
npm run dev
```

O servidor será iniciado na porta **8080** por padrão.

### Acessar a aplicação

Abra seu navegador e acesse:

- **Aplicação principal**: http://localhost:8080
- **Health Check**: http://localhost:8080/health

## 🎯 Funcionalidades

### 📱 Design Responsivo

- Menu lateral que se converte em hambúrguer no mobile
- Layout adaptativo para diferentes tamanhos de tela
- Tipografia otimizada para leitura de orações

### 🗓️ Navegação por Dias

- **Segunda/Sábado**: Mistérios Gozosos
- **Terça/Sexta**: Mistérios Dolorosos
- **Quarta/Domingo**: Mistérios Gloriosos
- **Quinta**: Mistérios Luminosos

### 🙏 Funcionalidades de Meditação

- **Timer de Meditação**: Configurável de 30 a 120 segundos por Ave-Maria
- **Progresso Visual**: Barra que mostra o andamento das orações
- **Reflexões**: Cada mistério inclui meditação guiada
- **Navegação Sequencial**: Botões para avançar/voltar nas orações

### 💡 Sistema de Ajuda

- Guias de como rezar o terço
- Dicas de meditação e ritmo
- Painel de ajuda expansível

### ⚙️ Personalização

- **3 Temas**: Claro, Escuro e Sépia
- **Tamanho da Fonte**: Ajustável para melhor leitura
- **Sons**: Notificações opcionais
- **Avanço Automático**: Progressão automática com timer

### 🎹 Atalhos de Teclado

- **Setas**: Navegar entre orações
- **Espaço**: Iniciar/pausar timer

## 🔧 Tecnologias Utilizadas

### Frontend

- HTML5 semântico com acessibilidade
- CSS3 com variáveis personalizadas, grid e flexbox
- JavaScript ES6+ com classes e módulos
- Google Fonts para tipografia elegante
- Local Storage para salvar preferências

### Backend

- Node.js
- Express.js
- Middleware para arquivos estáticos
- Sistema de logs de requisições
- Health Check endpoint

## 📖 Conteúdo Incluído

- Todas as orações tradicionais (Sinal da Cruz, Creio, Pai Nosso, Ave Maria, etc.)
- 5 Mistérios de cada tipo com passagens bíblicas
- Reflexões espirituais para cada mistério
- Orações finais (Infinitas Graças, Salve Rainha)

## 🔄 Comandos Úteis

```bash
# Instalar dependências
npm install

# Iniciar servidor em produção
npm start

# Iniciar servidor em desenvolvimento (com auto-reload)
npm run dev

# Verificar se está funcionando
curl http://localhost:8080/health
```

## 🌐 Configuração de Porta

Por padrão, o servidor roda na porta 8080. Para usar uma porta diferente:

```bash
PORT=3000 npm start
```

## 🛠️ Estrutura do Projeto

```
chaplet-divine-mercy/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript da aplicação
├── terco               # Arquivo com conteúdo dos mistérios
├── server.js           # Servidor Express
├── package.json        # Configurações do Node.js
└── README.md           # Este arquivo
```

## 🙏 Como Usar

1. Acesse http://localhost:8080
2. Use o menu lateral para navegar entre os dias da semana
3. Siga as orações sequencialmente usando os botões de navegação
4. Configure o timer de meditação conforme sua preferência
5. Personalize a experiência nas configurações (tema, fonte, sons)

---

**Desenvolvido com 💙 para a prática da oração do Santo Terço**
