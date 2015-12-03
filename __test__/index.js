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

        const ref = fname === "index" ? "" : "(as 'konnektid/" + fname + "')";
        it("Should expose " + description + " " + ref, () => {

            let config;
            const doTest = () => {
                config = require("../" + fname + ".js");
            };

            expect(doTest).to.not.throw();
            expect(config).to.exist;
            expect(config).to.be.an("object");
        });
    };

    checkConfig("index", "the base configuration");
    checkConfig("test", "the configuration for unit tests");
    checkConfig("frontend", "the configuration for the front end");
});
