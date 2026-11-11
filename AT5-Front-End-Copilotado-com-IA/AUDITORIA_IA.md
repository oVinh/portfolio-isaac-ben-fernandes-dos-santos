# AUDITORIA DE IA — Registro de copilotagem e revisão

**Ferramenta utilizada:** ChatGPT (OpenAI). Este arquivo registra como nossa dupla utilizou a Inteligência Artificial como assistente de desenvolvimento durante a criação e o ajuste dos scripts do projeto.

## Iteração 1 — Planejador de pausas

### 1. Engenharia de prompt

**Prompt utilizado pela dupla:**

> "Precisamos de ajuda para criar a lógica de um planejador simples em JavaScript. Queremos usar três entradas numéricas do usuário e retornar uma resposta em texto calculando a quantidade de pausas ideais. O código não deve usar bibliotecas externas e não deve parecer um diagnóstico médico, apenas uma ferramenta organizacional. Escreva a base do código para revisarmos."

**Objetivo técnico da dupla:** Criar a base do planejador em JavaScript e garantir a validação e o cálculo matemático correto a partir das entradas do usuário.

### 2. Resposta da IA

Trecho da base de código sugerida pela IA:

```javascript
const quantidade = Math.floor((horas * 60 - 1) / intervalo);
const totalMinutos = quantidade * duracao;
```

O script completo, após nossos ajustes, está em `js/planejador.js`.

### 3. Análise e integração pela dupla

Nosso HTML original tinha os campos `horasTela`, `reunioes` e `btnCalcular`. A IA sugeriu usar três campos mais específicos para o cálculo de pausas funcionar melhor (horas de trabalho, intervalo e duração). Nós alinhamos os identificadores (IDs) do nosso HTML com o JavaScript e inserimos a validação de números inteiros para evitar que o usuário digitasse valores inválidos ou negativos.

### 4. Refatoração e aprendizado da dupla

Lemos a documentação e o código gerado, entendemos como a função `Math.floor` funciona para arredondar os cálculos de divisão e ajustamos os nomes das variáveis e a resposta final de texto para manter o padrão visual e de comunicação do nosso projeto.

## Iteração 2 — Gráfico da APA

### 1. Engenharia de prompt

**Prompt utilizado pela dupla:**

> "Temos dados de uma pesquisa da APA sobre estresse e microgerenciamento no trabalho (51 e 38 para estresse; 47 e 23 para microgerenciamento). Precisamos de ajuda para configurar um gráfico de barras simples usando a biblioteca `Chart.js` versão 4.4.8 para exibir esses dados. Gere o trecho de configuração estruturada do dataset do gráfico."

**Objetivo técnico da dupla:** Integrar a biblioteca `Chart.js` de forma estática para renderizar visualmente os dados da pesquisa que extraímos manualmente.

### 2. Resposta da IA

Trecho da configuração estruturada pela IA:

```javascript
labels: ['Estresse', 'Microgerenciamento'],
datasets: [
    { label: 'Sabem que são monitorados', data: [51, 47] },
    { label: 'Não monitorados ou não sabem', data: [38, 23] }
]
```

O código completo final integrado por nós está em `js/grafico.js`.

### 3. Análise e integração pela dupla

Nós já havíamos conferido os números da APA lendo o relatório oficial. Pedimos para a IA focar apenas em montar a estrutura de arrays e objetos do `Chart.js`. Além disso, implementamos nós mesmos uma checagem simples no arquivo `js/grafico.js` para que o código não tente usar `Chart` caso a biblioteca não tenha carregado via CDN.

### 4. Refatoração e aprendizado da dupla

Ajustamos as cores das barras para combinar com a paleta definida em `css/styles.css` e revisamos as legendas do gráfico. Entendemos como o objeto de configuração do `Chart.js` recebe os arrays de dados.

## Iteração 3 — Tema claro e escuro

### 1. Engenharia de prompt

**Prompt utilizado pela dupla:**

> "Nosso HTML já possui um botão com o id `temaToggle` e nosso CSS já tem uma classe chamada `dark-mode` configurada no body. Crie o script em JavaScript que faça a alternância dessa classe ao clicar no botão e que salve a preferência do usuário no `localStorage` para quando ele recarregar a página."

**Objetivo técnico da dupla:** Alternar o tema do site de forma persistente utilizando o armazenamento local do navegador (Web Storage API).

### 2. Resposta da IA

Trecho da lógica gerada pela IA:

```javascript
document.body.classList.toggle('dark-mode');
const escuro = document.body.classList.contains('dark-mode');
localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
```

O arquivo completo, revisado por nós, está em `js/tema.js`.

### 3. Análise e integração pela dupla

A lógica proposta usava o id `temaToggle` e a classe `dark-mode` já presentes na versão inicial do HTML e CSS. Para complementar o código fornecido, adicionamos um trecho para alterar o texto interno do botão (de Claro para Escuro) e atualizar o atributo `aria-pressed`, garantindo as boas práticas de acessibilidade.

### 4. Refatoração e aprendizado da dupla

Testamos a alternância exaustivamente. Aprendemos como o `localStorage` grava os dados em formato de string no navegador do usuário e como resgatar esse dado no momento em que a página carrega para aplicar a classe `dark-mode` antes mesmo de o usuário clicar em algo.

## Situação final do registro

Este documento comprova nossa participação ativa na elaboração do código. Demonstramos o uso responsável da IA como assistente, apresentando os prompts direcionados, os retornos base da ferramenta e a nossa integração e refatoração manual, confirmando que dominamos a aplicação técnica no projeto.
