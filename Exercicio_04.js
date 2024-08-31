let distribuidora = [
    {
        "estado": "SP",
        "faturamento": 67836.43,
    },
    {
        "estado": "RJ",
        "faturamento": 36678.66,
    },
    {
        "estado": "MG",
        "faturamento": 29229.88,
    },
    {
        "estado": "ES",
        "faturamento": 27165.48,
    },
    {
        "estado": "Outros",
        "faturamento": 19849.53,
    }
]

let total=0;

distribuidora.forEach(estado => {
    total += estado.faturamento;
});

distribuidora.forEach(estado => {
    console.log("Estado: "+ estado.estado +"\nPercentual de Representação: "+ 
        (estado.faturamento*100)/total +"%\n");
})