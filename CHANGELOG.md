# Changelog

## [2.0.0] - 2016-03-24
### Removed
  - Removed the *es5* preset
  - Removed the `node` environment from the *test* preset - manually combine with *base* or *frontend* preset

### Added
  - Added *universal* preset for shared Node/browser code
  - Added `warning` when trying to include a Node core module in *webpack* bundles

### Changed
  - Relaxed `no-console` rule to only warn about `console.debug` calls in node environment
  - Completely refactored the structure of all configurations

## [1.0.5] - 2016-03-23
### Fixed
  - Fixed `jsx-boolean-value` rule for *react* configurations

## [1.0.4] - 2016-03-18
### Changed
  - Changed React `prop-type` rule from `warning` to `error`

### Fixed
  - Fixed `refer-spread` rule to `warning`

## [1.0.3] - (2016-03-18)
Removed `preferGlobal` from `package.json`

## [1.0.2] - 2016-03-15
### Changed
  - Disabled `no-sync` rule for *tool* preset
  - Changed `no-sync` from `warning` to `error` for other presets

## [1.0.1] - 2016-03-07
Refactoring only

## [1.0.0] - 2016-03-07
### Changed
  - Updated for `eslint 2.x.x`: No longer compatible with `1.x.x`
  - Added `func-style` rule to prefer declaration over expression
  - Updated peerDependency `eslint` to `2.0.0` and `eslint-plugin-react` to `4.2.0`

### Fixed
  - Added Webpack globals to *frontend* preset

----------------------

## [0.0.12] - 2016-03-07
### Changed
  - Ignoring `camelcase` rule for properties of objects

## [0.0.11] - 2016-03-07
### Fixed
  - Fixed support for `experimentalObjectRestSpread` in *babel* preset

## [0.0.10] - 2016-02-16
### Added
  - Added *react* preset

### Fixed
  - Removed `node` environment from *frontend* preset

## [0.0.9] - 2016-02-16
### Added
  - Added *babel* preset for Babel transpiled (stage-2) code
  - Added *module* preset for ES6 modules

### Fixed
  - Updated *es6* rule to only accept ECMA features that NodeJS natively supports

## [0.0.8] - 2016-02-16
### Fixed
  - Removed `node` environment from *es5* preset

## [0.0.7] - 2016-01-28
### Changed
  - Added `prefer-spread` as `warning` (all presets)

## [0.0.6] - 2016-01-27
### Added
  - Added *tool* preset for development code

## [0.0.5] - 2016-01-20
### Changed
  - Changed `require-jsdoc` from `error` to `warning` for *frontend*

## [0.0.4] - 2016-01-18
### Changed
  - Removed the jQuery `$` global from *frontend*
  - Added `eslint` and `eslint-plugin-react` as a `peerDependency`

### Fixed
  - Removed `no-extra-parens` rule for *frontend* as it conflicted with the React `wrap-multilines` rule

## [0.0.3] - 2015-12-08
### Changed
  - Changed `no-shadow` from `error` to `warning` (all presets)

## [0.0.2] - 2015-12-03
Initial release

[0.0.2]: https://github.com/Konnektid/eslint-config-konnektid/tree/8a03d1b58be09bb1e935aabf5497ab416de85d1f
[0.0.3]: https://github.com/Konnektid/eslint-config-konnektid/tree/18f1714c23ed823a8dceede6506259c4e472be91
[0.0.4]: https://github.com/Konnektid/eslint-config-konnektid/tree/2741c4338dd7cff7ff5668ec58d08e3f5c77e268
[0.0.5]: https://github.com/Konnektid/eslint-config-konnektid/tree/591ca933fb046fab73a2fa967fb6266c8af8e7fc
[0.0.6]: https://github.com/Konnektid/eslint-config-konnektid/tree/d14013fe703eeb984cf9041438f82fdfda96878e
[0.0.7]: https://github.com/Konnektid/eslint-config-konnektid/tree/7ec8456e7b8e8c3d7750e236512a1ea5ac485860
[0.0.8]: https://github.com/Konnektid/eslint-config-konnektid/tree/efafe852acf0d450f2a5a59606b812fc3e85936d
[0.0.9]: https://github.com/Konnektid/eslint-config-konnektid/tree/075399f3b35516fd82d7375c3d78f61cb4d5b7ee
[0.0.10]: https://github.com/Konnektid/eslint-config-konnektid/tree/ed6bdde15bda0b604ef503758751982cbcb143f6
[0.0.11]: https://github.com/Konnektid/eslint-config-konnektid/tree/981b47b6bc03ee2625a779b7126f78fcee8b293e
[0.0.12]: https://github.com/Konnektid/eslint-config-konnektid/tree/05725962d6af51ee2a25071d5045bb4cba43622f
[1.0.0]: https://github.com/Konnektid/eslint-config-konnektid/tree/41707ab6a8b098c2ee3aeaa5c811e419787b50e9
[1.0.1]: https://github.com/Konnektid/eslint-config-konnektid/tree/90c5268fd8ca2a5c5b4c58befd710a6f626c363a
[1.0.2]: https://github.com/Konnektid/eslint-config-konnektid/tree/d21b040ae0c6a4cfc3682cfad32ad7e75e42eb2e
