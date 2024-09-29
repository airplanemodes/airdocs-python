# pprint.pp()

Prints the formatted representation of **object**, followed by a newline.

This function may be used in the interactive interpreter instead of the [`print()`](/built-in-functions/print.md) function for inspecting values.

?> You can reassign `print = pprint.pp` for use within a scope.

Parameters:

- **object** – The object to be printed.
- **stream** (file-like object | `None`) – A file-like object to which the output will be written by calling its write() method. If `None` (the default), [`sys.stdout`](/modules/sys/stdout.md) is used.
- **indent** ([`int`](/built-in-types/int/)) – The amount of indentation added for each nesting level.
- **width** ([`int`](/built-in-types/int/)) – The desired maximum number of characters per line in the output. If a structure cannot be formatted within the width constraint, a best effort will be made.
- **depth** ([`int`](/built-in-types/int/) | `None`) – The number of nesting levels which may be printed. If the data structure being printed is too deep, the next contained level is replaced by `...`. If `None` (the default), there is no constraint on the depth of the objects being formatted.
- **compact** ([`bool`](/built-in-types/bool.md)) – Control the way long sequences are formatted. If `False` (the default), each item of a sequence will be formatted on a separate line, otherwise as many items as will fit within the width will be formatted on each output line.
- **sort_dicts** ([`bool`](/built-in-types/bool.md)) – If `True`, dictionaries will be formatted with their keys sorted, otherwise they will be displayed in insertion order (the default).
- **underscore_numbers** ([`bool`](/built-in-types/bool.md)) – If `True`, integers will be formatted with the `_` character for a thousands separator, otherwise underscores are not displayed (the default).

### Syntax

```python
pprint.pp(
    object, stream=None, indent=1, width=80, depth=None, *, 
    compact=False, sort_dicts=False, underscore_numbers=False
)
```

### Example

```python
>>> import pprint
>>> stuff = ['spam', 'eggs', 'lumberjack', 'knights', 'ni']
>>> stuff.insert(0, stuff)
>>> pprint.pp(stuff)
# [<Recursion on list with id=...>,
#  'spam',
#  'eggs',
#  'lumberjack',
#  'knights',
#  'ni']
```
