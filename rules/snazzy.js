module.exports = {
    rules: {

        /*
            Stylistic rules (ERR)
        */
        "indent": [2, 4, { SwitchCase: 1 }], // enforce indentation to 4 spaces
        "quotes": [2, "double"],          // enforce double quotes
        "jsx-quotes": [2, "prefer-double"],
        "brace-style": [2, "stroustrup", { allowSingleLine: true }],
        "keyword-spacing": [2, { before: true, after: true }],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, { anonymous: "always", named: "never" }],
        "operator-linebreak": [2, "after"],
        "semi-spacing": 2,
        "comma-spacing": 2,
        "block-spacing": 2,
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, { words: true, nonwords: false }],
        "camelcase": [2, { properties: "never" }],
        "no-multiple-empty-lines": [2, { max: 1 }],
        "no-spaced-func": 2,
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],  // use `function x() {}`` instead of `const x = function () {}`

        /*
            Stylistic rules (WARN)
        */
        "array-bracket-spacing": [1, "never"],
        "object-curly-spacing": [1, "always"],
        "lines-around-comment": [1, { beforeBlockComment: true, beforeLineComment: true }],
        "linebreak-style": [1, "unix"],   // not really needed probably

        /*
            Unused stylistic rules
        */
        "spaced-comment": 0,
        "no-multi-spaces": 0,
        "key-spacing": 0,                 // sometimes keys are aligned so ignore this rule
        "no-inline-comments": 0,
    }
};
