# Mappings

A mapping object maps hashable values to arbitrary objects. Mappings are mutable objects. There is currently only one standard mapping type, the dictionary.

?> The extension modules `dbm.ndbm` and `dbm.gnu` provide additional examples of mapping types, as does the [`collections`](/modules/collections.md) module.

## Operations
These are the operations that dictionaries support (and therefore, custom mapping types should support too):

Return a list of all the keys used in the dictionary **d**.
```python
list(d)
```
---
Return the number of items in the dictionary **d**.
```python
len(d)
```
---
Return the item of **d** with key **key**. Raises a `KeyError` if **key** is not in the map.
```python
d[key]
```
---
Set `d[key]` to **value**.
```python
d[key] = value
```
---
Remove `d[key]` from **d**. Raises a `KeyError` if **key** is not in the map.
```python
del d[key]
```
---
Return `True` if **d** has a key **key**, else `False`.
```python
key in d
```
---
Equivalent to `not key in d`.
```python
key not in d
```
---
Return an iterator over the keys of the dictionary. This is a shortcut for `iter(d.keys())`.
```python
iter(d)
```

# Methods

## dict.clear()
Remove all items from the dictionary.
```python
prices = {'cola': 8, 'coffee': 12}
prices.clear()
print(prices) # {}
```

## dict.copy()

## dict.get()

## dict.items()

## dict.keys()

## dict.values()
Return a new view of the dictionary’s values.
### Syntax
```python
d.values()
```
?> An equality comparison between one `d.values()` view and another will always return `False`. This also applies when comparing `d.values()` to itself:
```python
>>> d = {'a': 1}
>>> d.values() == d.values() # False
```

## dict.pop()
If **key** is in the dictionary, remove it and return its value, else return **default**. If **default** is not given and **key** is not in the dictionary, a `KeyError` is raised.
### Syntax
```python
d.pop(key)
d.pop(key, default)
```

## dict.popitem()

## dict.update()
Update the dictionary with the key/value pairs from **other**, overwriting existing keys. Return `None`.

`update()` accepts either another dictionary object or an iterable of key/value pairs (as tuples or other iterables of length two). If keyword arguments are specified, the dictionary is then updated with those key/value pairs: `d.update(red=1, blue=2)`.
### Syntax
```python
d.update()
d.update(other)
```

## dict.setdefault()
If **key** is in the dictionary, return its value. If not, insert **key** with a value of **default** and return **default**. **default** defaults to `None`.
### Syntax
```python
d.setdefault(key)
d.setdefault(key, default)
```