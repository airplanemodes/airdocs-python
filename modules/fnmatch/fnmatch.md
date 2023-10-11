# fnmatch.fnmatch()

Test whether the **filename** string matches the **pattern** string, returning `True` or `False`.

Both parameters are case-normalized using [`os.path.normcase()`](/modules/os/path/normcase.md).

[`fnmatchcase()`](/modules/fnmatch/fnmatchcase.md) can be used to perform a case-sensitive comparison, regardless of whether that’s standard for the operating system.

### Syntax

```python
fnmatch.fnmatch(filename, pattern)
```

### Example

This example will print all file names in the current directory with the extension `.txt`:

```python
import fnmatch
import os

for file in os.listdir('.'):
    if fnmatch.fnmatch(file, '*.txt'):
        print(file)
```