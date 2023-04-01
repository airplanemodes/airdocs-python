# delattr()
This is a relative of [`setattr()`](/built-in-functions/setattr.md). The arguments are an object and a string. The string must be the name of one of the object’s attributes. The function deletes the named attribute, provided the object allows it. For example, `delattr(x, 'foobar')` is equivalent to `del x.foobar`. **name** need not be a Python identifier.

### Syntax
```python
delattr(object, name)
```

### Examples
```python
```