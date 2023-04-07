# frozenset.difference()

Return a new set with elements in the set that are not in the **others**.

### Syntax

```python
frozenset.difference(*others)
```

### Examples

```python
c = {1, 2, 3, 4}
d = {3, 4, 5, 6}
c.difference(d) # frozenset({1, 2})
```