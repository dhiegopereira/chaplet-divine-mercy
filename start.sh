#!/bin/bash

# Script de start para o Terço Digital
# Uso: ./start.sh [porta]

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configurações
DEFAULT_PORT=8080
PORT=${1:-$DEFAULT_PORT}

echo -e "${BLUE}📿 TERÇO DIGITAL - SCRIPT DE INICIALIZAÇÃO${NC}"
echo "=========================================="

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não está instalado!${NC}"
    echo -e "${YELLOW}💡 Instale o Node.js em: https://nodejs.org/${NC}"
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node --version)
echo -e "${GREEN}✅ Node.js encontrado: $NODE_VERSION${NC}"

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não está instalado!${NC}"
    exit 1
fi

NPM_VERSION=$(npm --version)
echo -e "${GREEN}✅ npm encontrado: $NPM_VERSION${NC}"

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Instalando dependências...${NC}"
    npm install
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Erro ao instalar dependências!${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Dependências instaladas com sucesso!${NC}"
else
    echo -e "${GREEN}✅ Dependências já instaladas${NC}"
fi

echo "=========================================="

# Verificar se a porta está disponível
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${RED}❌ Porta $PORT já está em uso!${NC}"
    echo -e "${YELLOW}💡 Processos usando a porta $PORT:${NC}"
    lsof -i :$PORT
    echo ""
    echo -e "${YELLOW}💡 Para parar o processo:${NC} kill -9 \$(lsof -ti:$PORT)"
    echo -e "${YELLOW}💡 Ou use uma porta diferente:${NC} ./start.sh 3000"
    exit 1
fi

# Definir a porta como variável de ambiente
export PORT=$PORT

echo -e "${GREEN}🚀 Iniciando servidor na porta $PORT...${NC}"
echo -e "${BLUE}🔗 Acesse: http://localhost:$PORT${NC}"
echo -e "${BLUE}📊 Health Check: http://localhost:$PORT/health${NC}"
echo ""
echo -e "${YELLOW}💡 Para parar o servidor, pressione Ctrl+C${NC}"
echo "=========================================="

# Iniciar o servidor
npm start