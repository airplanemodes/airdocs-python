# str.translate()

Return a copy of the string in which each character has been mapped through the given translation **table**.

The **table** must be an object that implements indexing via `__getitem__()`, typically a mapping or sequence.

When indexed by a Unicode ordinal (an integer), the **table** object can do any of the following: return a Unicode ordinal or a string, to map the character to one or more other characters. Return `None`, to delete the character from the return string. Or raise a [`LookupError`](/exceptions/LookupError.md) exception, to map the character to itself.

### Syntax

```python
str.translate(table)
```