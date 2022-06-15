import 'mocha';
import {expect} from 'chai';
import {SortBackpack} from '../src/backpack/sort-backpack';

describe('Comprobamos el funcionamiento de SortBackpack', () => {
    it('Comprobamos el funcionamiento de sortPesoBeneficio', () => {
        expect(new SortBackpack([[1, 5], [4, 8], [9, 1], [8, 2]]).sortPesoBeneficio()).to.be.eql([[9, 1], [8, 2], [4, 8], [1, 5]]);
    });    
});