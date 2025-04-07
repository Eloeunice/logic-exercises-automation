# logic-exercises-automation

Projeto com o intuito de criar uma automação que envie exercícios de lógica de programação diariamente

A ideia é que os exercicios sejam gerados pelo Chatgpt e enviados diariamente pelo Whatssap, os exercicios devem ser armazenados dentro do MongoDb com a data em que foram enviados

### Fluxo do Sistema

Geração do Exercício 

    - Servidor Node.js chama a API do ChatGPT para pedir o exercício
    - Salva no MongoDB com status "pendente"

Envio pelo WhatsApp

   - Pega o exercício pendente no banco
   - Envia o exercício via API do WhatsApp 
   - Atualiza status para "enviado"

Tratamento da Resposta

    - Usuário envia a resposta
    - Webhook pega a resposta e envia para o servidor
    - Servidor coloca a a resposta no banco
