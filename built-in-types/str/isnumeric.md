# str.isnumeric()

Return `True` if all characters in the string are numeric characters, and there is at least one character, `False` otherwise.

Numeric characters include digit characters, and all characters that have the Unicode numeric value property, e.g. U+2155, VULGAR FRACTION ONE FIFTH. Formally, numeric characters are those with the property value `Numeric_Type=Digit`, `Numeric_Type=Decimal` or `Numeric_Type=Numeric`.

### Syntax

```python
str.isnumeric()
```

### Examples

```python
>>> "12345".isnumeric()     # True
>>> "12 3 45".isnumeric()   # False
>>> "12345!".isnumeric()    # False
>>> "-2-101234".isnumeric() # False
>>> "3+3".isnumeric()       # False
>>> "3.3".isnumeric()       # False
```
