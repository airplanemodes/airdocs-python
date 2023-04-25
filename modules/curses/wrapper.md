# curses.wrapper()

Initialize curses and call another callable object, **func**, which should be the rest of your curses-using application.

If the application raises an exception, this function will restore the terminal to a sane state before re-raising the exception and generating a traceback. The callable object **func** is then passed the main window ‘stdscr’ as its first argument, followed by any other arguments passed to `wrapper()`. Before calling **func**, `wrapper()` turns on cbreak mode, turns off echo, enables the terminal keypad, and initializes colors if the terminal has color support. On exit (whether normally or by exception) it restores cooked mode, turns on echo, and disables the terminal keypad.

### Syntax

```python
curses.wrapper(func, /, *args, **kwargs)
```