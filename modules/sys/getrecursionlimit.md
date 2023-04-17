# sys.getrecursionlimit()

Return the current value of the recursion limit, the maximum depth of the Python interpreter stack.

This limit prevents infinite recursion from causing an overflow of the C stack and crashing Python. It can be set by [`setrecursionlimit()`](/modules/sys/setrecursionlimit.md).

### Syntax

```python
sys.getrecursionlimit()
```