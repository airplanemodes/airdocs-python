# anext()

When awaited, return the next item from the given asynchronous iterator, or **default** if given and the iterator is exhausted.

This is the async variant of the [`next()`](/built-in-functions/next.md) builtin, and behaves similarly.

This calls the `__anext__()` method of async_iterator, returning an awaitable. Awaiting this returns the next value of the iterator. If **default** is given, it is returned if the iterator is exhausted, otherwise [`StopAsyncIteration`](/exceptions/StopAsyncIteration.md) is raised.

### Syntax

```python
anext(async_iterator)
anext(async_iterator, default)
```
