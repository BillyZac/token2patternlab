"use strict";

const converters = module.exports = {};

converters.p = (input, token2patternlab) => {
    return token2patternlab(input, "\n") + "\n";
};

converters.name = (input, token2patternlab) => {
    const output = "---\ntitle: " + input + "\n---\n";
    return output;
};

converters.code = (input, token2patternlab) => {
    let c = "```" + (input.language || "") + "\n";
    if (Array.isArray(input.content)) {
        c += input.content.join("\n");
    } else {
        c += input.content;
    }
    c += "\n```";
    return c;
};
