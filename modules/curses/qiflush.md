# curses.qiflush()

If **flag** is `False`, the effect is the same as calling [`noqiflush()`](/modules/curses/qiflush.md). If **flag** is `True`, or no argument is provided, the queues will be flushed when these control characters are read.

### Syntax

```python
curses.qiflush()
curses.qiflush(flag)
```