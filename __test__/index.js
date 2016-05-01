/**
 * Konnektid - index.js
 *
 * Copyright(c) 2015 Konnektid
 * All rights reserved.
 *
 * @author Tijn Kersjes <tijn@konnektid.com>
 */
"use strict";

// dependencies
const expect = require("chai").expect;

describe("eslint-config-konnektid", () => {

    const checkConfig = (fname, description) => {

        const ref = fname ? "(as 'konnektid/" + fname + "')" : "";
        it("Should expose " + description + " " + ref, () => {

            let config;
            const doTest = () => {
                config = require("../" + (fname || "index") + ".js");
            };

            expect(doTest).to.not.throw();
            expect(config).to.exist;
            expect(config).to.be.an("object");
        });
    };

    checkConfig(null, "the base configuration");
    checkConfig("tool", "the configuration for developer tools");
    checkConfig("test", "the configuration for unit tests");
    checkConfig("babel", "the configuration for Babel-transpiled code");
    checkConfig("module", "the configuration for ES6 modules");
    checkConfig("react", "the configuration for React components");
    checkConfig("frontend", "the configuration for the frontend");
    checkConfig("universal", "the configuration for universal code");
});
