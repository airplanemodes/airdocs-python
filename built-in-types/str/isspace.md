# str.isspace()

Return `True` if there are only whitespace characters in the string and there is at least one character, `False` otherwise.

?> A character is whitespace if in the Unicode character database ([`unicodedata`](/modules/unicodedata.md)), either its general category is `Zs` (“Separator, space”), or its bidirectional class is one of `WS`, `B`, or `S`.

### Syntax

```python
str.isspace()
```

### Examples

```python
>>> "     ".isspace() # True
>>> "  .  ".isspace() # False
```
