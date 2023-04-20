# curses.putp()

`>>> curses.putp.__doc__`: Emit the value of a specified terminfo capability for the current terminal.

Equivalent to `tputs(str, 1, putchar)`.

Note that the output of `putp()` always goes to standard output.

### Syntax

```python
curses.putp(str)
```