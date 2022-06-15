import 'mocha';
import {expect} from 'chai';
import {Backpack} from '../src/ejercicio1';

describe('Comprobamos el funcionamiento de Backpack', () => {
    it('Comprobamos la creacion de mochila', () => {
      expect(new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5)).to.be.instanceOf(Backpack);
    });
    it('Comprobamos el funcionamiento de sortPesoBeneficio', () => {
        expect(new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5).sortPesoBeneficio()).to.be.eql([[8, 2], [9, 1], [1, 5], [4, 8]]);
    });
    it('Comprobamos el funcionamiento de fillBackpack', () => {
        expect(new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5).fillBackpack()).to.be.eql(1);
    });    
});
