# string.Formatter.vformat()

This function does the actual work of formatting. It is exposed as a separate function for cases where you want to pass in a predefined dictionary of arguments, rather than unpacking and repacking the dictionary as individual arguments using the `*args` and `**kwargs` syntax. `vformat()` does the work of breaking up the format string into character data and replacement fields.

### Syntax

```python
string.Formatter.vformat(format_string, args, kwargs)
```