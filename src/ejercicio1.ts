
/**
 * Clase BackPack crea la mochila con los objetos seleccionados
 */
export class Backpack {

    /**
     * 
     * @param pesoBeneficio tupla que contiene el valor del peso y del beneficio de los objetos
     * @param pesomax peso maximo de la mochila
     */
    constructor(private pesoBeneficio: [number, number][], private pesomax: number){
        this.pesoBeneficio = pesoBeneficio;
        this.pesomax = pesomax;
    }

    /**
     * Getter
     * @returns devuelve el peso maximo de la mochila
     */
    getPesoMax(): number {
        return this.pesomax;
    }

    /**
     * Setter
     * @param newPesoMax nuevo peso maximo de la mochila
     */
    setPesoMax(newPesoMax: number) {
        this.pesomax = newPesoMax;
    }

    /**
     * Ordena el array tupla segun el ratio peso/beneficio de los objetos
     */
    sortPesoBeneficio(): [number, number][] {
        this.pesoBeneficio = this.pesoBeneficio.sort((n1, n2) => n2[0]/n1[1] - n1[1]/n2[1]);
        this.pesoBeneficio.reverse();
        return this.pesoBeneficio;
    }

    /**
     * Rellena la mochila segun lo calculado con el sort
     */
    fillBackpack(): number {
        let backpack = 0;
        this.pesoBeneficio.forEach(ratio => {
            if ((backpack + ratio[0]) < this.pesomax) {
                backpack = backpack + ratio[0];
            }
        });
        return backpack;
    }

}

let prueba: Backpack = new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5);

prueba.sortPesoBeneficio();
prueba.fillBackpack();