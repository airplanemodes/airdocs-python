# str.isdigit()

Return `True` if all characters in the string are digits and there is at least one character, `False` otherwise.

Digits include decimal characters and digits that need special handling, such as the compatibility superscript digits. This covers digits which cannot be used to form numbers in base 10, like the Kharosthi numbers. Formally, a digit is a character that has the property value `Numeric_Type=Digit` or `Numeric_Type=Decimal`.

### Syntax

```python
str.isdigit()
```

### Examples

```python
>>> "0".isdigit()    # True
>>> "10".isdigit()   # True
>>> "-2".isdigit()   # False
>>> "0123".isdigit() # True
>>> "1.1".isdigit()  # False
```
