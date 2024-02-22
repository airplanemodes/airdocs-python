# object.\_\_str\_\_()

Called by `str(object)` and the built-in functions [`format()`](/built-in-functions/format.md) and [`print()`](/built-in-functions/print.md) to compute the “informal” or nicely printable string representation of an object. The return value must be a string object.

This method differs from [`__repr__()`](/abstraction/object/__repr__.md) in that there is no expectation that `__str__()` return a valid Python expression: a more convenient or concise representation can be used.

The default implementation defined by the built-in type [`object`](/built-in-functions/object.md) calls [`__repr__()`](/abstraction/object/__repr__.md).

### Syntax

```python
object.__str__(self)
```
