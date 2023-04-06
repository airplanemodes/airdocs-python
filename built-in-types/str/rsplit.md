# str.rsplit()

Return a list of the words in the string, using **sep** as the delimiter string.

If **maxsplit** is given, at most **maxsplit** splits are done, the rightmost ones. 

If **sep** is not specified or `None`, any whitespace string is a separator. Except for splitting from the right, `str.rsplit()` behaves like [`str.split()`](/built-in-types/str/str.split.md).

### Syntax

```python
str.rsplit(sep=None, maxsplit=-1)
```