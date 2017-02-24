const token2patternlab = require("../lib");

console.log(token2patternlab(
  [ { name: "Button" }
  , { description: "This is a description. And here is a code snippet:" }
  , { "code": {
        language: ""
      , content: [
          "<Button"
        , "  onClick={handler}"
        , "/\>"
        ]
      }
    }
]));
