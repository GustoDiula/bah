const carros = [
    {
    nome: "Silverado",
    valor: "469.999,00",
    quantidade: 2 ,
    peso: 2.505,
    marca: "Chevrolet",
    ano: 2025,
    cor: "Preto",
    placa:1080    
    },
    {
    nome: "2500",
    valor: "569.990,00",
    quantidade:3 ,
    peso:3.448,
    marca: "Ram",
    ano: 2025,
    cor: "Prata",
    placa:3979
    },
    {
    nome: "S10",
    valor: "240.113,00",
    quantidade:5 ,
    peso:2.000,
    marca: "Chevrolet",
    ano: 2024,
    cor:"Branco",
    placa:2354
    },
    {
    nome: "Frontier",
    valor: "274.990,00",
    quantidade:2 ,
    peso:2.220,
    marca: "Nissan",
    cor: "Prata",
    ano: 2019,
    placa:4577
    },
    {
    nome: "L200",
    valor: "300.000,00",
    quantidade:3 ,
    peso: 2.042,
    marca: "Mitsubishi",
    cor:"Preto",
    ano: 2026,
    placa:7965
    }, 
    {
    nome: "Titano",
    valor: "219.990,00",
    quantidade: 2 ,
    peso: 2.039,
    marca: "Fiat",
    cor: "Vemelha",
    ano: 2024,
    placa:8764
    },
    {
    nome: "Hilux",
    valor: "282.390,00",
    quantidade: 1 ,
    peso: 1.995,
    marca: "Toyota",
    cor: "Branca",
    ano: 2015,
    placa:3664
    },
    {
    nome: "Ranger",
    valor: "242.600,00",
    quantidade: 1 ,
    peso: 2.069,
    marca: "Ford",
    cor: "Vermelha",
    ano: 2026,
    placa:3465
    },
    {
    nome: "Amarok",
    valor: "115.990,00",
    quantidade: 3 ,
    peso: 1.901,
    marca: "",
    cor: "Branca",
    ano: 2018,
    placa:8098
    },
    {
    nome: "Rampage",
    valor: "199.990,00",
    quantidade: 2 ,
    peso: 1.917,
    marca: "Ram",
    cor:"Azul",
    ano: 2023,
    placa:2685
    },
    {
    nome: "F-250",
    valor: "209.990,00",
    quantidade: 1 ,
    peso:2.825,
    marca: "Ford",
    cor: "Preto",
    ano: 2011,
    placa:2645
    }
]

// Criar o JSON:
const carrosJSON = JSON.stringify(carros)
console.log(carrosJSON)

// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("carros.json", carrosJSON)

// Ler o arquivo
const carrosArquivo = require("./carros.json")
console.log(carrosArquivo)

// MOSTRAR OS DADOS DO ARQUIVO ORGANIZADAMENTE
// alunosArquivo.forEach() ... etc
carrosArquivo.forEach((carros)=>{
    console.log(carros.nome + "\n" +
        " - Marca:" + carros.marca + "\n" +
        " - Valor: " + carros.valor + "\n" +
        " - Peso:" + carros.peso + "\n" +
        " - Ano:" + carros.ano + "\n" +
        " - Cor:" + carros.cor + "\n" +
        " - Quantidade:" + carros.quantidade + "\n" +
        "--------------------------------------------------------"
    
        )
    })
    function AdicionaCarros(nome, marca, valor, peso, ano, cor, quantidade){
        carros.push({
            nome: nome,
            marca: marca,
            peso: peso,
            ano: ano,
            cor: cor,
            quantidade: quantidade

        })
    }
