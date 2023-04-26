# sys.set_asyncgen_hooks()

Accepts two optional keyword arguments which are callables that accept an asynchronous generator iterator as an argument. The **firstiter** callable will be called when an asynchronous generator is iterated for the first time. The **finalizer** will be called when an asynchronous generator is about to be garbage collected.

Raises an auditing event `sys.set_asyncgen_hooks_firstiter` with no arguments.

Raises an auditing event `sys.set_asyncgen_hooks_finalizer` with no arguments.

Two auditing events are raised because the underlying API consists of two calls, each of which must raise its own event.

### Syntax

```python
sys.set_asyncgen_hooks(firstiter, finalizer)
```