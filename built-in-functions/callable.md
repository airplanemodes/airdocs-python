# callable()
Return `True` if the **object** argument appears callable, `False` if not. If this returns `True`, it is still possible that a call fails, but if it is `False`, calling **object** will never succeed.

?> Note that classes are callable (calling a class returns a new instance). Instances are callable if their class has a `__call__()` method.

### Syntax
```python
callable(object)
```

### Examples
```python
callable(str) # True
callable(10) # False
```