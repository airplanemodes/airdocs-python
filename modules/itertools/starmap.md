# itertools.starmap()

Make an iterator that computes the **function** using arguments obtained from the **iterable**. Used instead of [`map()`](/built-in-functions/map.md) when argument parameters have already been “pre-zipped” into tuples.

The difference between [`map()`](/built-in-functions/map.md) and `starmap()` parallels the distinction between `function(a,b)` and `function(*c)`. Roughly equivalent to:

```python
def starmap(function, iterable):
    # starmap(pow, [(2,5), (3,2), (10,3)]) → 32 9 1000
    for args in iterable:
        yield function(*args)
```

### Syntax

```python
itertools.starmap(function, iterable)
```
