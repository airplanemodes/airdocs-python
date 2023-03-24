# Built-in functions
The Python interpreter has a number of functions and types built into it that are always available.

A built-in function object is a wrapper around a C function. The number and type of the arguments are determined by the C function.

Special read-only attributes:
- `__doc__` is the function’s documentation string, or `None` if unavailable.
- `__name__` is the function’s name.
- `__self__` is set to `None` (but see the next item).
- `__module__` is the name of the module the function was defined in or `None` if unavailable.