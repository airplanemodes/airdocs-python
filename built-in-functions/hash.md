# hash()
Return the hash value of the **object** (if it has one). Hash values are integers. They are used to quickly compare dictionary keys during a dictionary lookup. Numeric values that compare equal have the same hash value (even if they are of different types, as is the case for 1 and 1.0).

?> For objects with custom `__hash__()` methods, note that `hash()` truncates the return value based on the bit width of the host machine.

### Syntax
```python
hash(object)
```

### Examples
```python
```