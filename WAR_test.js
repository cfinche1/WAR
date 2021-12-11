let expect = chai.expect;

describe('MyFunctions', function() {
    describe('Deck of cards', function() {
        it('should return a full deck of cards', function() {
            let testDeck = new Deck();
            expect(testDeck).to.be.an('object');
        });
    });

    
})