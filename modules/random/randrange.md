# random.randrange()

Return a randomly selected element from `range(start, stop, step)`. This is equivalent to `choice(range(start, stop, step))`, but doesn’t actually build a range object.

The positional argument pattern matches that of [`range()`](/built-in-functions/range.md). Keyword arguments should not be used because the function may use them in unexpected ways.

### Syntax

```python
random.randrange(stop)
random.randrange(start, stop)
random.randrange(start, stop, step)
```