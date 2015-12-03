eslint-config-konnektid
=======================

Shareable ESLint configuration package for Konnektid code style guides.

Usage
-----

In your `.eslintrc` file, add

```json
    "extends": "eslint-config-konnektid"
```

to load the basic configuration. For frontend code, use:

```json
    "extends": "eslint-config-konnektid/frontend"
```

This requires `eslint-plugin-react` to be installed. For unit tests, use:

```json
    "extends": "eslint-config-konnektid/test"
```

Happy coding!

----------

*N.B. ESLint automatically prepends the package name with `eslint-config-`, so it's also possible
to simply use `konnektid`, `konnektid/frontend` and `konnektid/test`.*
