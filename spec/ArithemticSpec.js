import {operations} from '../src/arithemtic.js';

describe('Arithmetic Operations', function() {
    
    it('should add numbers', function() {
       expect(operations.add(1, 1)).toEqual(2);
    });
});
