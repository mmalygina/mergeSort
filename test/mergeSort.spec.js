const expect = require('chai').expect;
const sinon = require('sinon');
const mergeSort = require('../src/mergeSort');

describe('mergeSort tests', () => {
    it('expect mergeSort to exist', () => {
        expect(mergeSort).to.be.ok;
    });
    it('mergeSort sorts empty array', () => {
        expect(mergeSort([])).to.eql([]);
    });
    it('mergeSort sorts array of even length', () => {
        expect(mergeSort([3, 15, 7, 1, 35, 0])).to.eql([0, 1, 3, 7, 15, 35]);
    });
    it('mergeSort sorts array of odd length', () => {
        expect(mergeSort([3, 15, 7, 1, 35, 0, 2])).to.eql([0, 1, 2, 3, 7, 15, 35]);
    });
});