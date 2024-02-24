# str.upper()

Return a copy of the string with all the cased characters converted to uppercase.

?> Note that `s.upper().isupper()` might be `False` if `s` contains uncased characters or if the Unicode category of the resulting character(s) is not “Lu” (Letter, uppercase), but e.g. “Lt” (Letter, titlecase).

### Syntax

```python
str.upper()
```

### Example

```python
>>> "license".upper() # 'LICENSE'
```
