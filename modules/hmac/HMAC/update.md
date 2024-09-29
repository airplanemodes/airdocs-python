# HMAC.update()

Update the hmac object with **msg**.

Repeated calls are equivalent to a single call with the concatenation of all the arguments: `m.update(a); m.update(b)` is equivalent to `m.update(a + b)`.

### Syntax

```python
HMAC.update(msg)
```
