# break

Terminates the nearest enclosing loop, skipping the optional `else` clause if the loop has one.

`break` may only occur syntactically nested in a [`for`](/statements/for.md) or [`while`](/statements/while.md) loop, but not nested in a function or class definition within that loop.

If a [`for`](/statements/for.md) loop is terminated by `break`, the loop control target keeps its current value.

When `break` passes control out of a [`try`](/statements/try.md) statement with a `finally` clause, that `finally` clause is executed before really leaving the loop.
