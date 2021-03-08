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
http://localhost:3333/driver
http://localhost:3333/driver/update

#### GET
http://localhost:3333/driver/findAll
http://localhost:3333/driver/find

#### DELETE
http://localhost:3333/driver/delete

#### Automobile

#### POST
http://localhost:3333/automobile
http://localhost:3333/automobile/update

#### GET
http://localhost:3333/automobile/findAll
http://localhost:3333/automobile/find

#### DELETE
http://localhost:3333/automobile/delete

#### Car Rental

#### POST
http://localhost:3333/carRental


### Objetos de envio

### Driver

Create
```
{
	"nome":"marcos"
}
```
update
```
{
	"id": "5be7f2f3-aed0-4940-a7a8-5c62129bfae6",
	"nome":"marcos novo"
}
```
FindAll
```
{
		"nome":""
}
```
Find
```
{
	"id": "f27e8d6e-e109-4c63-a740-81ab14b8e0ab"
}
```
Delete
```
{
		"id": "b0313df3-85d6-40c8-8d02-d23e86df0988"
}
```


## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
