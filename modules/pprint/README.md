# pprint

**Data pretty printer.**

> Source code: [`Lib/pprint.py`](https://github.com/python/cpython/tree/3.13/Lib/pprint.py)

The `pprint` module provides a capability to “pretty-print” arbitrary Python data structures in a form which can be used as input to the interpreter. If the formatted structures include objects which are not fundamental Python types, the representation may not be loadable. This may be the case if objects such as files, sockets or classes are included, as well as many other objects which are not representable as Python literals.

The formatted representation keeps objects on a single line if it can, and breaks them onto multiple lines if they don’t fit within the allowed width, adjustable by the **width** parameter defaulting to 80 characters.

Dictionaries are sorted by key before the display is computed.
