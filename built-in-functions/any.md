# any()

Return `True` if any element of the **iterable** is true. If the **iterable** is empty, return `False`.

Equivalent to:

```python
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

### Syntax

```python
any(iterable)
```

### Examples

If at least one element of **iterable** is not set to `False`, `None` or `0` the function will return `True`.

```python
any([3, 5, 10]) # True
any([3, 5, 0]) # True
any([3, 0, None]) # True
any([0, False, 10]) # True

any([0, 0, 0]) # False
any([0, False, None]) # False
```