# print()

Print **objects** to the text stream **file**, separated by **sep** and followed by **end**. **sep**, **end**, **file**, and **flush**, if present, must be given as keyword arguments.

All non-keyword arguments are converted to strings like [`str()`](/built-in-functions/str.md) does and written to the stream, separated by **sep** and followed by **end**. Both **sep** and **end** must be strings. They can also be `None`, which means to use the default values. If no **objects** are given, `print()` will just write **end**.

The **file** argument must be an object with a `write(string)` method. If it is not present or `None`, [`sys.stdout`](/modules/sys/stdout.md) will be used. Since printed arguments are converted to text strings, `print()` cannot be used with binary mode file objects. For these, use `file.write(...)` instead.

Whether the output is buffered is usually determined by **file**, but if the **flush** keyword argument is true, the stream is forcibly flushed.

### Syntax

```python
print(objects)
print(*objects, sep=' ', end='\n', file=None, flush=False)
```

### Examples

Using formatted string:

```python
>>> a = 10
>>> b = 20
>>> print(f'The sum is {a + b}') # The sum is 30
```
