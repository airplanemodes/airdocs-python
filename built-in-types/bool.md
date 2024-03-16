# bool

Boolean values are the two constant objects [`False`](/abstraction/interpreter/False.md) and [`True`](/abstraction/interpreter/True.md).

They are used to represent truth values (although other values can also be considered false or true). In numeric contexts (for example when used as the argument to an arithmetic operator), they behave like the integers `0` and `1`, respectively.

The built-in function [`bool()`](/built-in-functions/bool.md) can be used to convert any value to a Boolean.

The `bool` class is a subclass of [`int`](/built-in-types/int/). It cannot be subclassed further.
