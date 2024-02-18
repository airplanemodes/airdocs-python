# global

The `global` statement is a declaration which holds for the entire current code block. It means that the listed identifiers are to be interpreted as globals. It would be impossible to assign to a global variable without `global`, although free variables may refer to globals without being declared global.

Names listed in a `global` statement must not be used in the same code block textually preceding that `global` statement.

Names listed in a `global` statement must not be defined as formal parameters, or as targets in [`with`](/statements/with.md) statements or `except` clauses, or in a [`for`](/statements/for.md) target list, [`class`](/statements/class.md) definition, function definition, [`import`](/statements/import.md) statement, or variable annotation.

### Syntax

```python
global identifier
```
