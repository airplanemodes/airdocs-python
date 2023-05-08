# string.Formatter.get_field()

Given **field_name** as returned by [`parse()`](/modules/string/Formatter/parse.md), convert it to an object to be formatted.

Returns a tuple `(obj, used_key)`.

The default version takes strings of the form defined in [**PEP 3101**](https://peps.python.org/pep-3101/), such as “0[name]” or “label.title”. 

**args** and **kwargs** are as passed in to [`vformat()`](/modules/string/Formatter/vformat.md). The return value **used_key** has the same meaning as the **key** parameter to [`get_value()`](/modules/string/Formatter/get_value.md).

### Syntax

```python
string.Formatter.get_field(field_name, args, kwargs)
```