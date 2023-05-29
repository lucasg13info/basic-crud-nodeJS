const express = require('express');
const server = express();
server.use(express.json())




const cursos = ['Java', 'JavaScript', 'React']

server.get('/cursos', (req,res) =>{
    return res.json(cursos);
})


server.get('/cursos/:index', (req, res) =>{
    const { index } = req.params;

    return res.json(cursos[index])
})


//Criar cursos
server.post('/cursos', (req,res) =>{
    const { name } = req.body;
    cursos.push(name)

    return res.json(cursos)
})



//Atualização de curso
server.put('/cursos/:index', (req, res)=>{
    const { index } = req.params;
    const {  name  } = req.body;

    cursos[index] = name;

    return res.json(cursos)
})


//Excluindo curso
server.delete('/cursos/:index', (req,res)=>{
    const {index} = req.params;

    cursos.splice(index, 1);

    return res.json(cursos)
})

server.listen(3000)
