# isinstance()

Return `True` if the **object** argument is an instance of the **classinfo** argument.

If **object** is not an object of the given type, the function always returns `False`.

### Syntax

```python
isinstance(object, classinfo)
```

### Examples

```python
isinstance(3, int) # True
isinstance(5, float) # False
isinstance([], list) # True
isinstance("hi", dict) # False
```
