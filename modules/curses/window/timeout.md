# window.timeout()

Set blocking or non-blocking read behavior for the window. If **delay** is negative, blocking read is used (which will wait indefinitely for input). If **delay** is zero, then non-blocking read is used, and [`getch()`](/modules/curses/window/getch.md) will return `-1` if no input is waiting. If **delay** is positive, then [`getch()`](/modules/curses/window/getch.md) will block for **delay** milliseconds, and return `-1` if there is still no input at the end of that time.

### Syntax

```python
window.timeout(delay)
```