module.exports = {
    rules: {

        /*
            Code complexity (WARN)
        */
        "max-statements": [1, 30],        // split up in multiple functions           => SIG guideline: 15
        "max-params": [1, 5],             // just use a single object literal         => SIG guideline:  4 (but an `opts` or `args` parameter should not count as 1)
        "complexity": [1, 10],            // maximum unique paths trough a function   => SIG guideline:  5
        "max-depth": [1, 3],              // a lot of nested if/for is hard to read
        "max-nested-callbacks": [1, 5],   // use promises where possible
        "max-len": [1, 200]               // split up in multiple statements
    }
};
