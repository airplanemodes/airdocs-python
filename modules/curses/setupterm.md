# curses.setupterm()

`>>> curses.setupterm.__doc__`: Initialize the terminal.

**term** is a string giving the terminal name. If omitted or `None`, the value of the `TERM` environment variable will be used.

**fd** is the file descriptor to which any initialization sequences will be sent. If not supplied or `-1`, the file descriptor for `sys.stdout` will be used.

### Syntax

```python
curses.setupterm(term=None, fd=-1)
```