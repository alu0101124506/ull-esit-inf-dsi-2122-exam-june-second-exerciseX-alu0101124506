import { SortBackpack } from "./sort-backpack";

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
     * Getter
     * @returns devuelve el array de peso/beneficio
     */
    getPesoBeneficio() {
        return this.pesoBeneficio;
    }

    /**
     * Setter
     * @param newPesoBeneficio nuevo valor para el array de peso/beneficio
     */
    setPesoBeneficio(newPesoBeneficio: [number, number][]) {
        this.pesoBeneficio = newPesoBeneficio;
    }

    /**
     * Rellena la mochila segun lo calculado con el sort de manera voraz
     * @returns el valor de la mochila
     */
    fillBackpackVoraz(): number {
        let backpack = 0;
        let backpacksort = new SortBackpack(this.pesoBeneficio);
        this.setPesoBeneficio(backpacksort.sortPesoBeneficio());
        this.pesoBeneficio.forEach(ratio => {
            if ((backpack + ratio[0]) <= this.pesomax) {
                backpack = backpack + ratio[0];
            }
        });
        return backpack;
    }

    /**
     * Rellena la mochila segun lo calculado con el sort de manera random
     * @returns el valor de la mochila
     */
    fillBackpackRandom(): number {
        let backpackPosible: number[] = [];
        this.pesoBeneficio.forEach(ratio => {
        });
        backpackPosible = backpackPosible.sort((n1, n2) => n2 - n1);
        let bestBackpack: number = backpackPosible[0];
        return bestBackpack;
    }
}

let prueba: Backpack = new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5);

prueba.fillBackpackVoraz();