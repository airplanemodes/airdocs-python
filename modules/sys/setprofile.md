# sys.setprofile()

Set the system’s profile function, which allows you to implement a Python source code profiler in Python. The system’s profile function is called similarly to the system’s trace function (see [`settrace()`](/modules/sys/settrace.md)), but it is called with different events, for example it isn’t called for each executed line of code (only on call and return, but the return event is reported even when an exception has been set). The function is thread-specific, but there is no way for the profiler to know about context switches between threads, so it does not make sense to use this in the presence of multiple threads. Also, its return value is not used, so it can simply return `None`. Error in the profile function will cause itself unset.

Profile functions should have three arguments: **frame**, **event**, and **arg**.

- **frame** is the current stack frame.
- **event** is a string: `'call'`, `'return'`, `'c_call'`, `'c_return'`, or `'c_exception'`.
- **arg** depends on the event type.

Raises an auditing event `sys.setprofile` with no arguments.

The events have the following meaning:

* `'call'`: A function is called (or some other code block entered). The profile function is called. **arg** is `None`.
* `'return'`: A function (or other code block) is about to return. The profile function is called. **arg** is the value that will be returned, or `None` if the event is caused by an exception being raised.
* `'c_call'`: A C function is about to be called. This may be an extension function or a built-in. **arg** is the C function object.
* `'c_return'`: A C function has returned. **arg** is the C function object.
* `'c_exception'`: A C function has raised an exception. **arg** is the C function object.

### Syntax

```python
sys.setprofile(profilefunc)
```