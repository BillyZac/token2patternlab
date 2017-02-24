"use strict";

const converters = require("./converters")
    , indento = require("indento")
    ;

function token2patternlab(data, prefix, _type) {
    prefix = prefix || "";
    if (typeof data === "string" || typeof data === "number") {
        return indento(data, 1, prefix);
    }

    let content = [];

    // Handle arrays
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; ++i) {
            content.push(indento(token2patternlab(data[i], "", _type), 1, prefix));
        }
        return content.join("\n");
    } else {
        let type = Object.keys(data)[0]
          , func = converters[_type || type]
          ;

        if (typeof func === "function") {
            return indento(func(_type ? data : data[type], token2patternlab), 1, prefix)
        }
        throw new Error("There is no such converter: " + type);
    }
}

token2patternlab.converters = converters;

module.exports = token2patternlab;
