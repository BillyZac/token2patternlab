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

    // Code samples
    test.it("should support code samples", function(cb) {
        test.expect(json2md({
            code: {
                language: "js",
                content: [
                    "function sum (a, b) {", "   return a + b;", "}", "sum(1, 2);"
                ]
            }
        })).toBe("```js\nfunction sum (a, b) {\n   return a + b;\n}\nsum(1, 2);\n```");
        cb();
    });

});
