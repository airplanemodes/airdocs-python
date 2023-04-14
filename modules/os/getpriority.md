# os.getpriority()

> **Availability:** Unix, not Emscripten, not WASI.

Get program scheduling priority. The value **which** is one of `PRIO_PROCESS`, `PRIO_PGRP`, or `PRIO_USER`, and **who** is interpreted relative to **which** (a process identifier for `PRIO_PROCESS`, process group identifier for `PRIO_PGRP`, and a user ID for `PRIO_USER`). A zero value for **who** denotes (respectively) the calling process, the process group of the calling process, or the real user ID of the calling process.

### Syntax

```python
os.getpriority(which, who)
```