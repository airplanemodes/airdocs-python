# str.startswith()

Return `True` if string starts with the **prefix**, otherwise return `False`.

**prefix** can also be a tuple of prefixes to look for.

With optional **start**, test string beginning at that position. With optional **end**, stop comparing string at that position.

### Syntax

```python
str.startswith(prefix)
str.startswith(prefix, start)
str.startswith(prefix, start, end)
```

### Examples

```python
>>> moon_phase = "Waxing crescent"
>>> moon_phase.startswith("Wax") # True
>>> moon_phase.startswith("cres") # False
```
