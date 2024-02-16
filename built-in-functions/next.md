# next()

Retrieve the next item from the **iterator** by calling its `__next__()` method.

If **default** is given, it is returned if the **iterator** is exhausted, otherwise [`StopIteration`](/exceptions/StopIteration.md) is raised.

### Syntax

```python
next(iterator)
next(iterator, default)
```
