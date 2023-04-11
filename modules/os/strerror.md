# os.strerror()

Return the error message corresponding to the error code in **code**.

On platforms where `strerror()` returns `NULL` when given an unknown error number, [`ValueError`](/exceptions/ValueError.md) is raised.

### Syntax

```python
os.strerror(code, /)
```