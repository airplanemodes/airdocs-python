# bool()

`>>> bool.__doc__`: Returns `True` when the argument **x** is true, `False` otherwise.

The builtins `True` and `False` are the only two instances of the class [`bool`](/built-in-types/bool.md).

The class [`bool`](/built-in-types/bool.md) is a subclass of the class [`int`](/built-in-types/int/), and cannot be subclassed.

### Syntax

```python
bool(x=False)
```

### Examples

```python
bool(1) # True
bool(-2) # True
bool([16, 32, 64]) # True
bool("hi") # True

bool(0) # False
bool([]) # False
bool(None) # False
```
