# GeneratorExit

Raised when a generator or coroutine is closed. See `generator.close()` and `coroutine.close()`. It directly inherits from `BaseException` instead of `Exception` since it is technically not an error.