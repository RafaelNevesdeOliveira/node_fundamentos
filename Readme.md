# Comentários Explicativos

## Stateful vs Stateless

### Stateful

- **Descrição**: Em um contexto de programação ou arquitetura de sistemas, "Stateful" refere-se a um design onde o estado é mantido ou persistido. Em aplicações stateful, a informação sobre o estado da sessão é guardada, permitindo que a mesma seja retomada ou referenciada em interações subsequentes.
- **Exemplo**: Um aplicativo web que lembra o seu carrinho de compras entre as sessões é um exemplo de um sistema stateful.

### Stateless

- **Descrição**: "Stateless" é um modelo onde não há retenção de estado entre as transações. Cada transação é tratada como independente e nova. Em sistemas stateless, a persistência de dados é realizada através de bancos de dados, arquivos de texto, ou outros métodos de armazenamento externo.
- **Exemplo**: APIs RESTful são frequentemente stateless, tratando cada requisição HTTP como uma operação independente.

## Conversão de Array para JSON

- **Descrição**: A conversão de um array para JSON é um processo comum em programação web, onde estruturas de dados (como arrays) são convertidas em um formato JSON para fácil transmissão e interpretação em diferentes sistemas ou linguagens de programação.
- **Exemplo**: Em JavaScript, isso é frequentemente feito usando `JSON.stringify(array)`.

## Cabeçalhos (Headers)

- **Descrição**: Cabeçalhos são metadados em requisições e respostas HTTP. Eles fornecem informações adicionais sobre a transmissão de dados, como tipo de conteúdo, codificação, autorização, entre outros.
- **Exemplo**: O cabeçalho `'Content-Type', 'application/json'` informa ao cliente que o conteúdo retornado está no formato JSON.

## HTTP Status Codes

- **Descrição**: Os códigos de status HTTP são respostas padronizadas emitidas por um servidor na Internet para indicar o resultado de uma requisição feita pelo cliente. Eles ajudam a identificar se uma operação foi bem-sucedida, encontrou um erro, ou necessita de ação adicional.
- **Exemplo**: O status `200 OK` indica sucesso, enquanto `404 Not Found` indica que o recurso solicitado não foi encontrado.

## STREAMS

- **Definição**: Conseguir ler pequenas partes de algo (tipo filme na Netflix)
- **Tipos**: Temos dois tipos:
- Writeble Stream (Netflix e Spotfy) onde vao mandando informacao aos poucos;
- Readble streams (envio de uma planilha), onde o back vai lendo e processando os dados aos poucos