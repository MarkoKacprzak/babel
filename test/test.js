//var should = require('chai').should();
import chai from 'chai'; //babel-register, babel-core, babel-preset-es2015 --save-dev
const should = chai.should();

describe('Array', function() { 
    describe('#indexOf()', function() {        
        it('it should return -1 when the value is not present', function() {
            [1, 2, 3].indexOf(5).should.equal(-1);
        });            
    });        
});
    