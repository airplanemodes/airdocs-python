# multiprocessing.Process()

Process objects represent activity that is run in a separate process. The `Process` class has equivalents of all the methods of [`threading.Thread`](/modules/threading/Thread/).

The constructor should always be called with keyword arguments. **group** should always be `None`. It exists solely for compatibility with [`threading.Thread`](/modules/threading/Thread/). **target** is the callable object to be invoked by the [`run()`](/modules/multiprocessing/Process/run.md) method. It defaults to `None`, meaning nothing is called. **name** is the process name (see [`name`](/modules/multiprocessing/Process/name.md) for more details). **args** is the argument tuple for the target invocation. **kwargs** is a dictionary of keyword arguments for the target invocation. If provided, the keyword-only **daemon** argument sets the process [`daemon`](/modules/multiprocessing/Process/daemon.md) flag to `True` or `False`. If `None` (the default), this flag will be inherited from the creating process.

By default, no arguments are passed to **target**. The **args** argument, which defaults to `()`, can be used to specify a list or tuple of the arguments to pass to **target**.

If a subclass overrides the constructor, it must make sure it invokes the base class constructor (`Process.__init__()`) before doing anything else to the process.

### Syntax

```python
multiprocessing.Process(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)
```

### Examples

```python
```