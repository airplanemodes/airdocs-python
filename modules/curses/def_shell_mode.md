# curses.def_shell_mode()

Save the current terminal mode as the “shell” mode, the mode when the running program is not using curses.

Its counterpart is the “program” mode, when the program is using curses capabilities. Subsequent calls to [`reset_shell_mode()`](/modules/curses/reset_shell_mode.md) will restore this mode.

### Syntax

```python
curses.def_shell_mode()
```