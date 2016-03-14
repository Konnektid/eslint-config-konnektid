module.exports = {
    rules: {

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
        "no-redeclare": [2, { builtinGlobals: true }],
        "no-native-reassign": 2,
        "no-extend-native": 2,
        "callback-return": [2, ["callback", "cb", "next"]],
        "no-path-concat": 2,
        "semi": [2, "always"],
        "no-unexpected-multiline": 2,      // ASI might break your code
        "no-sync": 2,

        /*
            Best practices (WARN)
        */
        "no-shadow": [1, { builtinGlobals: true, hoist: "functions" }],
        "no-console": 1,
        "no-warning-comments": [1, { terms: ["todo", "fixme", "warning", "@todo", "@fixme", "@warning"] }],
        "global-require": 1,

        /*
            Additional ESLint 2.0.0 recommended
        */
        "no-case-declarations": 0,
        "no-empty-pattern": 0,
        "no-new-symbol": 0,
        "no-self-assign": 0,
        "no-unused-labels": 0
    }
};
