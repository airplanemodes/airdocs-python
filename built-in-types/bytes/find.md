# bytes.find()

Return the lowest index in the data where the subsequence **sub** is found, such that **sub** is contained in the slice `s[start:end]`.

Optional arguments **start** and **end** are interpreted as in slice notation.

Return `-1` if **sub** is not found.

The subsequence to search for may be any bytes-like object or an integer in the range `0` to `255`.

?> The `find()` method should be used only if you need to know the position of **sub**. To check if **sub** is a substring or not, use the [`in`](/operators/in.md) operator.

### Syntax

```python
bytes.find(sub)
bytes.find(sub, start)
bytes.find(sub, start, end)
```
