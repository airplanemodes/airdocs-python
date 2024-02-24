# str.isdecimal()

Return `True` if all characters in the string are decimal characters and there is at least one character, `False` otherwise.

Decimal characters are those that can be used to form numbers in base 10, e.g. U+0660, ARABIC-INDIC DIGIT ZERO. Formally a decimal character is a character in the Unicode General Category “Nd”.

### Syntax

```python
str.isdecimal()
```

### Examples

```python
>>> "1".isdecimal()    # True
>>> "10".isdecimal()   # True
>>> "01".isdecimal()   # True
>>> "0.1".isdecimal()  # False
>>> "-0.1".isdecimal() # False
>>> "+5".isdecimal()   # False
```
