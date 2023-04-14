# os.waitid()

> **Availability:** Unix, not Emscripten, not WASI.

Wait for the completion of a child process.

**idtype** can be `P_PID`, `P_PGID`, `P_ALL`, or (on Linux) `P_PIDFD`. The interpretation of **id** depends on it. See their individual descriptions.

**options** is an OR combination of flags. At least one of `WEXITED`, `WSTOPPED` or `WCONTINUED` is required. `WNOHANG` and `WNOWAIT` are additional optional flags.

The return value is an object representing the data contained in the `siginfo_t` structure with the following attributes:

* `si_pid` - process ID.
* `si_uid` - real user ID of the child.
* `si_signo` - always `SIGCHLD`.
* `si_status` - the exit status or signal number, depending on si_code.
* `si_code` - see `CLD_EXITED` for possible values.

If `WNOHANG` is specified and there are no matching children in the requested state, `None` is returned. Otherwise, if there are no matching children that could be waited for, [`ChildProcessError`](/exceptions/ChildProcessError.md) is raised.

### Syntax

```python
os.waitid(idtype, id, options, /)
```