# string.Formatter.get_value()

Retrieve a given field value. The **key** argument will be either an integer or a string. If it is an integer, it represents the index of the positional argument in **args**. If it is a string, then it represents a named argument in **kwargs**.

The **args** parameter is set to the list of positional arguments to [`vformat()`](/modules/string/Formatter/vformat.md), and the **kwargs** parameter is set to the dictionary of keyword arguments.

For compound field names, these functions are only called for the first component of the field name. Subsequent components are handled through normal attribute and indexing operations.

So for example, the field expression ‘0.name’ would cause `get_value()` to be called with a **key** argument of 0. The `name` attribute will be looked up after `get_value()` returns by calling the built-in [`getattr()`](/built-in-functions/getattr.md) function.

If the index or keyword refers to an item that does not exist, then an [`IndexError`](/exceptions/IndexError.md) or [`KeyError`](/exceptions/KeyError.md) should be raised.

### Syntax

```python
string.Formatter.get_value(key, args, kwargs)
```