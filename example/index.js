const json2md = require("../lib");

console.log(json2md([
  { p: "This is a paragraph" }
  , { "code": {
        language: "js"
      , content: [
          "function sum (a, b) {"
        , "   return a + b;"
        , "}"
        , "sum(1, 2);"
        ]
      }
    }
]));
