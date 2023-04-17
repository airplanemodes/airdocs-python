# sys.exc_info()

This function returns the old-style representation of the handled exception. If an exception `e` is currently handled (so [`exception()`](/modules/sys/exception.md) would return `e`), `exc_info()` returns the tuple `(type(e), e, e.__traceback__)`. That is, a tuple containing the type of the exception (a subclass of [`BaseException`](/exceptions/BaseException.md)), the exception itself, and a traceback object which typically encapsulates the call stack at the point where the exception last occurred.

If no exception is being handled anywhere on the stack, this function return a tuple containing three `None` values.

### Syntax

```python
sys.exc_info()
```