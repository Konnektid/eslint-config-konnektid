eslint-config-konnektid
=======================

[Version 1.0.4](CHANGELOG.md)

Shareable ESLint (2.0.0+) configuration package for Konnektid code style guides.

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

| Configuration         | Description                                         | Features              |
|-----------------------|-----------------------------------------------------|-----------------------|
| `konnektid`           | Basic configuration for Node 5.0.0  projects.       | Node                  |
| `konnektid/tool`      | Relaxes some rules for development scripts/tooling. | Node                  |
| `konnektid/test`      | Use for Mocha unit tests.                           | Node, Mocha           |
| `konnektid/babel`     | Use for code that transpiles with Babel (stage 2).  | Node, Babel           |
| `konnektid/module`    | Use for ES6 Modules (export/import syntax).         | Node, Babel, Module   |
| `konnektid/react`*    | Use for React components with JSX syntax.           | Node, Babel, React    |
| `konnektid/frontend`* | Use for frontend code with React components.        | Browser, Babel, React |
| `konnektid/es5`       | Basic style rules, without Node/ES6 features.       | ES5                   |

Note that both the `react` and `frontend` configuration require `eslint-plugin-react` to be installed.

**Happy coding!**

--------------------

*N.B. ESLint automatically prepends the package name with `eslint-config-`, so it's also possible
to simply use `konnektid`, `konnektid/frontend` and `konnektid/test`.*
