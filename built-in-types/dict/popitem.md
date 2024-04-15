# dict.popitem()

Remove and return a `(key, value)` pair from the dictionary. Pairs are returned in LIFO order.

`popitem()` is useful to destructively iterate over a dictionary, as often used in set algorithms. If the dictionary is empty, calling `popitem()` raises a [`KeyError`](/exceptions/KeyError.md).

### Syntax

```python
dict.popitem()
```
