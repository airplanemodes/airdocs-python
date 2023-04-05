# set

A set object is an unordered collection of distinct hashable objects. Common uses include membership testing, removing duplicates from a sequence, and computing mathematical operations such as intersection, union, difference, and symmetric difference.

Like other collections, sets support `x in set`, `len(set)`, and `for x in set`. Being an unordered collection, sets do not record element position or order of insertion. Accordingly, sets do not support indexing, slicing, or other sequence-like behavior.

The `set` type is mutable — the contents can be changed using methods like [`add()`](/built-in-types/set/set.add.md) and [`remove()`](/built-in-types/set/set.remove.md). Since it is mutable, it has no hash value and cannot be used as either a dictionary key or as an element of another set.

Sets can be created by several means:
- Using a comma-separated list of elements within braces: `{'jack', 'sjoerd'}`.
- Using a set comprehension: `{c for c in 'abracadabra' if c not in 'abc'}`.
- Using the type constructor: [`set()`](/built-in-functions/set.md).