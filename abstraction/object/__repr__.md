# object.\_\_repr\_\_()

Called by the [`repr()`](/built-in-functions/repr.md) built-in function to compute the “official” string representation of an object. If at all possible, this should look like a valid Python expression that could be used to recreate an object with the same value (given an appropriate environment). If this is not possible, a string of the form `<...some useful description...>` should be returned. The return value must be a string object. If a class defines `__repr__()` but not [`__str__()`](/abstraction/object/__str__.md), then `__repr__()` is also used when an “informal” string representation of instances of that class is required.

This is typically used for debugging, so it is important that the representation is information-rich and unambiguous.

### Syntax

```python
object.__repr__(self)
```
