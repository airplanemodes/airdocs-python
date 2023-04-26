# window.immedok()

If **flag** is `True`, any change in the window image automatically causes the window to be refreshed. You no longer have to call [`refresh()`](/modules/curses/window/refresh.md) yourself. However, it may degrade performance considerably, due to repeated calls to wrefresh.

This option is disabled by default.

### Syntax

```python
window.immedok(flag)
```