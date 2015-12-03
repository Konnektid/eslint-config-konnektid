module.exports = {
    env: {
        node: false,
        browser: true
    },
    globals: {
        $: false                    // jQuery (false = do not reassign)
    },
    rules: {

        /*
            Override some of the default rules (ERR)
        */
        "no-debugger": 2,           // forgot to remove debugger, console or alert?
        "no-alert": 2,              // do not use alert, confirm or prompt

        "no-console": 1,            // do not use console.log in frontend
        "no-var": 1,                // Still using old style in frontend, but invited to improve

        /*
            Override some of the default rules (DISABLE)
        */
        "no-invalid-this": 0,       // Flux stores use `this` a lot
        "new-cap": 0                // Mixins just want to see the world burn
    }
}
