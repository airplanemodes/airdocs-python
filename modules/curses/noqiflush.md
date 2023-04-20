# curses.noqiflush()

`>>> curses.noqiflush.__doc__`: Disable queue flushing.

When the `noqiflush()` routine is used, normal flush of input and output queues associated with the `INTR`, `QUIT` and `SUSP` characters will not be done. You may want to call `noqiflush()` in a signal handler if you want output to continue as though the interrupt had not occurred, after the handler exits.

### Syntax

```python
curses.noqiflush()
```