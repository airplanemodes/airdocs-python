# type.\_\_mro\_\_

A [`tuple`](/built-in-types/tuple/) of classes that are considered when looking for base classes during method resolution.

### Syntax

```python
type.__mro__
```

### Example

```python
>>> int.__mro__ # (<class 'int'>, <class 'object'>)
>>> bool.__mro__ # (<class 'bool'>, <class 'int'>, <class 'object'>)
```
