# sys.unraisablehook()

Handle an unraisable exception.

Called when an exception has occurred but there is no way for Python to handle it. For example, when a destructor raises an exception or during garbage collection ([`gc.collect()`](/modules/gc/collect.md)).

The **unraisable** argument has the following attributes:

* **exc_type**: Exception type.
* **exc_value**: Exception value, can be `None`.
* **exc_traceback**: Exception traceback, can be `None`.
* **err_msg**: Error message, can be `None`.
* **object**: Object causing the exception, can be `None`.

The default hook formats **err_msg** and **object** as: `f'{err_msg}: {object!r}'`. Use “Exception ignored in” error message if **err_msg** is `None`.

`sys.unraisablehook()` can be overridden to control how unraisable exceptions are handled.

Storing **exc_value** using a custom hook can create a reference cycle. It should be cleared explicitly to break the reference cycle when the exception is no longer needed.

Storing **object** using a custom hook can resurrect it if it is set to an object which is being finalized. Avoid storing **object** after the custom hook completes to avoid resurrecting objects.

See also [`excepthook()`](/modules/sys/excepthook.md) which handles uncaught exceptions.

Raise an auditing event `sys.unraisablehook` with arguments `hook`, `unraisable` when an exception that cannot be handled occurs. The `unraisable` object is the same as what will be passed to the hook. If no hook has been set, `hook` may be `None`.

### Syntax

```python
sys.unraisablehook(unraisable, /)
```