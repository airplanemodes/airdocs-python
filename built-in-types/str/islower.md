# str.islower()

`>>> str.islower.__doc__`: Return `True` if the string is a lowercase string, `False` otherwise.

A string is lowercase if all cased characters in the string are lowercase and there is at least one cased character in the string.

?> Cased characters are those with general category property being one of “Lu” (Letter, uppercase), “Ll” (Letter, lowercase), or “Lt” (Letter, titlecase).

### Syntax

```python
str.islower()
```

### Examples

```python
"lorem ipsum".islower() # True
"lazy Fox".islower() # False
```