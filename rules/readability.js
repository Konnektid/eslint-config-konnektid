module.exports = {
    rules: {

        /*
        Clarity and readability (ERR)
        */
        "require-jsdoc": 2,
        "no-self-compare": 2,
        "no-lone-blocks": 2,
        "no-extra-bind": 2,
        "no-unneeded-ternary": 2,
        "no-useless-call": 2,
        "yoda": [2, "never"],
        "no-undef-init": 2,
        "block-scoped-var": 2,
        "no-use-before-define": 2,
        "no-lonely-if": 2,                // prefer elseif over else { if }
        "no-else-return": 2,
        "no-array-constructor": 2,        // prefer array literals [1, 2, 3]
        "no-new-object": 2,               // prefer object literal {}
        "operator-assignment": 2,         // prefer `x += y` over `x = x + y`

        /*
            Clarity and readability (WARN)
        */
        "valid-jsdoc": [1, { prefer: { return: "returns" }, requireReturn: false }],
        "curly": [1, "multi-or-nest"],
        "no-useless-concat": 1,
        "no-extra-parens": 1
    }
};
