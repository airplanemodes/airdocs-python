# str()

Return a `str` version of object.

`str` is the built-in string `class`. For general information about strings, see [str](/built-in-types/str.md).

### Syntax
General syntax with default values:
```python
str(object='', encoding='utf-8', errors='strict')
```

### Examples
```python
str(12) # '12'
str(0b11) # '3'
str(0x10) # '16'
str(["hello", "world"]) # "['hello', 'world']"
```