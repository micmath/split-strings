/**
 * Created by elgs on 7/2/14.
 */

(function () {
    "use strict";

    var splitStrings = require('./index.js');

    describe('splitStrings Suite', function () {
        beforeEach(function () {
        });
        afterEach(function () {
        });

        it('should split double quoted string', function () {
            var i = " I  said 'I am sorry.', and he said \"it doesn't matter.\" ";
            var o = splitStrings(i);
            expect(7).toBe(o.length);
            expect(o[0]).toBe("I");
            expect(o[1]).toBe("said");
            expect(o[2]).toBe("I am sorry.,");
            expect(o[3]).toBe("and");
            expect(o[4]).toBe("he");
            expect(o[5]).toBe("said");
            expect(o[6]).toBe("it doesn't matter.");
        });

        it('should split pure double quoted string', function () {
            var i = "I said \"I am sorry.\", and he said \"it doesn't matter.\"";
            var o = splitStrings(i);
            expect(o.length).toBe(7);
            expect(o[0]).toBe("I");
            expect(o[1]).toBe("said");
            expect(o[2]).toBe("I am sorry.,");
            expect(o[3]).toBe("and");
            expect(o[4]).toBe("he");
            expect(o[5]).toBe("said");
            expect(o[6]).toBe("it doesn't matter.");
        });

        it('should split single quoted string', function () {
            var i = 'I said "I am sorry.", and he said "it doesn\'t matter."';
            var o = splitStrings(i);
            expect(o.length).toBe(7);
            expect(o[0]).toBe("I");
            expect(o[1]).toBe("said");
            expect(o[2]).toBe("I am sorry.,");
            expect(o[3]).toBe("and");
            expect(o[4]).toBe("he");
            expect(o[5]).toBe("said");
            expect(o[6]).toBe("it doesn't matter.");
        });

        it('should split pure single quoted string', function () {
            var i = 'I said \'I am sorry.\', and he said "it doesn\'t matter."';
            var o = splitStrings(i);
            expect(o.length).toBe(7);
            expect(o[0]).toBe("I");
            expect(o[1]).toBe("said");
            expect(o[2]).toBe("I am sorry.,");
            expect(o[3]).toBe("and");
            expect(o[4]).toBe("he");
            expect(o[5]).toBe("said");
            expect(o[6]).toBe("it doesn't matter.");
        });

        it('should split to 4 empty strings', function () {
            var i = ',,,';
            var o = splitStrings(i, ',', true);
            expect(o.length).toBe(4);
        })

        it('should allow space if escaped', function () {
            var i = 'I\\ said\\ it\\ matters';
            var o = splitStrings(i, ' ', true);
            expect(o.length).toBe(1);
        })

        it('should allow same quote inside quote if escaped', function () {
            var i = 'What\\\'s the matter?';
            var o = splitStrings(i, ' ', true);
            expect(o.length).toBe(3);
            expect(o[0]).toBe("What's");
            expect(o[1]).toBe("the");
            expect(o[2]).toBe("matter?");
        })
    });
})();
