# map()

Return an iterator that applies **function** to every item of **iterable**, yielding the results. 

If additional **iterables** arguments are passed, **function** must take that many arguments and is applied to the items from all iterables in parallel. With multiple iterables, the iterator stops when the shortest iterable is exhausted.

### Syntax

```python
map(function, iterable)
map(function, iterable, *iterables)
```