# sorted()
Return a new sorted list from the items in **iterable**.

Has two optional arguments which must be specified as keyword arguments.

**key** specifies a function of one argument that is used to extract a comparison key from each element in **iterable** (for example, `key=str.lower`). The default value is `None` (compare the elements directly).

**reverse** is a boolean value. If set to `True`, then the list elements are sorted as if each comparison were reversed.

### Syntax
```python
sorted(iterable)
sorted(iterable, /, *, key=None, reverse=False)
```