# dict

Dictionaries represent finite sets of objects indexed by nearly arbitrary values.

The only types of values not acceptable as keys are values containing lists or dictionaries or other mutable types that are compared by value rather than by object identity, the reason being that the efficient implementation of dictionaries requires a key’s hash value to remain constant.

Numeric types used for keys obey the normal rules for numeric comparison: if two numbers compare equal (e.g., `1` and `1.0`) then they can be used interchangeably to index the same dictionary entry.

Dictionaries are mutable.

Dictionaries preserve insertion order, meaning that keys will be produced in the same order they were added sequentially over the dictionary. Replacing an existing key does not change the order, however removing a key and re-inserting it will add it to the end instead of keeping its old place.

Dictionaries can be created by several means:

- Use a comma-separated list of `key: value` pairs within braces:
```python
>>> # Strings as keys
>>> {'jack': 4098, 'sjoerd': 4127}
>>> # Integers as keys
>>> {4098: 'jack', 4127: 'sjoerd'}
```
- Use a dict comprehension: `{}`, `{x: x ** 2 for x in range(10)}`.
- Use the type constructor: [`dict()`](/built-in-functions/dict.md).

### Operations

These are the operations that dictionaries support (and therefore, custom mapping types should support too):

```python
list(d)     # return a list of all keys
len(d)      # return the number of items
d[k]        # return the item with key 'k'
d[k] = x    # set the item with key 'k' to 'x'
del d[k]    # remove the item with key 'k'
k in d      # return 'True' if d has a key 'k'
k not in d  # return 'True' if d has no key 'k'
iter(d)     # return an iterator over the keys of the dictionary
```

### View objects

The objects returned by [`dict.keys()`](/built-in-types/dict/dict.keys.md), [`dict.values()`](/built-in-types/dict/dict.values.md) and [`dict.items()`](/built-in-types/dict/dict.items.md) are `view` objects. They provide a dynamic view on the dictionary’s entries, which means that when the dictionary changes, the view reflects these changes.
