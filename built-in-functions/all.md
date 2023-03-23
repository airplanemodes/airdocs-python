# all()
Return `True` if all elements of the *iterable* are true (or if the iterable is empty). Equivalent to:
```python
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

## Syntax
```python
all(iterable)
```

## Examples
**Iterable** can be array, set or tuple. If any of it's elements is set to `False`, `None` or `0` the function will return `False`.

```python
all([1, 2, 3]) # True
all((5, 10, 12.5)) # True
all([]) # True

all([1, 0, 3]) # False
all([1, None, 2]) # False
all([1, 5, False]) # False
```