# sys._getframe()

Return a frame object from the call stack.

If optional integer **depth** is given, return the frame object that many calls below the top of the stack. If that is deeper than the call stack, [`ValueError`](/exceptions/ValueError.md) is raised. The default for **depth** is zero, returning the frame at the top of the call stack.

Raises an auditing event `sys._getframe` with argument `frame`.

### Syntax

```python
sys._getframe()
```