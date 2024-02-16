# reversed()

`>>> reversed.__doc__`: Return a reverse iterator over the values of the given **sequence**.

**sequence** must be an object which has a `__reversed__()` method or supports the sequence protocol (the `__len__()` method and the `__getitem__()` method with integer arguments starting at `0`).

### Syntax

```python
reversed(sequence)
```

### Examples

```python
>>> list(reversed([5, 4, 3, 2, 1])) # [1, 2, 3, 4, 5]
```
