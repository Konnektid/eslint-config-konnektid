module.exports = {
    rules: {

        // Stylistic errors
        "yoda": [2, "never"],
        "no-array-constructor": 2,        // prefer array literals [1, 2, 3]
        "no-new-object": 2,               // prefer object literal {}
        "operator-assignment": 2,         // prefer `x += y` over `x = x + y`
        "camelcase": [2, { properties: "never" }],
        "prefer-arrow-callback": 2,       // use arrow functions for callback and avoid binds
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],  // use `function x() {}`` instead of `const x = function () {}`

        // Stylistic warnings
        "arrow-body-style": [1, "as-needed"]
        "prefer-template": 1,
        "dot-location": [1, "property"],

        // unused
        "no-inline-comments": 0,
        "prefer-reflect": 0,
        "no-confusing-arrow": [0, { "allowParens": true }]
    }
};
