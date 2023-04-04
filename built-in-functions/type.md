# type()

With one argument, return the type of an **object**.

The return value is a type object and generally the same object as returned by `object.__class__`.

With three arguments, return a new type object. This is essentially a dynamic form of the [`class`](/statements/class.md) statement.
- The **name** string is the class name and becomes the `__name__` attribute.
- The **bases** tuple contains the base classes and becomes the `__bases__` attribute. If empty, `object`, the ultimate base of all classes, is added.
- The **dict** dictionary contains attribute and method definitions for the class body. It may be copied or wrapped before becoming the `__dict__` attribute.

### Syntax

```python
type(object)
type(name, bases, dict, **kwds)
```

### Examples

```python
>>> type(5) # <class 'int'>
>>> type([]) # <class 'list'>
```