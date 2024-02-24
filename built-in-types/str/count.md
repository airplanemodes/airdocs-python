# str.count()

Return the number of non-overlapping occurrences of substring **sub** in the range [**start**, **end**].

Optional arguments **start** and **end** are interpreted as in slice notation.

If **sub** is empty, returns the number of empty strings between characters which is the length of the string plus one.

### Syntax

```python
str.count(sub)
str.count(sub, start)
str.count(sub, start, end)
```

### Example

```python
greetings = "hello world!"
greetings.count("l") # 3
```
