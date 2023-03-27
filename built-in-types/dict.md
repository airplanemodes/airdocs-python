# dict
A mapping object maps hashable values to arbitrary objects. Mappings are mutable objects. There is currently only one standard mapping type, the dictionary.

A dictionary’s keys are almost arbitrary values. Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys. Values that compare equal (such as `1`, `1.0`, and `True`) can be used interchangeably to index the same dictionary entry.

Dictionaries can be created by several means:

- Use a comma-separated list of `key: value` pairs within braces:
```python
# Strings as keys
{'jack': 4098, 'sjoerd': 4127}
# Integers as keys
{4098: 'jack', 4127: 'sjoerd'}
```
- Use a dict comprehension: `{}`, `{x: x ** 2 for x in range(10)}`.
- Use the type constructor: [`dict()`](/built-in-functions/dict.md).