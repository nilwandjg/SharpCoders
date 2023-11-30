/*
    1º Conjunto de superset para o JS;
    2º A Microsoft Criou e mantém o TS;
    3º Boa parte das tecnologias front-end utilizam TS;
    4º Criado pelo desenvolvedor Anders Hejlsberg.
*/

//Variáveis
let nome: string = "Camila";
let idade: number = 26;
let estuda: boolean = true;
let endereco: any = 'Centro';

//Exibir variáveis
console.log(`O nome é ${nome}`);
console.log(`A idade é ${idade}`);
console.log(`Estuda ${estuda}`);
console.log(`O endereço é ${endereco}`);


//"Exportar" arquivo TS
//npx tsc nome_arquivo.ts

//Executar o projeto
//node nome_arquivo.js