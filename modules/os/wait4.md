# os.wait4()

> **Availability:** Unix, not Emscripten, not WASI.

Similar to [`waitpid()`](/modules/os/waitpid.md), except a 3-element tuple, containing the child’s process id, exit status indication, and resource usage information is returned. Refer to [`resource.getrusage()`](/modules/resource/getrusage.md) for details on resource usage information. The arguments to `wait4()` are the same as those provided to [`waitpid()`](/modules/os/waitpid.md).

[`waitstatus_to_exitcode()`](/modules/os/waitstatus_to_exitcode.md) can be used to convert the exit status into an exitcode.

### Syntax

```python
os.wait4(pid, options)
```