
/**
 * Clase especifica para ordenar el peso/beneficio
 */
export class SortBackpack {
    constructor(private arraySort: [number, number][]){
        this.arraySort = arraySort;
    }

    /**
     * Ordena el array tupla segun el ratio peso/beneficio de los objetos
     */
     sortPesoBeneficio(): [number, number][] {
        this.arraySort = this.arraySort.sort((n1, n2) => n2[0]/n2[1] - n1[0]/n1[1]);
        return this.arraySort;
    }
}