# Whaticket - Instruções de Desenvolvimento

## Comandos Disponíveis

### Instalação
```bash
# Instalar todas as dependências (raiz, backend e frontend)
npm run install:all
```

### Desenvolvimento
```bash
# Iniciar backend e frontend simultaneamente
npm start
# ou
npm run dev

# Iniciar apenas o backend
npm run start:backend

# Iniciar apenas o frontend
npm run start:frontend
```

### Build
```bash
# Build de backend e frontend simultaneamente
npm run build

# Build apenas do backend
npm run build:backend

# Build apenas do frontend
npm run build:frontend
```

## Estrutura do Projeto

```
Whaticket/
├── package.json          # Configuração principal com concurrently
├── backend/              # API Node.js/TypeScript
│   ├── package.json
│   └── src/
└── frontend/             # React App
    ├── package.json
    └── src/
```

## Portas Padrão

- **Backend**: http://localhost:8080
- **Frontend**: http://localhost:3000

## Tecnologias

- **Backend**: Node.js, TypeScript, Express, Sequelize, Socket.io
- **Frontend**: React, Material-UI, Socket.io-client
- **Gerenciamento**: Concurrently para execução simultânea

## Desenvolvimento

1. Clone o repositório
2. Execute `npm run install:all` para instalar todas as dependências
3. Configure as variáveis de ambiente no backend
4. Execute `npm start` para iniciar o desenvolvimento
5. Acesse http://localhost:3000 para o frontend
6. A API estará disponível em http://localhost:8080 