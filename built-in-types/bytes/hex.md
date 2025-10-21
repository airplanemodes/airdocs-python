# bytes.hex()

Return a string object containing two hexadecimal digits for each byte in the instance.

If you want to make the hex string easier to read, you can specify a single character separator **sep** parameter to include in the output. By default, this separator will be included between each byte. A second optional **bytes_per_sep** parameter controls the spacing. Positive values calculate the separator position from the right, negative values from the left.

### Syntax

```python
bytes.hex()
bytes.hex(sep)
bytes.hex(sep, bytes_per_sep=1)
```

### Examples

```python
>>> b'\xf0\xf1\xf2'.hex()
# 'f0f1f2'
```

```python
>>> value = b'\xf0\xf1\xf2'
>>> value.hex('-')
# 'f0-f1-f2'

>>> value.hex('_', 2)
# 'f0_f1f2'

>>> b'UUDDLRLRAB'.hex(' ', -4)
# '55554444 4c524c52 4142'
```
