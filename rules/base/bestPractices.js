module.exports = {
    rules: {

        /*
            Best practices (ERR)
        */
        "strict": [2, "global"],            // enforce "use strict" in global scope
        "eqeqeq": 2,                        // enfoce using === instead of == operator
        "consistent-this": [2, "self"],
        "new-cap": 2,
        "new-parens": 2,
        "no-new-symbol": 2,
        "no-invalid-this": 2,
        "no-new-wrappers": 2,
        "no-new-func": 2,
        "no-new": 2,
        "no-proto": 2,
        "no-loop-func": 2,
        "no-return-assign": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": [2, { "allowTernary": true }],
        "no-with": 2,
        "radix": 2,
        "no-native-reassign": 2,
        "no-extend-native": 2,
        "callback-return": [2, ["callback", "cb", "next"]],
        "handle-callback-err": 2,
        "no-fallthrough": 2,
        "no-path-concat": 2,
        "semi": [2, "always"],
        "no-sync": 2,
        "no-octal": 2,

        /*
            Best practices (WARN)
        */
        "global-require": 1
    }
};
