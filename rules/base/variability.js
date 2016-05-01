module.exports = {
    rules: {

        "no-var": 2,                      // use const or let
        "prefer-const": 2,                // only use let if you change the var
        "block-scoped-var": 2,
        "no-inner-declarations": 2,
        "no-const-assign": 2,
        "no-delete-var": 2,
        "no-case-declarations": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-use-before-define": 2,
        "no-func-assign": 2,
        "no-class-assign": 2,             // dont allow overwriting class identifiers
        "no-redeclare": [2, { builtinGlobals: true }],
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,

        "no-shadow": [1, { builtinGlobals: true, hoist: "functions" }],
    }
};
