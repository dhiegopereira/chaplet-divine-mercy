const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para logs das requisições
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.get('User-Agent') || 'Unknown';

  console.log(`[${timestamp}] ${method} ${url} - ${userAgent}`);
  next();
});

// Rota principal - serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para servir o arquivo de terço (caso precise acessar via API)
app.get('/api/terco', (req, res) => {
  res.sendFile(path.join(__dirname, 'terco'));
});

// Rota de health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Servidor do Terço Digital funcionando!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Middleware para capturar erros 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Página não encontrada',
    message: 'A página solicitada não existe.',
    path: req.url,
  });
});

// Middleware para capturar erros gerais
app.use((err, req, res, next) => {
  console.error('Erro no servidor:', err.stack);
  res.status(500).json({
    error: 'Erro interno do servidor',
    message: 'Algo deu errado no servidor.',
  });
});

// Função para iniciar o servidor com tratamento de erros
const startServer = () => {
  try {
    const server = app.listen(PORT, () => {
      console.log('🚀 ========================================');
      console.log('📿 TERÇO DIGITAL - SERVIDOR INICIADO');
      console.log('🚀 ========================================');
      console.log(`🌐 Servidor rodando na porta: ${PORT}`);
      console.log(`🔗 Acesse: http://localhost:${PORT}`);
      console.log(`📊 Health Check: http://localhost:${PORT}/health`);
      console.log(`⏰ Iniciado em: ${new Date().toLocaleString('pt-BR')}`);
      console.log('🚀 ========================================');
    });

    // Tratamento para encerramento gracioso do servidor
    process.on('SIGTERM', () => {
      console.log('🔴 Recebido sinal SIGTERM. Encerrando servidor...');
      server.close(() => {
        console.log('✅ Servidor encerrado com sucesso.');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      console.log('🔴 Recebido sinal SIGINT (Ctrl+C). Encerrando servidor...');
      server.close(() => {
        console.log('✅ Servidor encerrado com sucesso.');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
};

// Verificar se a porta está disponível
const net = require('net');
const checkPort = (port) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(port, () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });

    server.on('error', (err) => {
      resolve(false);
    });
  });
};

// Inicializar servidor
checkPort(PORT)
  .then((available) => {
    if (available) {
      startServer();
    } else {
      console.error(`❌ Porta ${PORT} já está em uso!`);
      console.log('💡 Sugestões:');
      console.log(`   - Pare o processo que está usando a porta ${PORT}`);
      console.log('   - Ou defina uma porta diferente: PORT=3000 npm start');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('❌ Erro ao verificar a porta:', error);
    process.exit(1);
  });

module.exports = app;
