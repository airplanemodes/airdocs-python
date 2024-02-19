# issubclass()

Return `True` if **class** is a subclass (direct, indirect, or virtual) of **classinfo**.

A class is considered a subclass of itself.

**classinfo** may be a tuple of class objects (or recursively, other such tuples) or a Union Type, in which case return `True` if **class** is a subclass of any entry in **classinfo**.

In any other case, a [`TypeError`](/exceptions/TypeError.md) exception is raised.

### Syntax

```python
issubclass(class, classinfo)
```

### Example

```python
>>> issubclass(bool, int) # True
```
