const CORE_MODULES = ["assert", "buffer", "child_process", "cluster", "crypto", "dgram", "dns", "domain", "events", "freelist", "fs", "http", "https", "module", "net", "os", "path", "punycode", "querystring", "readline", "repl", "smalloc", "stream", "string_decoder", "sys", "timers", "tls", "tracing", "tty", "url", "util", "vm", "zlib"];

module.exports = {
    rules: {

        // warn about (Node-only) core modules
        "no-restricted-modules": [1].concat(CORE_MODULES),
        "no-restricted-imports": [1].concat(CORE_MODULES),

        // allow conditional module inclusion
        "global-require": 0
    }
};
