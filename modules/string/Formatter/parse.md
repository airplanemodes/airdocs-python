# string.Formatter.parse()

Loop over the format_string and return an iterable of tuples (**literal_text**, **field_name**, **format_spec**, **conversion**). This is used by [`vformat()`](/modules/string/Formatter/vformat.md) to break the string into either literal text, or replacement fields.

The values in the tuple conceptually represent a span of literal text followed by a single replacement field. If there is no literal text (which can happen if two replacement fields occur consecutively), then **literal_text** will be a zero-length string. If there is no replacement field, then the values of **field_name**, **format_spec** and **conversion** will be `None`.

### Syntax

```python
string.Formatter.parse(format_string)
```