# sys.settrace()

Set the system’s trace function, which allows you to implement a Python source code debugger in Python. The function is thread-specific. For a debugger to support multiple threads, it must register a trace function using `settrace()` for each thread being debugged or use [`threading.settrace()`](/modules/threading/settrace.md).

Trace functions should have three arguments: **frame**, **event**, and **arg**. **frame** is the current stack frame. **event** is a string: `'call'`, `'line'`, `'return'`, `'exception'` or `'opcode'`. **arg** depends on the event type.

The trace function is invoked (with **event** set to `'call'`) whenever a new local scope is entered. It should return a reference to a local trace function to be used for the new scope, or `None` if the scope shouldn’t be traced.

The local trace function should return a reference to itself (or to another function for further tracing in that scope), or `None` to turn off tracing in that scope.

If there is any error occurred in the trace function, it will be unset, just like `settrace(None)` is called.

The events have the following meaning:

* `call`: A function is called (or some other code block entered). The global trace function is called. **arg** is `None`. The return value specifies the local trace function.
* `line`: The interpreter is about to execute a new line of code or re-execute the condition of a loop. The local trace function is called. **arg** is `None`. The return value specifies the new local trace function. See `Objects/lnotab_notes.txt` for a detailed explanation of how this works. Per-line events may be disabled for a frame by setting `f_trace_lines` to `False` on that frame.
* `return`: A function (or other code block) is about to return. The local trace function is called. **arg** is the value that will be returned, or `None` if the event is caused by an exception being raised. The trace function’s return value is ignored.
* `exception`: An exception has occurred. The local trace function is called. **arg** is a tuple `(exception, value, traceback)`. The return value specifies the new local trace function.
* `opcode`: The interpreter is about to execute a new opcode (see [`dis`](/modules/dis/) for opcode details). The local trace function is called. **arg** is `None`. The return value specifies the new local trace function. Per-opcode events are not emitted by default: they must be explicitly requested by setting `f_trace_opcodes` to `True` on the frame.

Note that as an exception is propagated down the chain of callers, an `'exception'` event is generated at each level.

For more fine-grained usage, it’s possible to set a trace function by assigning `frame.f_trace = tracefunc` explicitly, rather than relying on it being set indirectly via the return value from an already installed trace function. This is also required for activating the trace function on the current frame, which `settrace()` doesn’t do. Note that in order for this to work, a global tracing function must have been installed with `settrace()` in order to enable the runtime tracing machinery, but it doesn’t need to be the same tracing function (e.g. it could be a low overhead tracing function that simply returns `None` to disable itself immediately on each frame).

Raises an auditing event `sys.settrace` with no arguments.

### Syntax

```python
sys.settrace(tracefunc)
```