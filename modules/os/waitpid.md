# os.waitpid()

> **Availability:** Unix, Windows, not Emscripten, not WASI.

The details of this function differ on Unix and Windows.

**On Unix:** Wait for completion of a child process given by process id **pid**, and return a tuple containing its process id and exit status indication (encoded as for [`wait()`](/modules/os/wait.md)). The semantics of the call are affected by the value of the integer **options**, which should be 0 for normal operation.

If **pid** is greater than `0`, `waitpid()` requests status information for that specific process. If **pid** is `0`, the request is for the status of any child in the process group of the current process. If **pid** is `-1`, the request pertains to any child of the current process. If **pid** is less than `-1`, status is requested for any process in the process group `-pid` (the absolute value of **pid**).

**options** is an OR combination of flags. If it contains `WNOHANG` and there are no matching children in the requested state, `(0, 0)` is returned. Otherwise, if there are no matching children that could be waited for, [`ChildProcessError`](/exceptions/ChildProcessError.md) is raised. Other options that can be used are `WUNTRACED` and `WCONTINUED`.

**On Windows:** Wait for completion of a process given by process handle **pid**, and return a tuple containing **pid**, and its exit status shifted left by 8 bits (shifting makes cross-platform use of the function easier). A **pid** less than or equal to `0` has no special meaning on Windows, and raises an exception. The value of integer **options** has no effect. **pid** can refer to any process whose id is known, not necessarily a child process. The `spawn*` functions called with `P_NOWAIT` return suitable process handles.

[`waitstatus_to_exitcode()`](/modules/os/waitstatus_to_exitcode.md) can be used to convert the exit status into an exit code.

### Syntax

```python
os.waitpid(pid, options, /)
```