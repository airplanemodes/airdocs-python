# Mappings

A mapping object maps hashable values to arbitrary objects. Mappings are mutable objects. There is currently only one standard mapping type, the dictionary.

?> The extension modules `dbm.ndbm` and `dbm.gnu` provide additional examples of mapping types, as does the [`collections`](/modules/collections.md) module.

### Operations

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