# vars()

Return the `__dict__` attribute for a module, class, instance, or any other object with a `__dict__` attribute.

Without an argument, `vars()` acts like [`locals()`](/built-in-functions/locals.md).

### Syntax

```python
vars()
vars(object)
```

!> A [`TypeError`](/exceptions/TypeError.md) exception is raised if an object is specified but it doesn’t have a `__dict__` attribute (for example, if its class defines the `__slots__` attribute).
