"use strict";

module.exports = {
    env: {
        node: true,
        es6: true,
        browser: false,
        mocha: false
    },
    ecmaFeatures: {
        arrowFunctions: true,
        blockBindings: true,
        forOf: true,
        classes: true,
        superInFunctions: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true
    },
    rules: {

        /*
            Recommended rules (ERR)
        */
        "comma-dangle": 2,
        "no-cond-assign": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "no-fallthrough": 2,
        "no-octal": 2,
        "no-delete-var": 2,
        "no-undef": 2,
        "no-unused-vars": 2,
        "no-mixed-spaces-and-tabs": 2,

        /*
            Best practices (ERR)
        */
        "strict": [2, "global"],            // enforce "use strict" in global scope
        "eqeqeq": 2,                        // enfoce using === instead of == operator
        "consistent-this": [2, "self"],
        "quote-props": [2, "consistent-as-needed"],    // only quote properties when needed
        "dot-notation": 2,
        "new-cap": 2,
        "new-parens": 2,
        "no-invalid-this": 2,
        "no-new-wrappers": 2,
        "no-new-func": 2,
        "no-new": 2,
        "no-new-require": 2,
        "no-proto": 2,
        "no-loop-func": 2,
        "no-return-assign": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": [2, { allowTernary: true }],
        "no-with": 2,
        "radix": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": [2, { builtinGlobals: true, hoist: "functions" }],
        "no-redeclare": [2, { builtinGlobals: true }],
        "no-native-reassign": 2,
        "no-extend-native": 2,
        "callback-return": [2, ["callback", "cb", "next"]],
        "no-path-concat": 2,
        "semi": [2, "always"],
        "no-unexpected-multiline": 2,      // ASI might break your code

        /*
            Best practices (WARN)
        */
        "no-console": 1,
        "no-warning-comments": [1, { terms: ["todo", "fixme", "warning", "@todo", "@fixme", "@warning"] }],
        "no-sync": 1,
        "global-require": 1,

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
        "curly": [1, "multi-or-nest"],
        "no-useless-concat": 1,
        "valid-jsdoc": [1, { prefer: { return: "returns" }, requireReturn: false }],

        /*
            Stylistic rules (ERR)
        */
        "indent": [2, 4, { SwitchCase: 1 }], // enforce indentation to 4 spaces
        "quotes": [2, "double"],          // enforce double quotes
        "jsx-quotes": [2, "prefer-double"],
        "brace-style": [2, "stroustrup", { allowSingleLine: true }],
        "space-after-keywords": [2, "always"],
        "space-before-keywords": [2, "always"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, { anonymous: "always", named: "never" }],
        "operator-linebreak": [2, "after"],
        "semi-spacing": 2,
        "comma-spacing": 2,
        "block-spacing": 2,
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, { words: true, nonwords: false }],
        "camelcase": 2,
        "no-multiple-empty-lines": [2, { max: 1 }],
        "no-spaced-func": 2,

        /*
            Stylistic rules (WARN)
        */
        "array-bracket-spacing": [1, "never"],
        "object-curly-spacing": [1, "always"],
        "lines-around-comment": [1, { beforeBlockComment: true, beforeLineComment: true }],
        "linebreak-style": [1, "unix"],   // not really needed probably
        "no-extra-parens": 1,

        /*
            Unused stylistic rules
        */
        "spaced-comment": 0,
        "no-multi-spaces": 0,
        "key-spacing": 0,                 // sometimes keys are aligned so ignore this rule
        "no-inline-comments": 0,

        /*
            ES6 styles (ERR)
        */
        "no-var": 2,                      // use const or let
        "prefer-const": 2,                // only use let if you change the var
        "prefer-arrow-callback": 2,       // use arrow functions for callback and avoid binds
        "arrow-parens": [2, "as-needed"], // no parens around single arguments
        "arrow-spacing": 2,               // spaces around arrow
        "constructor-super": 2,           // prevents calling super() when not extending a class
        "no-class-assign": 2,             // dont allow overwriting class identifiers
        "no-dupe-class-members": 2,       // warn for duplicate class members
        "no-this-before-super": 2,
        "no-const-assign": 2,

        /*
            ES6 styles (WARN)
        */
        "object-shorthand": [1, "always"],  // suggest using {a,b,c} instead of {a:a, b:b, c:c}

        /*
            Unused ES6 styles
        */
        "prefer-spread": 0,               // use o.f(...args) instead of o.f.apply(o, args) -- wait for nodejs 5.0.0
        "prefer-reflect": 0,
        "prefer-template": 0,
        "require-yield": 0,

        /*
            Code complexity (WARN)
        */
        "max-statements": [1, 30],        // split up in multiple functions           => SIG guideline: 15
        "max-params": [1, 5],             // just use a single object literal         => SIG guideline:  4 (but an `opts` or `args` parameter should not count as 1)
        "complexity": [1, 10],            // maximum unique paths trough a function   => SIG guideline:  5
        "max-depth": [1, 3],              // a lot of nested if/for is hard to read
        "max-nested-callbacks": [1, 5],   // use promises where possible
        "max-len": [1, 200]               // split up in multiple statements
    }
};
