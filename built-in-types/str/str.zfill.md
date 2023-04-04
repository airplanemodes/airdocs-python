# str.zfill()

Return a copy of the string left filled with ASCII '`0`' digits to make a string of length **width**.

A leading sign prefix ('`+`'/'`-`') is handled by inserting the padding after the sign character rather than before.

The original string is returned if **width** is less than or equal to original length.

### Syntax

```python
str.zfill(width)
```

### Examples

```python
>>> "42".zfill(5) # '00042'
>>> "-42".zfill(5) # '-0042'
```