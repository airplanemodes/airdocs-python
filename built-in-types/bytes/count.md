# bytes.count()

Return the number of non-overlapping occurrences of subsequence **sub** in the range **start**, **end**. 

Optional arguments **start** and **end** are interpreted as in slice notation.

The subsequence to search for may be any bytes-like object or an integer in the range `0` to `255`.

If **sub** is empty, returns the number of empty slices between characters which is the length of the bytes object plus one.

### Syntax

```python
bytes.count(sub)
bytes.count(sub, start)
bytes.count(sub, start, end)
```
