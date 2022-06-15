import 'mocha';
import {expect} from 'chai';
import {Backpack} from '../src/backpack/base-backpack';

describe('Comprobamos el funcionamiento de Backpack', () => {
    it('Comprobamos la creacion de mochila', () => {
      expect(new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5)).to.be.instanceOf(Backpack);
    });
    it('Comprobamos el funcionamiento de fillBackpackVoraz', () => {
        expect(new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5).fillBackpackVoraz()).to.be.eql(5);
    });  
    it('Comprobamos el funcionamiento de fillBackpackRandom', () => {
        expect(new Backpack([[1, 5], [4, 8], [9, 1], [8, 2]], 5).fillBackpackRandom()).to.be.lessThan(6);
    });   
});
