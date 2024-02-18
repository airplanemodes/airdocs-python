# raise

If no expressions are present, `raise` re-raises the exception that is currently being handled, which is also known as the active exception. If there isn’t currently an active exception, a [`RuntimeError`](/exceptions/RuntimeError.md) exception is raised indicating that this is an error.

Otherwise, `raise` evaluates the first expression as the exception object. It must be either a subclass or an instance of [`BaseException`](/exceptions/BaseException.md). If it is a class, the exception instance will be obtained when needed by instantiating the class with no arguments.

The type of the exception is the exception instance’s class, the value is the instance itself.

### Syntax

```python
raise expression
raise expression from expression
```

### Examples

A traceback object is normally created automatically when an exception is raised and attached to it as the `__traceback__` attribute, which is writable. You can create an exception and set your own traceback in one step using the `with_traceback()` exception method (which returns the same exception instance, with its traceback set to its argument), like so:

```python
raise Exception("foo occurred").with_traceback(tracebackobj)
```

The `from` clause is used for exception chaining: if given, the second **expression** must be another exception class or instance. If the second expression is an exception instance, it will be attached to the raised exception as the `__cause__` attribute (which is writable). If the expression is an exception class, the class will be instantiated and the resulting exception instance will be attached to the raised exception as the `__cause__` attribute. If the raised exception is not handled, both exceptions will be printed:

```python
try:
    print(1 / 0)
except Exception as exc:
    raise RuntimeError("Something bad happened") from exc

# Traceback (most recent call last):
#   File "<stdin>", line 2, in <module>
# ZeroDivisionError: division by zero
# 
# The above exception was the direct cause of the following exception:
# 
# Traceback (most recent call last):
#   File "<stdin>", line 4, in <module>
# RuntimeError: Something bad happened
```

A similar mechanism works implicitly if a new exception is raised when an exception is already being handled. An exception may be handled when an `except` or `finally` clause, or a `with` statement, is used. The previous exception is then attached as the new exception’s `__context__` attribute:

```python
try:
    print(1 / 0)
except:
    raise RuntimeError("Something bad happened")

# Traceback (most recent call last):
#   File "<stdin>", line 2, in <module>
# ZeroDivisionError: division by zero
# 
# During handling of the above exception, another exception occurred:
# 
# Traceback (most recent call last):
#   File "<stdin>", line 4, in <module>
# RuntimeError: Something bad happened
```

Exception chaining can be explicitly suppressed by specifying `None` in the `from` clause:

```python
try:
    print(1 / 0)
except:
    raise RuntimeError("Something bad happened") from None

# Traceback (most recent call last):
#   File "<stdin>", line 4, in <module>
# RuntimeError: Something bad happened
```
