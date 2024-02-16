# StopIteration

Raised by built-in function [`next()`](/built-in-functions/next.md) and an iterator's `__next__()` method to signal that there are no further items produced by the iterator.

* `value` is the exception object has a single attribute value, which is given as an argument when constructing the exception, and defaults to `None`.

When a generator or coroutine function returns, a new `StopIteration` instance is raised, and the value returned by the function is used as the `value` parameter to the constructor of the exception.

If a generator code directly or indirectly raises `StopIteration`, it is converted into a [`RuntimeError`](/exceptions/RuntimeError.md) (retaining the `StopIteration` as the new exception’s cause).
