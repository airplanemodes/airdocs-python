# getattr()

Return the value of the named attribute of **object**. **name** must be a string. If the string is the name of one of the object’s attributes, the result is the value of that attribute. For example, `getattr(x, 'foobar')` is equivalent to `x.foobar`. If the named attribute does not exist, **default** is returned if provided, otherwise [`AttributeError`](/exceptions/AttributeError.md) is raised. **name** need not be a Python identifier (see [`setattr()`](/built-in-functions/setattr.md)).

### Syntax

```python
getattr(object, name)
getattr(object, name, default)
```