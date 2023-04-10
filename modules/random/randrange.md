# random.randrange()

Return a randomly selected element from `range(start, stop, step)`. This is equivalent to `choice(range(start, stop, step))`, but doesn’t actually build a range object.

The positional argument pattern matches that of [`range()`](/built-in-functions/range.md). Keyword arguments should not be used because the function may use them in unexpected ways.

### Syntax

```python
random.randrange(stop)
random.randrange(start, stop)
random.randrange(start, stop, step)
```

### Examples

Random integer from 0 to 99:

```python
>>> random.randrange(100) # 78
>>> random.randrange(100) # 30
```

Even integer from 0 to 10:

```python
>>> random.randrange(0, 11, 2) # 4
>>> random.randrange(0, 11, 2) # 10
>>> random.randrange(0, 11, 2) # 8
```