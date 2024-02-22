# object.\_\_init\_\_()

Called after the instance has been created (by `__new__()`), but before it is returned to the caller.

The arguments are those passed to the class constructor expression.

If a base class has an `__init__()` method, the derived class’s `__init__()` method, if any, must explicitly call it to ensure proper initialization of the base class part of the instance. For example: `super().__init__([args...])`.

Because `__new__()` and `__init__()` work together in constructing objects (`__new__()` to create it, and `__init__()` to customize it), no non-`None` value may be returned by `__init__()`. Doing so will cause a [`TypeError`](/exceptions/TypeError.md) to be raised at runtime.

### Syntax

```python
object.__init__(self)
```
