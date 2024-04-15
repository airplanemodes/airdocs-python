# bytes.join()

Return a `bytes` object which is the concatenation of the binary data sequences in **iterable**.

A [`TypeError`](/exceptions/TypeError.md) will be raised if there are any values in **iterable** that are not bytes-like objects, including [`str`](/built-in-types/str/) objects. The separator between elements is the contents of the bytes object providing this method.

### Syntax

```python
bytes.join(iterable)
```
