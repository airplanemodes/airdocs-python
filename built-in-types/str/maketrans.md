# str.maketrans()

This static method returns a translation table usable for [`str.translate()`](/built-in-types/str/translate.md).

If there is only one argument, it must be a dictionary mapping Unicode ordinals (integers) or characters (strings of length 1) to Unicode ordinals, strings (of arbitrary lengths) or `None`. Character keys will then be converted to ordinals.

If there are two arguments, they must be strings of equal length, and in the resulting dictionary, each character in **x** will be mapped to the character at the same position in **y**. If there is a third argument, it must be a string, whose characters will be mapped to `None` in the result.

### Syntax

```python
str.maketrans(x)
str.maketrans(x, y)
str.maketrans(x, y, z)
```

### Examples

```python

```
