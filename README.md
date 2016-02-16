eslint-config-konnektid
=======================

Shareable ESLint configuration package for Konnektid code style guides.

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

This enables the use of JSX but requires `eslint-plugin-react` to be installed.

Advanced usage
--------------

We offer a couple of variations on the basic configuration that you can extend from:

| Configuration        | Description                                         | Features              |
|----------------------|-----------------------------------------------------|-----------------------|
| `konnektid`          | Basic configuration for Node projects.              | Node 5.0.0            |
| `konnektid/tool`     | Relaxes some rules for development scripts/tooling. | Node 5.0.0            |
| `konnektid/test`     | Use for unit tests.                                 | Node 5.0.0, Mocha     |
| `konnektid/babel`    | Use for code that compiles with Babel (ES6).        | Babel                 |
| `konnektid/module`   | Use for ES6 Modules.                                | Babel, Module         |
| `konnektid/frontend` | Use for frontend code with JSX syntax.              | Babel, React, Browser |
| `konnektid/es5`      | Basic style rules, without Node/ES6 features.       | ES5                   |

**Happy coding!**

--------------------

*N.B. ESLint automatically prepends the package name with `eslint-config-`, so it's also possible
to simply use `konnektid`, `konnektid/frontend` and `konnektid/test`.*
