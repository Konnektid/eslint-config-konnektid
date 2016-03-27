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
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [2, "tag-aligned"],
        "react/jsx-curly-spacing": [2, "never"],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-no-duplicate-props": [2, { ignoreCase: true }],
        "react/jsx-no-undef": 2,
        "react/react-in-jsx-scope": 2,
        "react/jsx-uses-react": 2,              // React is used after compilation - surpress warnings
        "react/jsx-uses-vars": 2,
        "react/no-did-mount-set-state": 2,      // Use getInitialState
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-unknown-property": 2,         // detects e.g. `class` instead of `className`
        "react/self-closing-comp": 2,
        "react/wrap-multilines": 2,
        "react/prop-types": 2,

        /*
            Warnings
        */
        "react/jsx-max-props-per-line": [1, { maximum: 3 }],
        "react/no-multi-comp": 1,
        "react/require-extension": [1, { extensions: [".js", ".jsx"] }],  // no need to add extension

        /*
            Other available rules - disabled
        */
        "react/no-set-state": 0,                    // enforce using Flux to update state
        "react/no-danger": 0,                       // Danger is my middle name
        "react/jsx-no-literals": 0,
        "react/display-name": 0,                    // JSX infers display name from variable name
        "react/forbid-prop-types": 0,
        "react/jsx-sort-prop-types": 0,             // Sorting is bullshit
        "react/jsx-sort-props": 0,
        "react/sort-comp": 0
    }
};
