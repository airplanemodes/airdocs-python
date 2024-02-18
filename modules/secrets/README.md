# secrets

**Generate secure random numbers for managing secrets.**

> Source code: [`Lib/secrets.py`](https://github.com/python/cpython/tree/3.12/Lib/secrets.py)

The `secrets` module is used for generating cryptographically strong random numbers suitable for managing data such as passwords, account authentication, security tokens, and related secrets.

In particular, `secrets` should be used in preference to the default pseudo-random number generator in the [`random`](/modules/random/) module, which is designed for modelling and simulation, not security or cryptography.

The `secrets` module provides access to the most secure source of randomness that your operating system provides.
