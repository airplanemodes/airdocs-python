# str.find()

Return the lowest index in the string where substring **sub** is found within the slice `s[start:end]`.

Optional arguments **start** and **end** are interpreted as in slice notation.

Return `-1` if **sub** is not found.

?> The `find()` method should be used only if you need to know the position of **sub**. To check if **sub** is a substring or not, use the [`in`](/operators/in.md) operator.

### Syntax

```python
str.find(sub)
str.find(sub, start)
str.find(sub, start, end)
```
