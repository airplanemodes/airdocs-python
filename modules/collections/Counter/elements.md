# collections.Counter.elements()

Return an iterator over elements repeating each as many times as its count. Elements are returned in the order first encountered. If an element’s count is less than one, `elements()` will ignore it.

### Syntax

```python
collections.Counter.elements()
```

### Examples

```python
>>> c = Counter(a=4, b=2, c=0, d=-2)
>>> sorted(c.elements()) # ['a', 'a', 'a', 'a', 'b', 'b']
```