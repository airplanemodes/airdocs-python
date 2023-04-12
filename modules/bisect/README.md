# bisect

**Array bisection algorithm.**

> Source code: [`Lib/bisect.py`](https://github.com/python/cpython/tree/3.11/Lib/bisect.py)

This module provides support for maintaining a list in sorted order without having to sort the list after each insertion. For long lists of items with expensive comparison operations, this can be an improvement over the more common approach. The module is called `bisect` because it uses a basic bisection algorithm to do its work. The source code may be most useful as a working example of the algorithm (the boundary conditions are already right!).