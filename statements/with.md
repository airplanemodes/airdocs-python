# with

The `with` statement is used to wrap the execution of a block with methods defined by a context manager.

The execution of the `with` statement with one “item” proceeds as follows:
- The context expression (the expression given in the with_item) is evaluated to obtain a context manager.
- The context manager’s `__enter__()` is loaded for later use.
- The context manager’s `__exit__()` is loaded for later use.
- The context manager’s `__enter__()` method is invoked.
- If a target was included in the `with` statement, the return value from `__enter__()` is assigned to it.
- The suite is executed.
- The context manager’s `__exit__()` method is invoked. If an exception caused the suite to be exited, its type, value, and traceback are passed as arguments to `__exit__()`. Otherwise, three `None` arguments are supplied. If the suite was exited due to an exception, and the return value from the `__exit__()` method was false, the exception is reraised. If the return value was true, the exception is suppressed, and execution continues with the statement following the `with` statement. If the suite was exited for any reason other than an exception, the return value from `__exit__()` is ignored, and execution proceeds at the normal location for the kind of exit that was taken.

### Syntax
```python
with expression as target:
    suite
```

### Examples
```python
with open("hello.txt", "w") as file:
    file.write("Hello World!")
```