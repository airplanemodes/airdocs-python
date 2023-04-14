# os.wait3()

> **Availability:** Unix, not Emscripten, not WASI.

Similar to [`waitpid()`](/modules/os/waitpid.md), except no process id argument is given and a 3-element tuple containing the child’s process id, exit status indication, and resource usage information is returned. Refer to [`resource.getrusage()`](/modules/resource/getrusage.md) for details on resource usage information. The options argument is the same as that provided to [`waitpid()`](/modules/os/waitpid.md) and [`wait4()`](/modules/os/wait4.md).

[`waitstatus_to_exitcode()`](/modules/os/waitstatus_to_exitcode.md) can be used to convert the exit status into an exitcode.

### Syntax

```python
os.wait3(options)
```