//3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:

//a) O maior valor;
//b) O menor valor;
//c) O valor médio.

function verificaNumero(lista: any[]): boolean {
    let i: number=0;
    for(i;i<lista.length;i++){

        if(isNaN(lista[i])==true){
            console.log("Essas Lista não é completamente numérica");
            return false;
        }
    }
    return true;
}

function analisalista(lista: any[]): number[] {
    if(verificaNumero(lista)== true){
        let maior:number= -Infinity;
        let menor:number= Infinity;
        let soma:number= 0;
        let qtd:number= 0;
        
        let i: number=0;
        for(i;i<lista.length;i++){
            if(lista[i] >= maior) maior=lista[i];
            if(lista[i] <= menor) menor=lista[i];
            soma+=lista[i];
            qtd++
        }

        let media:number= soma/qtd;
        let valores=[maior,menor,media];
        return valores;
    }else{
        return [];
    }
}

//Demonstre essa função com o paradigma funcional e imperativo
const verificaNumeroF = (lista: any[]): any =>{
    return lista.find((value) => isNaN(value)==true)? false : true;
}
console.log(verificaNumeroF([1,'a',3]));
console.log(verificaNumero([1, 'a', 3]));
console.log(verificaNumeroF([1,2,3]));
console.log(verificaNumero([1, 2, 3]));