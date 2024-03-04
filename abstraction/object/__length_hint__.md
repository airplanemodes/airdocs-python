# object.\_\_length_hint\_\_()

Called to implement [`operator.length_hint()`](/modules/operator/length_hint.md). Should return an estimated length for the object (which may be greater or less than the actual length). The length must be an integer `>= 0`. The return value may also be [`NotImplemented`](/abstraction/interpreter/NotImplemented.md), which is treated the same as if the `__length_hint__` method didn’t exist at all. This method is purely an optimization and is never required for correctness.

### Syntax

```python
object.__length_hint__(self)
```
