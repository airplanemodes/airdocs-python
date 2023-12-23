# Sequences

These represent finite ordered sets indexed by non-negative numbers.

The built-in function [`len()`](/built-in-functions/len.md) returns the number of items in a sequence. When the length of a sequence is **n**, the index set contains the numbers 0, 1, ..., **n**-1.

### Accessing

This feature allows to select certain element of a sequence.

- **i** is the index of an element.

### Syntax

```python
sequence[i]
```

### Examples

```python
>>> currencies = ["USD", "EUR", "JPY", "CNY", "GBP"]
>>> currencies[2] # 'JPY'
```

# Immutable sequences

The only operation that immutable sequence types generally implement that is not also implemented by mutable sequence types is support for the [`hash()`](/built-in-functions/hash.md) built-in.

This support allows immutable sequences, such as [`tuple`](/built-in-types/tuple.md) instances, to be used as [`dict`](/built-in-types/dict/) keys and stored in [`set`](/built-in-types/set/) and [`frozenset`](/built-in-types/frozenset.md) instances.

Attempting to hash an immutable sequence that contains unhashable values will result in [`TypeError`](/exceptions/TypeError.md).

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