# typing

**Support for type hints.**

> Source code: [`Lib/typing.py`](https://github.com/python/cpython/tree/3.11/Lib/typing.py)

?> The Python runtime does not enforce function and variable type annotations. They can be used by third party tools such as type checkers, IDEs, linters, etc.

This module provides runtime support for type hints. For the original specification of the typing system, see [**PEP 484**](https://peps.python.org/pep-0484/). For a simplified introduction to type hints, see [**PEP 483**](https://peps.python.org/pep-0483/).

The function below takes and returns a string and is annotated as follows:

```python
def greeting(name: str) -> str:
    return 'Hello ' + name
```

In the function `greeting`, the argument `name` is expected to be of type [`str`](/built-in-types/str/) and the return type [`str`](/built-in-types/str/). Subtypes are accepted as arguments.