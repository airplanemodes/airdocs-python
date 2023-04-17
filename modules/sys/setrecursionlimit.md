# sys.setrecursionlimit()

Set the maximum depth of the Python interpreter stack to **limit**.

This limit prevents infinite recursion from causing an overflow of the C stack and crashing Python.

The highest possible limit is platform-dependent. A user may need to set the limit higher when they have a program that requires deep recursion and a platform that supports a higher limit. This should be done with care, because a too-high limit can lead to a crash.

If the new limit is too low at the current recursion depth, a [`RecursionError`](/exceptions/RecursionError.md) exception is raised.

### Syntax

```python
sys.setrecursionlimit(limit)
```