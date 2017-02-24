"use strict";

const converters = module.exports = {};

let parseTextFormat = text => {

    let formats = {
        strong: "**"
      , italic: "*"
    };

    return text
            .replace(/<\/?strong\>/gi, formats.strong)
            .replace(/<\/?bold\>/gi, formats.strong)
            .replace(/<\/?em\>/gi, formats.italic)
            .replace(/<\/?italic\>/gi, formats.italic)
            ;
};

let indent = (content, spaces, ignoreFirst) => {
    let lines = content;

    if (typeof content === "string") {
        lines = content.split("\n");
    }

    if (ignoreFirst) {
        if (lines.length <= 1) {
            return lines.join("\n");
        }
        return lines[0] + "\n" + indent(lines.slice(1), spaces, false);
    }

    return lines.map(c => " ".repeat(spaces) + c).join("\n");
};

converters.p = (input, token2patternlab) => {
    return parseTextFormat(token2patternlab(input, "\n")) + "\n";
};

converters.name = (input, token2patternlab) => {
    return parseTextFormat(token2patternlab(input, "\n")) + "\n";
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
