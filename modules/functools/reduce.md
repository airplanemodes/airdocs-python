# functools.reduce()

Apply function of two arguments cumulatively to the items of **iterable**, from left to right, so as to reduce the iterable to a single value.

If the optional **initializer** is present, it is placed before the items of the **iterable** in the calculation, and serves as a default when the **iterable** is empty.

If **initializer** is not given and **iterable** contains only one item, the first item is returned.

Roughly equivalent to:

```python
def reduce(function, iterable, initializer=None):
    it = iter(iterable)
    if initializer is None:
        value = next(it)
    else:
        value = initializer
    for element in it:
        value = function(value, element)
    return value
```

?> See [`itertools.accumulate()`](/modules/itertools/accumulate.md) for an iterator that yields all intermediate values.

### Syntax

```python
functools.reduce(function, iterable)
functools.reduce(function, iterable, initializer)
```

### Examples

The left argument, **x**, is the accumulated value and the right argument, **y**, is the update value from the **iterable**.

```python
>>> reduce(lambda x, y: x+y, [1, 2, 3, 4, 5]) # 15
```