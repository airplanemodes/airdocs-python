# bytes.index()

Like [`find()`](/built-in-types/bytes/find.md), but raise [`ValueError`](/exceptions/ValueError.md) when the subsequence is not found.

The subsequence to search for may be any bytes-like object or an integer in the range `0` to `255`.

### Syntax

```python
bytes.index(sub)
bytes.index(sub, start)
bytes.index(sub, start, end)
```
