# Objects
Objects are Python’s abstraction for data. All data in a Python program is represented by objects or by relations between objects.

Every object has an *identity*, a **type** and a **value**. An object’s identity never changes once it has been created. You may think of it as the object’s address in memory. The [`is`](/operators/is.md) operator compares the identity of two objects. The [`id()`](/built-in-functions/id.md) function returns an integer representing its identity.

An object’s type determines the operations that the object supports (e.g., “does it have a length?”) and also defines the possible values for objects of that type. The [`type()`](/built-in-functions/type.md) function returns an object’s type (which is an object itself). Like its identity, an object’s type is also unchangeable.

The value of some objects can change. Objects whose value can change are said to be *mutable*. Objects whose value is unchangeable once they are created are called *immutable*. An object’s mutability is determined by its type. For instance, numbers, strings and tuples are immutable, while dictionaries and lists are mutable.

Objects are never explicitly destroyed. However, when they become unreachable they may be garbage-collected. An implementation is allowed to postpone garbage collection or omit it altogether — it is a matter of implementation quality how garbage collection is implemented, as long as no objects are collected that are still reachable.

?> Note that the use of the implementation’s tracing or debugging facilities may keep objects alive that would normally be collectable. Also note that catching an exception with a `try...except` statement may keep objects alive.

Some objects contain references to “external” resources such as open files or windows. It is understood that these resources are freed when the object is garbage-collected, but since garbage collection is not guaranteed to happen, such objects also provide an explicit way to release the external resource, usually a `close()` method. Programs are strongly recommended to explicitly close such objects. The `try...finally` statement and the `with` statement provide convenient ways to do this.

Some objects contain references to other objects; these are called containers. Examples of containers are tuples, lists and dictionaries. The references are part of a container’s value. In most cases, when we talk about the value of a container, we imply the values, not the identities of the contained objects; however, when we talk about the mutability of a container, only the identities of the immediately contained objects are implied. So, if an immutable container (like a tuple) contains a reference to a mutable object, its value changes if that mutable object is changed.

Types affect almost all aspects of object behavior. Even the importance of object identity is affected in some sense: for immutable types, operations that compute new values may actually return a reference to any existing object with the same type and value, while for mutable objects this is not allowed.
E.g., after:
```python
a = 1
b = 1
```
`a` and `b` may or may not refer to the same object with the value one, depending on the implementation, but after:
```python
c = []
d = []
```
`c` and `d` are guaranteed to refer to two different, unique, newly created empty lists.

?> Note that `c = d = []` assigns the same object to both c and d.

## Type objects
Type objects represent the various object types. An object’s type is accessed by the built-in function [`type()`](/built-in-functions/type.md). There are no special operations on types. The standard module types defines names for all standard built-in types.

Types are written like this: `<class 'int'>`.

## Null object
This object is returned by functions that don’t explicitly return a value. It supports no special operations. There is exactly one null object, named `None` (a built-in name).