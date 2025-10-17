# itertools.repeat()

Make an iterator that returns **object** over and over again. Runs indefinitely unless the **times** argument is specified.

Roughly equivalent to:

```python
def repeat(object, times=None):
    # repeat(10, 3) → 10 10 10
    if times is None:
        while True:
            yield object
    else:
        for i in range(times):
            yield object
```

### Syntax

```python
itertools.repeat(object)
itertools.repeat(object, times)
```

### Example

A common use for `repeat` is to supply a stream of constant values to [`map`](/built-in-functions/map.md) or [`zip`](/built-in-functions/zip.md):

```python
list(map(pow, range(10), repeat(2)))
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
