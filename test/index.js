// Dependencies
var json2md = require("../lib"),
    tester = require("tester");

tester.describe("json2md", test => {

    // Paragraphs
    test.it("should support paragraphs", function(cb) {
        test.expect(json2md({
            p: [
                "Two", "Paragraphs"
            ]
        })).toBe("\nTwo\n\nParagraphs\n");
        cb();
    });

    // Custom converters
    test.it("should support custom types", function(cb) {
        json2md.converters.sayHello = function(input, json2md) {
            return "Hello " + input + "!";
        };
        test.expect(json2md({
            sayHello: "World"
        })).toBe("Hello World!")
        cb();
    });

});
