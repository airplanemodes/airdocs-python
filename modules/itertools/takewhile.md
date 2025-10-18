# itertools.takewhile()

Make an iterator that returns elements from the **iterable** as long as the **predicate** is true. Roughly equivalent to:

```python
def takewhile(predicate, iterable):
    # takewhile(lambda x: x<5, [1,4,6,3,8]) → 1 4
    for x in iterable:
        if not predicate(x):
            break
        yield x
```

Note, the element that first fails the predicate condition is consumed from the input iterator and there is no way to access it. This could be an issue if an application wants to further consume the input iterator after `takewhile` has been run to exhaustion. To work around this problem, consider using [`more-itertools before_and_after()`](https://more-itertools.readthedocs.io/en/stable/api.html#more_itertools.before_and_after) instead.

### Syntax

```python
itertools.takewhile(predicate, iterable)
```
