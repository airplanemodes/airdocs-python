# window.idcok()

If **flag** is `False`, curses no longer considers using the hardware insert/delete character feature of the terminal. If **flag** is `True`, use of character insertion and deletion is enabled.

When curses is first initialized, use of character insert/delete is enabled by default.

### Syntax

```python
window.idcok(flag)
```