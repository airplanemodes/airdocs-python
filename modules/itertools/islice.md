# itertools.islice()

Make an iterator that returns selected elements from the **iterable**.

If **start** is non-zero, then elements from the iterable are skipped until start is reached. Afterward, elements are returned consecutively unless **step** is set higher than one which results in items being skipped.

If **stop** is `None`, then iteration continues until the iterator is exhausted, if at all. Otherwise, it stops at the specified position.

If **start** is `None`, then iteration starts at zero. If **step** is `None`, then the step defaults to one.

Unlike regular slicing, `islice()` does not support negative values for **start**, **stop**, or **step**. Can be used to extract related fields from data where the internal structure has been flattened (for example, a multi-line report may list a name field on every third line).

### Syntax

```python
itertools.islice(iterable, stop)
itertools.islice(iterable, start, stop)
itertools.islice(iterable, start, stop, step)
```

### Examples

`islice()` is roughly equivalent to:

```python
def islice(iterable, *args):
    # islice('ABCDEFG', 2) --> A B
    # islice('ABCDEFG', 2, 4) --> C D
    # islice('ABCDEFG', 2, None) --> C D E F G
    # islice('ABCDEFG', 0, None, 2) --> A C E G
    s = slice(*args)
    start, stop, step = s.start or 0, s.stop or sys.maxsize, s.step or 1
    it = iter(range(start, stop, step))
    try:
        nexti = next(it)
    except StopIteration:
        # Consume *iterable* up to the *start* position.
        for i, element in zip(range(start), iterable):
            pass
        return
    try:
        for i, element in enumerate(iterable):
            if i == nexti:
                yield element
                nexti = next(it)
    except StopIteration:
        # Consume to *stop*.
        for i, element in zip(range(i + 1, stop), iterable):
            pass
```