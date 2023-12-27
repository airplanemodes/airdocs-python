# itertools.pairwise()

Return successive overlapping pairs taken from the **iterable**.

The number of 2-tuples in the output iterator will be one fewer than the number of inputs. It will be empty if the **iterable** has fewer than two values.

### Syntax

```python
itertools.pairwise(iterable)
```

### Examples

`pairwise()` is roughly equivalent to:

```python
def pairwise(iterable):
    # pairwise('ABCDEFG') --> AB BC CD DE EF FG
    a, b = tee(iterable)
    next(b, None)
    return zip(a, b)
```