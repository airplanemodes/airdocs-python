# copy

**Shallow and deep copy operations.**

> Source code: [`Lib/copy.py`](https://github.com/python/cpython/tree/3.13/Lib/copy.py)

Assignment statements in Python do not copy objects, they create bindings between a target and an object. For collections that are mutable or contain mutable items, a copy is sometimes needed so one can change one copy without changing the other. This module provides generic shallow and deep copy operations.

The difference between shallow and deep copying is only relevant for compound objects (objects that contain other objects, like lists or class instances):
- A **shallow copy** constructs a new compound object and then (to the extent possible) inserts *references* into it to the objects found in the original.
- A **deep copy** constructs a new compound object and then, recursively, inserts *copies* into it of the objects found in the original.

Two problems often exist with deep copy operations that don’t exist with shallow copy operations:
- Recursive objects (compound objects that, directly or indirectly, contain a reference to themselves) may cause a recursive loop.
- Because deep copy copies everything it may copy too much, such as data which is intended to be shared between copies.

The [`deepcopy()`](/modules/copy/deepcopy.md) function avoids these problems by keeping a `memo` dictionary of objects already copied during the current copying pass, and letting user-defined classes override the copying operation or the set of components copied.

This module does not copy types like module, method, stack trace, stack frame, file, socket, window, or any similar types. It does “copy” functions and classes (shallow and deeply), by returning the original object unchanged. This is compatible with the way these are treated by the [`pickle`](/modules/pickle/) module.

Shallow copies of dictionaries can be made using [`dict.copy()`](/built-in-types/dict/dict.copy.md), and of lists by assigning a slice of the entire list, for example, `copied_list = original_list[:]`.

Classes can use the same interfaces to control copying that they use to control pickling. See the description of module [`pickle`](/modules/pickle/) for information on these methods. In fact, the `copy` module uses the registered pickle functions from the [`copyreg`](/modules/copyreg/) module.

In order for a class to define its own copy implementation, it can define special methods `__copy__()` and `__deepcopy__()`. The former is called to implement the shallow copy operation. No additional arguments are passed. The latter is called to implement the deep copy operation. It is passed one argument, the **memo** dictionary. If the `__deepcopy__()` implementation needs to make a deep copy of a component, it should call the [`deepcopy()`](/modules/copy/deepcopy.md) function with the component as first argument and the memo dictionary as second argument. The memo dictionary should be treated as an opaque object.