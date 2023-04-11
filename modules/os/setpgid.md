# os.setpgid()

> **Availability:** Unix, not Emscripten, not WASI.

Call the system call `setpgid()` to set the process group id of the process with id **pid** to the process group with id **pgrp**.

?> See the Unix manual for the semantics.

### Syntax

```python
os.setpgid(pid, pgrp, /)
```