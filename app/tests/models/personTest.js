define(['scripts/models/person'], function(Person) {

    describe('A Person Model', function() {
        beforeEach(function() {
            this.person = new Person({
                first: 'Jeff',
                last: 'Way',
                age: 27
            });
        });

        it('should exist', function() {
            expect(Person).toBeDefined();
        });

        it("should require a last name", function() {
            var status = this.person.set('last', '', {validate: true});

            expect(status).toBeFalsy();
        });

        it("can return the full name", function() {
            expect(this.person.fullName()).toBe('Jeff Way');
        });

        it("should determine the year of birth", function() {
            expect(this.person.yob()).toBe(1986);
        });
    });

});