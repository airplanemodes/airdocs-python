# marshal.loads()

Convert the [`bytes`](/built-in-types/bytes/)-like object to a value.

If no valid value is found, raise [`EOFError`](/exceptions/EOFError.md), [`ValueError`](/exceptions/ValueError.md) or [`TypeError`](/exceptions/TypeError.md).

Code objects are only supported if **allow_code** is true.

Extra bytes in the input are ignored.

Raises an auditing event `marshal.loads` with argument `bytes`.

### Syntax

```python
marshal.loads(bytes, /, *, allow_code=True)
```
