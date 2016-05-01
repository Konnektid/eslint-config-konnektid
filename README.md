eslint-config-konnektid
=======================

[Version 2.0.0](CHANGELOG.md)

Shareable ESLint (2.0.0+) configuration package for Konnektid code style guides.

Optional dependencies
---------------------

Working with Babel (ES7) and/or React (JSX) requires you to install a couple of extra dependencies:

```bash
    npm install --save-dev babel-eslint eslint-plugin-babel eslint-plugin-react
```

Basic usage
-----------

In your `.eslintrc` file, add

```json
    { "extends": "konnektid" }
```

to load the basic configuration. For frontend code, use:

```json
    { "extends": "konnektid/frontend" }
```

This enables the use of JSX and switches to the browser environment.

Advanced usage
--------------

We offer a couple of variations on the basic configuration that you can extend from:

| Preset                               | Description                                         | ECMA Features       | Environment                     |
|--------------------------------------|-----------------------------------------------------|---------------------|---------------------------------|
| `konnektid`                          | Basic configuration for Node 5.0.0  projects.       | ES6                 | Node                            |
| `konnektid/tool`                     | Relaxes some rules for development scripts/tooling. | ES6                 | Node                            |
| `konnektid/babel`                    | Use for code that transpiles with Babel (stage 2).  | Babel               | Node                            |
| `konnektid/module`<sup>2, 5</sup>    | Use for ES6 Modules (export/import syntax).         | Babel + Modules     | Node                            |
| `konnektid/react`<sup>1, 2</sup>     | Use for React components with JSX syntax.           | Babel + JSX         | Node                            |
| `konnektid/frontend`<sup>1, 2</sup>  | Use for frontend code with React components.        | Babel + JSX         | Browser (Webpack<sup>3</sup>)   |
| `konnektid/universal`<sup>2, 4</sup> | Use for code shared between Node and browser.       | Babel               | Universal (Webpack<sup>3</sup>) |
| `konnektid/test`<sup>5</sup>         | Add to the unit tests folder.                       | ES6                 | Mocha                           |

- <sup>**[1]**</sup> Note that both the `react` and `frontend` configuration require `eslint-plugin-react` to be installed.
- <sup>**[2]**</sup> Working with ES7 (Babel) code requires `babel-eslint` and `eslint-plugin-babel` to be installed.
- <sup>**[3]**</sup> This allows the use of *RequireJS* style modules.
- <sup>**[4]**</sup> The `universal` preset only allows code that works in both *NodeJS* and the *browser*.
    When including environment-specific (conditional) code, make sure to explicitly
    define the environment of that code as either `node` or `browser`.
- <sup>**[5]**</sup> The `test` and `module` preset should be combined with the base `konnektid` or `frontend` preset.

--------------------

**Happy coding!**
