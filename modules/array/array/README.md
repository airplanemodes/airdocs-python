# array.array()

A new array whose items are restricted by **typecode**, and initialized from the optional **initializer** value, which must be a list, a bytes-like object, or iterable over elements of the appropriate type.

If given a list or string, the initializer is passed to the new array’s `fromlist()`, `frombytes()`, or `fromunicode()` method (see below) to add initial items to the array. Otherwise, the iterable initializer is passed to the `extend()` method.

Array objects support the ordinary sequence operations of indexing, slicing, concatenation, and multiplication. When using slice assignment, the assigned value must be an array object with the same type code; in all other cases, [`TypeError`](/exceptions/TypeError.md) is raised. Array objects also implement the buffer interface, and may be used wherever bytes-like objects are supported.

Raises an auditing event `array.__new__` with arguments `typecode`, `initializer`.

### Syntax

```python
array.array(typecode)
array.array(typecode, initializer)
```