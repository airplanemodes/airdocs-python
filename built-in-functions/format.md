# format()

Convert a value to a “formatted” representation, as controlled by **format_spec**. The interpretation of **format_spec** will depend on the type of the **value** argument; however, there is a standard formatting syntax that is used by most built-in types: Format Specification Mini-Language.

The default **format_spec** is an empty string which usually gives the same effect as calling `str(value)`.

A call to `format(value, format_spec)` is translated to `type(value).__format__(value, format_spec)` which bypasses the instance dictionary when searching for the value’s `__format__()` method.

### Syntax
```python
format(value, format_spec='')
```

### Examples
Converting IPv4 address string into binary form using `for` and `while` loops:
```python
ip_address = "192.168.55.1"
ip_binary = ip_address.split('.')
for i in range(len(ip_binary)):
    ip_binary[i] = format(int(ip_binary[i]), 'b')
    while len(ip_binary[i]) < 8:
        ip_binary[i] = "0" + ip_binary[i]
print(".".join(ip_binary)) # 11000000.10101000.00110111.00000001
```
---
!> A `TypeError` exception is raised if the method search reaches object and the **format_spec** is non-empty, or if either the **format_spec** or the return value are not strings.