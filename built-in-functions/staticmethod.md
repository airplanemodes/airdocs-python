# @staticmethod

Transform a method into a static method.

?> The `@staticmethod` form is a function decorator.

A static method can be called either on the class (such as `C.f()`) or on an instance (such as `C().f()`). Moreover, they can be called as regular functions (such as `f()`).

# Examples

A static method does not receive an implicit first argument. To declare a static method, use this idiom:

```python
class C:
    @staticmethod
    def f(arg1, arg2, argN): ...
```

Like all decorators, it is also possible to call `staticmethod` as a regular function and do something with its result. This is needed in some cases where you need a reference to a function from a class body and you want to avoid the automatic transformation to instance method. For these cases, use this idiom:

```python
def regular_function():
    ...

class C:
    method = staticmethod(regular_function)
```
