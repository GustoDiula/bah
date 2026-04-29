const produtos = [
    {
    nome: "Silverado",
    valor: "469.999,00",
    quantidade: 2 ,
    peso_kg: 2.505,
    marca: "Chevrolet",
    ano: 2025,
    codigo: 1080    
    },
    {
    nome: "2500",
    valor: "569.990,00",
    quantidade:3 ,
    peso_kg:3.448,
    marca: "Ram",
    ano: 2025,
    codigo:3979
    },
    {
    nome: "S10",
    valor: "240.113,00",
    quantidade:5 ,
    peso_kg:2.000,
    marca: "Chevrolet",
    ano: 2024,
    codigo:2354
    },
    {
    nome: "Frontier",
    valor: "274.990,00",
    quantidade:2 ,
    peso_kg:2.220,
    marca: "Nissan",
    ano: 2019,
    codigo:4577
    },
    {
    nome: "L200",
    valor: "300.000,00",
    quantidade:3 ,
    peso: 2.042,
    marca: "Mitsubishi",
    ano: 2026,
    codigo:7965
    }, 
    {
    nome: "Titano",
    valor: "",
    quantidade:0 ,
    peso:0,
    marca: "",
    ano: 2024,
    codigo:8764
    },
    {
    nome: "Hilux",
    valor: "",
    quantidade:0 ,
    peso:0,
    marca: "",
    ano: 2015,
    codigo:3664
    },
    {
    nome: "Ranger",
    valor: "",
    quantidade:0 ,
    peso:0,
    marca: "",
    ano: 2026,
    codigo:3465
    },
    {
    nome: "Amarok",
    valor: "",
    quantidade:0 ,
    peso:0,
    marca: "",
    ano: 2018,
    codigo:8098
     },
    {
    nome: "Rampage",
    valor: "",
    quantidade:0 ,
    peso:0,
    marca: "",
    ano: 2023,
    codigo:2685
    },
    {
    nome: "F-250",
    valor: "",
    quantidade:0 ,
    peso:0,
    marca: "",
    ano: 2015,
     codigo:2645
    }
]


alunosArquivo.forEach((aluno)=>{
    console.log(aluno.nome + 
        " - Data de nascimento: " + aluno.dt_nasc + 
        " - Série favorita: " + aluno.serie_fav)
})