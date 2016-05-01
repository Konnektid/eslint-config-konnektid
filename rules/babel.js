module.exports = {
    plugins: [
        "babel"
    ],
    rules: {

        // Handle async/await functions correctly
        "generator-star-spacing": 0,
        "babel/generator-star-spacing": [2, "after"],

        // @TODO Decorators not yet supported anyway
        // @TODO babel/new-cap does not support the PROPERTIES option
        // Ignore capitalized decorators (@Decorator)
        // "new-cap": 0,
        // "babel/new-cap": [2, { "properties": false }], // overridden by React rules

         // Handles destructuring arrays with flow type in function parameters
         "array-bracket-spacing": 0,
         "babel/array-bracket-spacing": [2, "never"],

         // Doesn't complain about export x from "mod"; or export * as x from "mod";
         "object-curly-spacing": 0,
         "babel/object-curly-spacing": [2, "always"],

         // Doesn't fail when using object spread (...obj)
         "object-shorthand": 0,
         "babel/object-shorthand": [1, "always"],

        // Handles async functions correctly
        "arrow-parens": 0,
        "babel/arrow-parens": [2, "as-needed"],

        //
    }
};
