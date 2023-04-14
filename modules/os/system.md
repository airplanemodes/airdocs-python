# os.system()

> **Availability:** Unix, Windows, not Emscripten, not WASI.

Execute the command (a string) in a subshell.

This is implemented by calling the Standard C function system(), and has the same limitations. Changes to `sys.stdin`, etc. are not reflected in the environment of the executed command. If **command** generates any output, it will be sent to the interpreter standard output stream. The C standard does not specify the meaning of the return value of the C function, so the return value of the Python function is system-dependent.

On Unix, the return value is the exit status of the process encoded in the format specified for [`wait()`](/modules/os/wait.md).

On Windows, the return value is that returned by the system shell after running **command**. The shell is given by the Windows environment variable COMSPEC: it is usually *cmd.exe*, which returns the exit status of the command run. On systems using a non-native shell, consult your shell documentation.

The [`subprocess`](/modules/subprocess/) module provides more powerful facilities for spawning new processes and retrieving their results. Using that module is preferable to using this function.

On Unix, [`waitstatus_to_exitcode()`](/modules/os/waitstatus_to_exitcode.md) can be used to convert the result (exit status) into an exit code. On Windows, the result is directly the exit code.

Raises an auditing event `os.system` with argument `command`.

### Syntax

```python
os.system(command)
```