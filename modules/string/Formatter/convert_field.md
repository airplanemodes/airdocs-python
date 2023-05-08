# string.Formatter.convert_field()

Converts the value (returned by [`get_field()`](/modules/string/Formatter/get_field.md)) given a conversion type (as in the tuple returned by the [`parse()`](/modules/string/Formatter/parse.md) method). 

The default version understands ‘s’ (str), ‘r’ (repr) and ‘a’ (ascii) conversion types.

### Syntax

```python
string.Formatter.convert_field(value, conversion)
```