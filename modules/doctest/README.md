# doctest

**Test interactive Python examples.**

> Source code: [`Lib/doctest.py`](https://github.com/python/cpython/tree/3.13/Lib/doctest.py)

The `doctest` module searches for pieces of text that look like interactive Python sessions, and then executes those sessions to verify that they work exactly as shown. There are several common ways to use doctest:

- To check that a module’s docstrings are up-to-date by verifying that all interactive examples still work as documented.
- To perform regression testing by verifying that interactive examples from a test file or a test object work as expected.
- To write tutorial documentation for a package, liberally illustrated with input-output examples. Depending on whether the examples or the expository text are emphasized, this has the flavor of “literate testing” or “executable documentation”.

Here’s a complete but small example module:

```python
"""
This is the "example" module.

The example module supplies one function, factorial().  For example,

>>> factorial(5)
120
"""

def factorial(n):
    """Return the factorial of n, an exact integer >= 0.

    >>> [factorial(n) for n in range(6)]
    [1, 1, 2, 6, 24, 120]
    >>> factorial(30)
    265252859812191058636308480000000
    >>> factorial(-1)
    Traceback (most recent call last):
        ...
    ValueError: n must be >= 0

    Factorials of floats are OK, but the float must be an exact integer:
    >>> factorial(30.1)
    Traceback (most recent call last):
        ...
    ValueError: n must be exact integer
    >>> factorial(30.0)
    265252859812191058636308480000000

    It must also not be ridiculously large:
    >>> factorial(1e100)
    Traceback (most recent call last):
        ...
    OverflowError: n too large
    """

    import math
    if not n >= 0:
        raise ValueError("n must be >= 0")
    if math.floor(n) != n:
        raise ValueError("n must be exact integer")
    if n+1 == n:  # catch a value like 1e300
        raise OverflowError("n too large")
    result = 1
    factor = 2
    while factor <= n:
        result *= factor
        factor += 1
    return result


if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

If you run `example.py` directly from the command line, `doctest` works its magic:

```shell
$ python example.py
$ 
```

There’s no output! That’s normal, and it means all the examples worked. Pass `-v` to the script, and `doctest` prints a detailed log of what it’s trying, and prints a summary at the end:

```shell
$ python example.py -v
# Trying:
#     factorial(5)
# Expecting:
#     120
# ok
# Trying:
#     [factorial(n) for n in range(6)]
# Expecting:
#     [1, 1, 2, 6, 24, 120]
# ok
```

And so on, eventually ending with:

```shell
# Trying:
#     factorial(1e100)
# Expecting:
#     Traceback (most recent call last):
#         ...
#     OverflowError: n too large
# ok
# 2 items passed all tests:
#    1 tests in __main__
#    8 tests in __main__.factorial
# 9 tests in 2 items.
# 9 passed and 0 failed.
# Test passed.
$
```

That’s all you need to know to start making productive use of `doctest`! Jump in. The following sections provide full details. Note that there are many examples of doctests in the standard Python test suite and libraries. Especially useful examples can be found in the standard test file `Lib/test/test_doctest/test_doctest.py`.
