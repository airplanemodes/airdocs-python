# fnmatch.filter()

Construct a list from those elements of the iterable **names** that match **pattern**.

It is the same as `[n for n in names if fnmatch(n, pattern)]`, but implemented more efficiently.

### Syntax

```python
fnmatch.filter(names, pattern)
```