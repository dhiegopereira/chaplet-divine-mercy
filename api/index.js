const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'posts.json');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota para obter todos os posts
app.get('/posts', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo de posts.' });
    }
    res.json(JSON.parse(data || '[]'));
  });
});

// Rota para criar um novo post
app.post('/posts', (req, res) => {
  const newPost = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo de posts.' });
    }

    const posts = JSON.parse(data || '[]');
    posts.push(newPost);

    fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao salvar o post.' });
      }
      res.status(201).json(newPost);
    });
  });
});

// Rota para deletar um post
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo de posts.' });
    }

    const posts = JSON.parse(data || '[]');
    const updatedPosts = posts.filter(post => post.id !== postId);

    fs.writeFile(DATA_FILE, JSON.stringify(updatedPosts, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao deletar o post.' });
      }
      res.status(200).json({ message: 'Post deletado com sucesso.' });
    });
  });
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const updatedPost = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo de posts.' });
    }

    const posts = JSON.parse(data || '[]');
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }

    posts[postIndex] = { ...posts[postIndex], ...updatedPost };

    fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao atualizar o post.' });
      }
      res.status(200).json(posts[postIndex]);
    });
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});