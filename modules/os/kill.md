# os.kill()

> **Availability:** Unix, Windows, not Emscripten, not WASI.

Send signal **sig** to the process **pid**.

Constants for the specific signals available on the host platform are defined in the [`signal`](/modules/signal/) module.

Windows: The `signal.CTRL_C_EVENT` and `signal.CTRL_BREAK_EVENT` signals are special signals which can only be sent to console processes which share a common console window, e.g., some subprocesses. Any other value for **sig** will cause the process to be unconditionally killed by the TerminateProcess API, and the exit code will be set to **sig**. The Windows version of `kill()` additionally takes process handles to be killed.

?> See also [`signal.pthread_kill()`](/modules/signal/pthread_kill.md).

Raises an auditing event `os.kill` with arguments `pid`, `sig`.

### Syntax

```python
os.kill(pid, sig, /)
```