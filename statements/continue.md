# continue

`continue` may only occur syntactically nested in a [`for`](/statements/for.md) or [`while`](/statements/while.md) loop, but not nested in a function or class definition within that loop. It continues with the next cycle of the nearest enclosing loop.

When `continue` passes control out of a [`try`](/statements/try.md) statement with a `finally` clause, that `finally` clause is executed before really starting the next loop cycle.
