# bool()
Return a Boolean value, i.e. one of `True` or `False`. **x** is converted using the standard truth testing procedure. If **x** is false or omitted, this returns `False`. Otherwise, it returns `True`.

### Syntax
General syntax with a default value:
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