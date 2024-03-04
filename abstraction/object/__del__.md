# object.\_\_del\_\_()

Called when the instance is about to be destroyed. This is also called a finalizer or (improperly) a destructor. If a base class has a `__del__()` method, the derived class’s `__del__()` method, if any, must explicitly call it to ensure proper deletion of the base class part of the instance.

It is possible (though not recommended!) for the `__del__()` method to postpone destruction of the instance by creating a new reference to it. This is called object resurrection. It is implementation-dependent whether `__del__()` is called a second time when a resurrected object is about to be destroyed; the current CPython implementation only calls it once.

It is not guaranteed that `__del__()` methods are called for objects that still exist when the interpreter exits.

?> `del x` doesn’t directly call `x.__del__()` — the former decrements the reference count for `x` by one, and the latter is only called when `x`’s reference count reaches zero.

?> **CPython implementation detail:** It is possible for a reference cycle to prevent the reference count of an object from going to zero. In this case, the cycle will be later detected and deleted by the cyclic garbage collector. A common cause of reference cycles is when an exception has been caught in a local variable. The frame’s locals then reference the exception, which references its own traceback, which references the locals of all frames caught in the traceback.

**Warning!** Due to the precarious circumstances under which `__del__()` methods are invoked, exceptions that occur during their execution are ignored, and a warning is printed to [`sys.stderr`](/modules/sys/stderr.md) instead. In particular:  
* `__del__()` can be invoked when arbitrary code is being executed, including from any arbitrary thread. If `__del__()` needs to take a lock or invoke any other blocking resource, it may deadlock as the resource may already be taken by the code that gets interrupted to execute `__del__()`.  
* `__del__()` can be executed during interpreter shutdown. As a consequence, the global variables it needs to access (including other modules) may already have been deleted or set to None. Python guarantees that globals whose name begins with a single underscore are deleted from their module before other globals are deleted. If no other references to such globals exist, this may help in assuring that imported modules are still available at the time when the `__del__()` method is called.

### Syntax

```python
object.__del__(self)
```
