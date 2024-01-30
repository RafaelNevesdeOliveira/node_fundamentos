## Run Test

```
npm run test
```

### Três A's
- Definição: Esta etapa envolve a configuração do ambiente de teste. Aqui, você prepara tudo o que é necessário para executar o teste. Isso pode incluir criar objetos, configurar mocks, definir inputs e preparar o contexto necessário para o teste.
Objetivo: Garantir que o teste tenha um ponto de partida definido e que todos os pré-requisitos para o teste sejam atendidos.
Act (Agir):

- Definição: Esta é a etapa onde você executa a ação que deseja testar. Geralmente, isso envolve chamar um método ou função com os inputs preparados na etapa de Arrange.
Objetivo: Executar a ação que está sendo testada para gerar um resultado. Esta é a parte do teste que realmente interage com o código que você está testando.
Assert (Afirmar):

- Definição: Nesta etapa, você verificará os resultados da ação. Isso envolve comparar o resultado real com o resultado esperado. As assertivas são declarações que falham se a condição especificada não for verdadeira.
Objetivo: Confirmar que o código que está sendo testado se comporta como esperado. As assertivas garantem que o resultado da ação atende aos critérios definidos na sua especificação.

## Exemplo prático
```js
function add(a, b) {
    return a + b;
}

// Teste da função add
describe('add function', () => {
    it('should add two numbers correctly', () => {
        // Arrange
        const num1 = 5;
        const num2 = 3;

        // Act
        const result = add(num1, num2);

        // Assert
        expect(result).toBe(8);
    });
});

```

## Explanação do exemplo
- Arrange: Definimos num1 e num2 com valores que serão usados na soma.
- Act: Chamamos a função add com num1 e num2 como argumentos.
- Assert: Usamos expect para verificar se o resultado retornado pela função add é igual a 8.