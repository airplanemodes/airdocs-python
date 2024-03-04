# collections.Counter.subtract()

Elements are subtracted from an **iterable** or from another mapping (or counter).

Like [`dict.update()`](/built-in-types/dict/update.md) but subtracts counts instead of replacing them. Both inputs and outputs may be zero or negative.

### Syntax

```python
collections.Counter.subtract()
collections.Counter.subtract(iterable)
```

### Examples

```python
>>> c = collections.Counter(a=4, b=2, c=0, d=-2)
>>> d = collections.Counter(a=1, b=2, c=3, d=4)
>>> c.subtract(d)
>>> c # Counter({'a': 3, 'b': 0, 'c': -3, 'd': -6})
```
