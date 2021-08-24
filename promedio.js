/*const lista1 = [
    100, 
    200, 
    300,
    500,
];  */
// va a ser un array o un list de numeros.


function calcularMediaAritmetica (lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // // console.log(sumaLista1);
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}