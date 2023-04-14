# os.wait()

> **Availability:** Unix, not Emscripten, not WASI.

Wait for completion of a child process, and return a tuple containing its pid and exit status indication: a 16-bit number, whose low byte is the signal number that killed the process, and whose high byte is the exit status (if the signal number is zero). The high bit of the low byte is set if a core file was produced.

If there are no children that could be waited for, [`ChildProcessError`](/exceptions/ChildProcessError.md) is raised.

[`waitstatus_to_exitcode()`](/modules/os/waitstatus_to_exitcode.md) can be used to convert the exit status into an exit code.

### Syntax

```python
os.wait()
```