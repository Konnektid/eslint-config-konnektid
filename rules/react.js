module.exports = {
    plugins: [
        "react"
    ],
    rules: {

        /*
            Override vanilla rules
        */
        "no-extra-parens": 0,                   // Conflicts with react/wrap-multilines
        "new-cap": 0,                           // Mixins just want to see the world burn

        /*
            Configure the React rules
        */
        "react/no-deprecated": 2,
        "react/no-multi-comp": [2, { "ignoreStateless": true }],        // also for stateless in future?
        "react/no-did-mount-set-state": [2, "allow-in-func"],      // Use getInitialState
        "react/no-did-update-set-state": [2, "allow-in-func"],
        "react/no-direct-mutation-state": 2,
        "react/no-unknown-property": 2,         // detects e.g. `class` instead of `className`
        "react/self-closing-comp": 2,
        "react/wrap-multilines": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/jsx-uses-react": 2,              // React is used after compilation - surpress warnings
        "react/jsx-uses-vars": 2,
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [2, { "nonEmpty": "line-aligned", "selfClosing": "line-aligned" }],
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-equals-spacing": [2, "never"], // @TODO check current style
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-no-duplicate-props": [2, { ignoreCase: true }],
        "react/jsx-no-undef": 2,
        "react/jsx-key": 2, // detect missing key property in array
        "react/jsx-no-bind": [1, { "ignoreRefs": true }],

        /*
            Warnings
        */
        "react/prefer-es6-class": [1, "always"],              // use `class X extends React.Component` instead
        "react/prefer-stateless-function": 1,
        "react/no-string-refs": 1,                            // use the new `x => this.refName = x` style instead
        "react/no-is-mounted": 1,                       // this is considered an antipattern
        "react/forbid-prop-types": [1, { "forbid": ["any", "array", "object"] }], // use `arrayOf` and `shape` instad
        "react/require-extension": [1, { extensions: [".js", ".jsx"] }],  // no need to add extension
        "react/jsx-max-props-per-line": [1, { maximum: 3 }],
        "react/jsx-handler-names": [1, { "eventHandlerPrefix": "handle", "eventHandlerPropPrefix": "on" }], // @TODO check for ES6 class without auto-bind
        /*
            Other available rules - disabled
        */
        "react/no-set-state": 0,                    // enforce using Redux to update state
        "react/no-danger": 0,                       // Danger is my middle name
        "react/sort-comp": 0,
        "react/display-name": 0,                    // JSX infers display name from variable name
        "react/jsx-sort-prop-types": 0,             // Sorting is bullshit
        "react/jsx-sort-props": 0,
        "react/jsx-no-literals": 0
    }
};
