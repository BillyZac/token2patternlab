// Dependencies
var token2patternlab = require("../lib"),
    tester = require("tester");

tester.describe("token2patternlab", test => {

    // Paragraphs
    test.it("should support paragraphs", function(cb) {
        test.expect(token2patternlab({
            p: [
                "Two", "Paragraphs"
            ]
        })).toBe("\nTwo\n\nParagraphs\n");
        cb();
    });

    // Custom converters
    test.it("should support custom types", function(cb) {
        token2patternlab.converters.sayHello = function(input, token2patternlab) {
            return "Hello " + input + "!";
        };
        test.expect(token2patternlab({
            sayHello: "World"
        })).toBe("Hello World!")
        cb();
    });

    // Code samples
    test.it("should support code samples", function(cb) {
        test.expect(token2patternlab({
            code: {
                language: "js",
                content: [
                    "function sum (a, b) {", "   return a + b;", "}", "sum(1, 2);"
                ]
            }
        })).toBe("```js\nfunction sum (a, b) {\n   return a + b;\n}\nsum(1, 2);\n```");
        cb();
    });

    test.it("should create a component title", function(cb) {
      test.expect(token2patternlab({
        name: "button"
      })).toBe("---\ntitle: Button\n---\n")
    })

});
