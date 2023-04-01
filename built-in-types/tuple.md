# tuple

Tuples are immutable sequences, typically used to store collections of heterogeneous data (such as the 2-tuples produced by the [`enumerate()`](/built-in-functions/enumerate.md)). Tuples are also used for cases where an immutable sequence of homogeneous data is needed (such as allowing storage in a `set` or `dict` instance).

Tuples may be constructed in a number of ways:

- Using a pair of parentheses to denote the empty tuple: `()`.
- Using a trailing comma for a singleton tuple: `a,` or `(a,)`.
- Separating items with commas: `a, b, c` or `(a, b, c)`.
- Using the type constructor: [`tuple()`](/built-in-functions/tuple.md).

Tuples implement all of the common sequence operations.