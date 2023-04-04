# str.endswith()

Return `True` if the string ends with the specified **suffix**, otherwise return `False`.

**suffix** can also be a tuple of suffixes to look for.

With optional **start**, test beginning at that position. With optional **end**, stop comparing at that position.

### Syntax

```python
str.endswith(suffix)
str.endswith(suffix, start)
str.endswith(suffix, start, end)
```

### Examples

```python
moon_phase = "Waning crescent"
moon_phase.endswith("cent") # True
moon_phase.endswith("ing") # False
```