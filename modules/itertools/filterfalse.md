# itertools.filterfalse()

Make an iterator that filters elements from iterable returning only those for which the **predicate** is false.

If **predicate** is `None`, return the items that are false.

Roughly equivalent to:

```python
def filterfalse(predicate, iterable):
    # filterfalse(lambda x: x%2, range(10)) --> 0 2 4 6 8
    if predicate is None:
        predicate = bool
    for x in iterable:
        if not predicate(x):
            yield x
```

### Syntax

```python
itertools.filterfalse(predicate, iterable)
```