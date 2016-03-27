module.exports = {
    rules: {

        // indentation
        "no-mixed-spaces-and-tabs": 2,
        "indent": [2, 4, { SwitchCase: 1 }], // enforce indentation to 4 spaces

        // quoting
        "quotes": [2, "double"],          // enforce double quotes
        "jsx-quotes": [2, "prefer-double"],

        // linebreaks
        "brace-style": [2, "stroustrup", { allowSingleLine: true }],
        "operator-linebreak": [2, "after"],
        "no-multiple-empty-lines": [2, { max: 1 }],
        "linebreak-style": [2, "unix"],

        // spacing
        "keyword-spacing": [2, { before: true, after: true }],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, { anonymous: "always", named: "never" }],
        "semi-spacing": 2,
        "comma-spacing": 2,
        "block-spacing": 2,
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, { words: true, nonwords: false }],
        "no-spaced-func": 2,
        "template-curly-spacing": [2, "never"],
        "generator-star-spacing": [2, "after"],
        "yield-star-spacing": [2, "after"],
        "arrow-spacing": 2,               // spaces around arrow
        "array-bracket-spacing": [2, "never"],
        "object-curly-spacing": [2, "always"],

        /*
            Stylistic rules (WARN)
        */
        "lines-around-comment": [1, { beforeBlockComment: true, beforeLineComment: true }],

        /*
            Unused stylistic rules
        */
        "spaced-comment": 0,
        "no-multi-spaces": 0,
        "key-spacing": 0,                 // sometimes keys are aligned so ignore this rule
    }
};
