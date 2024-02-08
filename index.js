const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Linguagem de programação para design gráfico",
        "Linguagem de programação para desenvolvimento web",
        "Sistema operacional",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      resposta: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "var myVar = 10;",
      ],
      correta: 0,
    },
    {
      pergunta: "O que significa DOM em JavaScript?",
      resposta: [
        "Document Object Model",
        "Data Object Model",
        "Digital Object Module",
      ],
      correta: 0,
    },
    {
      pergunta: "Como se refere a um bloco de código que é executado repetidamente em JavaScript?",
      resposta: [
        "Loop",
        "Branch",
        "Function",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      resposta: [
        "Comparação de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      resposta: [
        "Tipo de dado para armazenar um único valor",
        "Estrutura de controle de fluxo",
        "Coleção ordenada de valores",
      ],
      correta: 2,
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      resposta: [
        "invokeFunction minhaFuncao();",
        "call myFunction();",
        "myFunction();",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      resposta: [
        "Função passada como argumento para outra função",
        "Tipo de loop",
        "Operador lógico",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      resposta: [
        "'let' é para valores constantes, 'const' é para variáveis mutáveis",
        "'let' é para variáveis mutáveis, 'const' é para valores constantes",
        "Não há diferença",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o conceito de 'escopo' em JavaScript?",
      resposta: [
        "Área física onde o código JavaScript é armazenado",
        "Visibilidade e acessibilidade de variáveis em diferentes partes do código",
        "Tipo de operador de comparação",
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
  
  //loop ou laço de repetição, fazendo um item de cada vez.
  //no 1 ta clonando o template, no2 ta modificando o h3
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  //aqui vai fazer a resposta, por meio do quizItem acessamos o dl e dt 
  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
     
     corretas.delete(item)
      if(estaCorreta) {
      corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas 
    }
    //colocado os valores(0 a 9) no value
    //aqui somente o input, para cada linha.
  //aqui colocamos as respostas
  quizItem.querySelector('dl').appendChild(dt)
  
  }
  //aqui removemos o A
  quizItem.querySelector('dl dt').remove()
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }