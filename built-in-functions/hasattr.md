# hasattr()

`>>> hasattr.__doc__`: Return whether the **object** has an attribute with the given **name**.

?> This is implemented by calling `getattr(object, name)` and seeing whether it raises an [`AttributeError`](/exceptions/AttributeError.md) or not.

### Syntax

```python
hasattr(object, name)
```