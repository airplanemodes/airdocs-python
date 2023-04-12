# os.tcsetpgrp()

> **Availability:** Unix, not WASI.

Set the process group associated with the terminal given by **fd** (an open file descriptor as returned by [`os.open()`](/modules/os/open.md)) to **pg**.

### Syntax

```python
os.tcsetpgrp(fd, pg, /)
```