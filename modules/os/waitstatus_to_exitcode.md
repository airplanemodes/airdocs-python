# os.waitstatus_to_exitcode()

> **Availability:** Unix, Windows, not Emscripten, not WASI.

Convert a wait status to an exit code.

On Unix:

* If the process exited normally (if `WIFEXITED(status)` is true), return the process exit status (return `WEXITSTATUS(status)`): result greater than or equal to 0.
* If the process was terminated by a signal (if `WIFSIGNALED(status)` is true), return `-signum` where **signum** is the number of the signal that caused the process to terminate (return `-WTERMSIG(status)`): result less than 0.
* Otherwise, raise a [`ValueError`](/exceptions/ValueError.md).

On Windows, return **status** shifted right by 8 bits.

On Unix, if the process is being traced or if [`waitpid()`](/modules/os/waitpid.md) was called with `WUNTRACED` option, the caller must first check if `WIFSTOPPED(status)` is true. This function must not be called if `WIFSTOPPED(status)` is true.

?> **See also:** `WIFEXITED()`, `WEXITSTATUS()`, `WIFSIGNALED()`, `WTERMSIG()`, `WIFSTOPPED()`, `WSTOPSIG()` functions.

### Syntax

```python
os.waitstatus_to_exitcode(status)
```