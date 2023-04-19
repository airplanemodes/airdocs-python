# curses.def_prog_mode()

Save the current terminal mode as the “program” mode, the mode when the running program is using curses.

Its counterpart is the “shell” mode, for when the program is not in curses. Subsequent calls to [`reset_prog_mode()`](/modules/curses/reset_prog_mode.md) will restore this mode.

### Syntax

```python
curses.def_prog_mode()
```