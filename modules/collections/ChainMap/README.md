# collections.ChainMap()

A `ChainMap` groups multiple dicts or other mappings together to create a single, updateable view. If no **maps** are specified, a single empty dictionary is provided so that a new chain always has at least one mapping.

The underlying mappings are stored in a list. That list is public and can be accessed or updated using the **maps** attribute. There is no other state.

Lookups search the underlying mappings successively until a key is found. In contrast, writes, updates, and deletions only operate on the first mapping.

A `ChainMap` incorporates the underlying mappings by reference. So, if one of the underlying mappings gets updated, those changes will be reflected in `ChainMap`.

### Syntax

```python
collections.ChainMap(*maps)
```