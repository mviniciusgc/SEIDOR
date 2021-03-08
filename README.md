<h3 align="center">teste-pratico com tdd</h3>

---

<h2 align="center"> Projeto desenvolvido com TDD utilizando Jest.
    <br>
</h2>

## 🏁 Getting Started <a name = "getting_started"></a>

### Para rodar esse projeto é necessário que siga e atenda os requisitos abaixo.

### Prerequisites

#### Para instalar as dependências utilize:

```
yarn
```
#### ou

```
npm install
```

## 🔧 Running the tests <a name = "tests"></a>

### Para executar os testes, basta executar o comando abaixo


```
yarn test
```
#### ou

```
npm run test
```
### Para verificar o coverage, execute os comandos abaixo

Abra a pasta "coverage" -> "lcov-report" e abra no navegador o arquivo index.html

### Rotas

#### Driver

#### POST
driver
driver/update

#### GET
driver/findAll
<br> 
driver/find

#### DELETE
driver/delete

#### Automobile

#### POST
automobile
<br> 
automobile/update

#### GET
automobile/findAll
<br> 
automobile/find

#### DELETE
automobile/delete

#### Car Rental

#### POST
carRental


### Objetos de envio

### Driver

Create
```
{
	"nome":"Nome Motorista"
}
```
update
```
{
	"id": "Id Motorista",
	"nome":"Nome Motorista"
}
```
FindAll
```
{
		"nome":"Nome para a busca"
}
```
Find
```
{
	"id": "Id Motorista"
}
```
Delete
```
{
		"id": "Id Motorista"
}
```

### Automobile

Create
```
{
    "placa": "Placa do carro",
     "cor": "Cor do carro",
     "marca": "Marca do carro"
}
```
Update
```
{
	"id": "Id do carro",
  "placa": "Placa do carro",
  "cor": "Cor do carro",
  "marca": "Marca do carro"
}
```
FindAll
```
{
    "cor": "Cor do carro",
    "marca": "Marca do carro"
}
```
Find
```
{
	"id": "Id do carro"
}
```
Delete
```
{
		"id": "Id do carro"
}
```
### Car Rental

Post
```
{
	"driver":{
	            "nome": "Nome do motorista",
  		    "id": "Id Motorista"
		},
	"automobile":{
		    "placa": "Placa do carro",
 		    "cor": "Cor do carro",
  		    "marca": "Marca do carro",
  		   "id": "Id do Carro"
		},
	"descricaoUtilizacao":"Descrição do aluguel do carro"
	
}
```


## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
