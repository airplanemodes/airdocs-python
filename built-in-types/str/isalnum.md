# str.isalnum()

Return `True` if all characters in the string are alphanumeric and there is at least one character, `False` otherwise.

A character is alphanumeric if one of the following returns `True`: [`str.isalpha()`](/built-in-types/str/str.isalpha.md), [`str.isdecimal()`](/built-in-types/str/str.isdecimal.md), [`str.isdigit()`](/built-in-types/str/str.isdigit.md), or [`str.isnumeric()`](/built-in-types/str/str.isnumeric.md).

### Syntax

```python
str.isalnum()
```

### Examples

```python
>>> "abc".isalnum()          # True
>>> "abc123".isalnum()       # True
>>> "abc 123".isalnum()      # False
>>> "$$$".isalnum()          # False
>>> "How are you?".isalnum() # False
>>> "1000".isalnum()         # True
```
