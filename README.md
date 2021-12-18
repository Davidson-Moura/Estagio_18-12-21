## API

Escolhi o laravel para fazer a api, pois assim pude por no meu site para testes.

### A API está em funcionamento no site https://davidson-maytel.online/api

Exemplo de endereço de chamada da api para todos os contatos: https://davidson-maytel.online/api/tcontatos

### Como Funciona as requisições:

- Todas as requisições são do tipo post.

- Todas as requisições precisam do QueryParams token='estagio' no post.

## Todas as funcionalidades desta Api:

### Retornar todos os contatos:

#### Url:
- https://davidson-maytel.online/api/tcontatos

#### Metodo:
- Post

#### QueryParams:
- token='estagio'

#### Retorno
- Formato json de todos os contatos

### Retornar um contato especifico:

#### Url:
- https://davidson-maytel.online/api/econtatos

#### Metodo:
- Post

#### QueryParams:
- token = 'estagio'
- tipo = <int> de 1 a 4; 1 para id, 2 para nome, 3 para endereço e 4 para telefone
- argumento = valor do tipo

#### Retorno
- Formato json de um contato

### Adiciona um contato:

#### Url:
- https://davidson-maytel.online/api/addcontatos

#### Metodo:
- Post

#### QueryParams:
- token = 'estagio'
- nome
- endereco
- telefone

#### Retorno
- 1 para operação bem sucedida
- 2 para operação mal sucedida

### Remove um contato:

#### Url:
- https://davidson-maytel.online/api/removecontato

#### Metodo:
- Post

#### QueryParams:
- token = 'estagio'
- tipo = <int> de 1 a 4; 1 para id, 2 para nome, 3 para endereço e 4 para telefone
- argumento = valor do tipo

#### Retorno
- 1 para operação bem sucedida
- 2 para operação mal sucedida