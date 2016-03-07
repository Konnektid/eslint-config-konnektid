module.exports = {
    rules: {

        // disable rules
        "no-multiple-empty-lines": 0,
        "no-debugger": 0,
        "no-console": 0,

        // relax rules
        "prefer-arrow-callback": 1,
        "camelcase": [1, { properties: "never" }],
        "require-jsdoc": 1,
        "no-lone-blocks": 1,
        "no-use-before-define": 1,
        "no-lonely-if": 1,
        "no-else-return": 1,
        "no-loop-func": 1,
        "no-unused-expressions": [1, { allowTernary: true, allowShortCircuit: true }],
        "no-sequences": 1,
        "callback-return": [1, ["callback", "cb", "next"]],
        "comma-dangle": 1,
        "no-empty": 1,
        "no-octal": 1,
        "no-unreachable": 1
    }
};
