module.exports = {
    ecmaFeatures: {
        arrowFunctions: true,
        binaryLiterals: true,
        blockBindings: true,
        classes: true,
        forOf: true,
        generators: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        octalLiterals: true,
        templateStrings: true
    },
    rules: {

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
        "prefer-spread": 0,                 // use o.f(...args) instead of o.f.apply(o, args)

        /*
            Unused ES6 styles
        */
        "prefer-reflect": 0,
        "prefer-template": 0,
        "require-yield": 0
    }
}
