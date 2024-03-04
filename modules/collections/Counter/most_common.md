# collections.Counter.most_common()

Return a list of the **n** most common elements and their counts from the most common to the least.

If **n** is omitted or `None`, `most_common()` returns all elements in the counter.

Elements with equal counts are ordered in the order first encountered.

### Syntax

```python
collections.Counter.most_common()
collections.Counter.most_common(n)
```

### Examples

```python
>>> collections.Counter('abracadabra').most_common(3)
# [('a', 5), ('b', 2), ('r', 2)]
```
