module.exports = {
    rules: {
        "no-cond-assign": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-empty-character-class": 2,
        "no-invalid-regexp": 2,
        "no-ex-assign": 2,
        "no-extra-semi": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "no-new-require": 2,
        "constructor-super": 2,           // prevents calling super() when not extending a class
        "no-this-before-super": 2,

        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-dupe-class-members": 2,       // warn for duplicate class members

        "no-regex-spaces": 2,
        "no-unreachable": 2,

        "no-console": [1, { allow: ["log", "warn", "error"] }],     // warn for leftover console.debug
        "comma-dangle": 1
    }
};
