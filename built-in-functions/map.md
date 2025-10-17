# map()

Return an iterator that applies **function** to every item of **iterable**, yielding the results. 

If additional **iterables** arguments are passed, **function** must take that many arguments and is applied to the items from all iterables in parallel. With multiple iterables, the iterator stops when the shortest iterable is exhausted.

### Syntax

```python
map(function, iterable)
map(function, iterable, *iterables)
```

### Example

Convert numbers from string to integer type:

```python
numbers = ["1", "2", "3", "4", "5"]
numbers = map(int, numbers)
print(list(numbers)) # [1, 2, 3, 4, 5]
```
