const token2patternlab = require("../lib");

console.log(token2patternlab(
  [ { name: "Button" }
  , { description: "This is a description" }
  , { "code": {
        language: ""
      , content: [
          "<Button"
        , "onClick=handler"
        , "\>"
        ]
      }
    }
]));
