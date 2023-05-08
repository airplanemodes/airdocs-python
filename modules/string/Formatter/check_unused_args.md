# string.Formatter.check_unused_args()

Implement checking for unused arguments if desired. The arguments to this function is the set of all argument keys that were actually referred to in the format string (integers for positional arguments, and strings for named arguments), and a reference to the **args** and **kwargs** that was passed to [`vformat()`](/modules/string/Formatter/vformat.md). The set of unused args can be calculated from these parameters. 

`check_unused_args()` is assumed to raise an exception if the check fails.

### Syntax

```python
string.Formatter.check_unused_args(used_args, args, kwargs)
```