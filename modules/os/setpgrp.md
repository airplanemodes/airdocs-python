# os.setpgrp()

> **Availability:** Unix, not Emscripten, not WASI.

Call the system call `setpgrp()` or `setpgrp(0, 0)` depending on which version is implemented (if any).

?> See the Unix manual for the semantics.

### Syntax

```python
os.setpgrp()
```