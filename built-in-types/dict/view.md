# view

The objects returned by [`dict.keys()`](/built-in-types/dict/keys.md), [`dict.values()`](/built-in-types/dict/values.md) and [`dict.items()`](/built-in-types/dict/items.md) are `view` objects. They provide a dynamic view on the dictionary’s entries, which means that when the dictionary changes, the view reflects these changes.

Dictionary views can be iterated over to yield their respective data, and support membership tests.

### Examples

```python
>>> a = {1: 100, 2: 200}
>>> type(a) # <class 'dict'>
>>> b = a.items()
>>> c = a.keys()
>>> d = a.values()
>>> type(b) # <class 'dict_items'>
>>> type(c) # <class 'dict_keys'>
>>> type(d) # <class 'dict_values'>
>>> a # {1: 100, 2: 200}
>>> b # dict_items([(1, 100), (2, 200)])
>>> c # dict_keys([1, 2])
>>> d # dict_values([100, 200])
```

`view` object can be converted:

```python
>>> a = {'num1': 30, 'num2': 50}
>>> list(a.values()) # [30, 50]
>>> list(a.keys()) # ['num1', 'num2']
```
