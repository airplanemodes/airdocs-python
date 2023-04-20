# curses.nonl()

`>>> curses.nonl.__doc__`: Leave newline mode.

Disable translation of return into newline on input, and disable low-level translation of newline into newline/return on output (but this does not change the behavior of `addch('\n')`, which always does the equivalent of return and line feed on the virtual screen). With translation off, curses can sometimes speed up vertical motion a little. Also, it will be able to detect the return key on input.

### Syntax

```python
curses.nonl()
```