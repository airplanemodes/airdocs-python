# try

The `try` statement specifies exception handlers and/or cleanup code for a group of statements.

The `try` statement works as follows:
- First, the **try clause** (the statement(s) between the `try` and `except` keywords) is executed.
- If no exception occurs, the **except clause** is skipped and execution of the `try` statement is finished.
- If an exception occurs during execution of the **try clause**, the rest of the clause is skipped. Then, if its type matches the exception named after the `except` keyword, the **except clause** is executed, and then execution continues after the try/except block.
- If an exception occurs which does not match the exception named in the **except clause**, it is passed on to outer try statements. If no handler is found, it is an **unhandled exception**.

A `try` statement may have more than one **except clause**, to specify handlers for different exceptions. At most one handler will be executed. Handlers only handle exceptions that occur in the corresponding **try clause**, not in other handlers of the same try statement. An **except clause** may name multiple exceptions as a parenthesized tuple.

The `except` clause(s) specify one or more exception handlers. When no exception occurs in the **try clause**, no exception handler is executed. When an exception occurs in the try suite, a search for an exception handler is started. This search inspects the **except clauses** in turn until one is found that matches the exception. An expression-less **except clause**, if present, must be last. It matches any exception. For an **except clause** with an expression, that expression is evaluated, and the clause matches the exception if the resulting object is “compatible” with the exception. An object is compatible with an exception if the object is the class or a non-virtual base class of the exception object, or a tuple containing an item that is the class or a non-virtual base class of the exception object.

The `except*` clause(s) are used for handling `ExceptionGroups`. The exception type for matching is interpreted as in the case of except, but in the case of exception groups we can have partial matches when the type matches some of the exceptions in the group. This means that multiple **except\* clauses** can execute, each handling part of the exception group. Each clause executes at most once and handles an exception group of all matching exceptions. Each exception in the group is handled by at most one **except\* clause**, the first that matches it.

The optional `else` clause is executed if the control flow leaves the try suite, no exception was raised, and no [`return`](/statements/return.md), [`continue`](/statements/continue.md), or [`break`](/statements/break.md) statement was executed. Exceptions in the **else clause** are not handled by the preceding except clauses.

If `finally` is present, it specifies a ‘cleanup’ handler. The **try clause** is executed, including any **except** and **else clauses**. If an exception occurs in any of the clauses and is not handled, the exception is temporarily saved. The **finally clause** is executed. If there is a saved exception it is re-raised at the end of the **finally clause**. If the **finally clause** raises another exception, the saved exception is set as the context of the new exception. If the **finally clause** executes a [`return`](/statements/return.md), [`break`](/statements/break.md) or [`continue`](/statements/continue.md) statement, the saved exception is discarded.

### Syntax

```python
try:
    suite
except expression as identifier:
    suite
else:
    suite
finally:
    suite
```

### Examples

Before an except clause’s suite is executed, the exception is stored in the [`sys`](/modules/sys.md) module, where it can be accessed from within the body of the except clause by calling [`sys.exception()`](/modules/sys/exception.md). When leaving an exception handler, the exception stored in the [`sys`](/modules/sys.md) module is reset to its previous value:

```python
```