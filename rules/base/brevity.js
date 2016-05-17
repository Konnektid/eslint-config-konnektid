module.exports = {
    rules: {

        /*
            Clarity and readability (ERR)
        */
        "no-self-compare": 2,
        "no-self-assign": 2,
        "no-extra-bind": 2,
        "no-unneeded-ternary": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-label": 2,
        "no-constant-condition": 2,
        "no-useless-call": 2,
        "no-useless-escape": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 2,                // prefer elseif over else { if }
        "no-else-return": 2,
        "arrow-parens": [2, "as-needed"], // no parens around single arguments
        "no-empty": 2,
        "no-empty-function": [2, { "allow": ["arrowFunctions"] }],
        "no-empty-pattern": 2,
        "no-unused-vars": [2, { "args": "after-used", "varsIgnorePattern": "_+" }],
        "no-unused-labels": 2,
        "quote-props": [2, "consistent-as-needed"],    // only quote properties when needed
        "dot-notation": 2,

        /*
            Clarity and readability (WARN)
        */
        "curly": [1, "multi-or-nest"],
        "no-useless-concat": 1,
        "no-extra-parens": 1,
        "no-useless-constructor": 1,
        "no-duplicate-imports": 1,
        "object-shorthand": [1, "always"],  // suggest using {a,b,c} instead of {a:a, b:b, c:c}
        "prefer-spread": 1,                 // use o.f(...args) instead of o.f.apply(o, args)
        "prefer-rest-params": 1,
        "require-yield": 1
    }
};
