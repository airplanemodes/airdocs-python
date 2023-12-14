# Sequences

These represent finite ordered sets indexed by non-negative numbers. The built-in function [`len()`](/built-in-functions/len.md) returns the number of items of a sequence. When the length of a sequence is **n**, the index set contains the numbers 0, 1, ..., **n**-1.

## Accessing

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