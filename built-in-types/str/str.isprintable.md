# str.isprintable()

Return `True` if all characters in the string are printable or the string is empty, `False` otherwise.

Nonprintable characters are those characters defined in the Unicode character database as “Other” or “Separator”, excepting the ASCII space (0x20) which is considered printable. 

?> Note that printable characters in this context are those which should not be escaped when [`repr()`](/built-in-functions/repr.md) is invoked on a string. It has no bearing on the handling of strings written to `sys.stdout` or `sys.stderr`.

### Syntax

```python
str.isprintable()
```

### Examples

```python
```