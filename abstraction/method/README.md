# `method`

Methods are functions that are called using the attribute notation. There are two flavors: built-in methods (such as [`append()`](/built-in-types/list/append.md) on [`list`](/built-in-types/list/)) and class instance method. Built-in methods are described with the types that support them.

If you access a method (a function defined in a class namespace) through an instance, you get a special object: *a bound method* (also called instance method) object. When called, it will add the `self` argument to the argument list. Bound methods have two special read-only attributes: `m.__self__` is the object on which the method operates, and `m.__func__` is the function implementing the method. Calling `m(arg-1, arg-2, ..., arg-n)` is completely equivalent to calling `m.__func__(m.__self__, arg-1, arg-2, ..., arg-n)`.

Like function objects, bound method objects support getting arbitrary attributes. However, since method attributes are actually stored on the underlying function object (`method.__func__`), setting method attributes on bound methods is disallowed. Attempting to set an attribute on a method results in an [`AttributeError`](/exceptions/AttributeError.md) being raised. In order to set a method attribute, you need to explicitly set it on the underlying function object:

```python
>>> class C:
...     def method(self):
...         pass
... 
>>> c = C()
>>> c.method.whoami = 'my name is method'  # can't set on the method
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# AttributeError: 'method' object has no attribute 'whoami'
>>> c.method.__func__.whoami = 'my name is method'
>>> c.method.whoami # 'my name is method'
```
