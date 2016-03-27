module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {

            /* Stage 2 */
            experimentalObjectRestSpread: true
            // exponentiationOperator: true
            // asyncFunctions: true

            /* Stage 1 */
            // decorators: true
            // exportExtensions: true
            // trailingFunctionCommas: true

            /* Stage 0 */
            // comprehensions: true
            // classProperties: true
            // doExpressions: true
            // functionBind: true
        }
    }
};
