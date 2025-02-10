const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas

// Array de usuários (simulando um banco de dados)
const users = [
  { id: 1, username: 'ananias', password: '1234' },
  { id: 2, username: 'manuel', password: '1234' },
  { id: 3, username: 'helmer', password: '12345' },
];

// Rotas

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username e password são obrigatórios.' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }

  // Aqui você pode gerar um token JWT ou simplesmente retornar o usuário
  res.json({ message: 'Login bem-sucedido!', user });
});


// Listar todas as tarefas
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas.' });
  }
});

// Criar uma nova tarefa
app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "O campo 'title' é obrigatório." });
  }
  try {
    const newTask = await prisma.task.create({
      data: { title, description },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
});

// Atualizar uma tarefa
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const taskId = parseInt(id);

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { title, description, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
  }
});

// Deletar uma tarefa
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const taskId = parseInt(id);

  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  try {
    await prisma.task.delete({
      where: { id: taskId },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa.' });
  }
});

// Deletar todas as tarefas
app.delete('/tasks', async (req, res) => {
  try {
    // Deletar todas as tarefas
    await prisma.task.deleteMany();

    // Resetar o contador de autoincremento (SQLite)
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Task'`;

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefas.' });
  }
});


// Inicializar o servidor
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});

