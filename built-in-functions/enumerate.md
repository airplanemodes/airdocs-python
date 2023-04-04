# enumerate()

Return an enumerate object. **iterable** must be a sequence, an iterator, or some other object which supports iteration. The `__next__()` method of the iterator returned by `enumerate()` returns a tuple containing a count (from **start** which defaults to 0) and the values obtained from iterating over **iterable**.

### Syntax

```python
enumerate(iterable)
enumerate(iterable, start=0)
```

### Examples

```python
list(enumerate([1, 2, 3])) # [(0, 1), (1, 2), (2, 3)]
```