# GeneratorExit

Raised when a generator or coroutine is closed. See `generator.close()` and `coroutine.close()`. It directly inherits from [`BaseException`](/exceptions/BaseException.md) instead of [`Exception`](/exceptions/Exception.md) since it is technically not an error.
