# sys.addaudithook()

Append the callable **hook** to the list of active auditing hooks for the current (sub)interpreter.

When an auditing event is raised through the [`sys.audit()`](/modules/sys/audit.md) function, each hook will be called in the order it was added with the event name and the tuple of arguments. Native hooks added by `PySys_AddAuditHook()` are called first, followed by hooks added in the current (sub)interpreter. Hooks can then log the event, raise an exception to abort the operation, or terminate the process entirely.

Note that audit hooks are primarily for collecting information about internal or otherwise unobservable actions, whether by Python or libraries written in Python. They are not suitable for implementing a “sandbox”. In particular, malicious code can trivially disable or bypass hooks added using this function. At a minimum, any security-sensitive hooks must be added using the C API `PySys_AddAuditHook()` before initialising the runtime, and any modules allowing arbitrary memory modification (such as [`ctypes`](/modules/ctypes/)) should be completely removed or closely monitored.

Calling `sys.addaudithook()` will itself raise an auditing event named `sys.addaudithook` with no arguments. If any existing hooks raise an exception derived from [`RuntimeError`](/exceptions/RuntimeError.md), the new hook will not be added and the exception suppressed. As a result, callers cannot assume that their hook has been added unless they control all existing hooks.

See the audit events table for all events raised by CPython, and [**PEP 578**](https://peps.python.org/pep-0578/) for the original design discussion.

### Syntax

```python
sys.addaudithook(hook)
```