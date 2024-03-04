# object.\_\_len\_\_()

Called to implement the built-in function [`len()`](/built-in-functions/len.md). Should return the length of the object, an integer `>= 0`. Also, an object that doesn’t define a [`__bool__()`](/abstraction/object/__bool__.md) method and whose `__len__()` method returns zero is considered to be false in a Boolean context.

?> **CPython implementation detail:** In CPython, the length is required to be at most sys.maxsize. If the length is larger than sys.maxsize some features (such as [`len()`](/built-in-functions/len.md)) may raise [`OverflowError`](/exceptions/OverflowError.md). To prevent raising [`OverflowError`](/exceptions/OverflowError.md) by truth value testing, an object must define a `__bool__()` method.

### Syntax

```python
object.__len__(self)
```
