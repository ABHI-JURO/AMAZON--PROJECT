import { formalCurrency } from '../../scripts/utils/money.js';

describe('test suite: formalCurrency', () => {
    it('converts cents into dollers', () => {
        expect(formalCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formalCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent', () => {
        expect(formalCurrency(2000.5)).toEqual('20.01');
    });
});