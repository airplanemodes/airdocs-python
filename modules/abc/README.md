# abc

**Abstract Base Classes.**

> Source code: [`Lib/abc.py`](https://github.com/python/cpython/tree/3.13/Lib/abc.py)

This module provides the infrastructure for defining abstract base classes (ABCs) in Python, as outlined in [**PEP 3119**](https://peps.python.org/pep-3119/).

?> See also [**PEP 3141**](https://peps.python.org/pep-3141/) and the [`numbers`](/modules/numbers/) module regarding a type hierarchy for numbers based on ABCs.

The [`collections`](/modules/collections/) module has some concrete classes that derive from ABCs. These can, of course, be further derived. In addition, the `collections.abc` submodule has some ABCs that can be used to test whether a class or instance provides a particular interface, for example, if it is hashable or if it is a mapping.
