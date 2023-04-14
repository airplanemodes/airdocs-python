# os.fwalk()

> **Availability:** Unix.

This behaves exactly like [`walk()`](/modules/os/walk.md), except that it yields a 4-tuple `(dirpath, dirnames, filenames, dirfd)`, and it supports **dir_fd**.

**dirpath**, **dirnames** and **filenames** are identical to [`walk()`](/modules/os/walk.md) output, and **dir_fd** is a file descriptor referring to the directory **dirpath**.

This function always supports paths relative to directory descriptors and not following symlinks. Note however that, unlike other functions, the `fwalk()` default value for **follow_symlinks** is `False`.

?> Since `fwalk()` yields file descriptors, those are only valid until the next iteration step, so you should duplicate them (e.g. with [`dup()`](/modules/os/dup.md)) if you want to keep them longer.

Raises an auditing event `os.fwalk` with arguments `top`, `topdown`, `onerror`, `follow_symlinks`, `dir_fd`.

### Syntax

```python
os.fwalk(top='.', topdown=True, onerror=None, *, follow_symlinks=False, dir_fd=None)
```

### Examples

This example displays the number of bytes taken by non-directory files in each directory under the starting directory, except that it doesn’t look under any CVS subdirectory:

```python
import os
for root, dirs, files, rootfd in os.fwalk('python/Lib/email'):
    print(root, "consumes", end="")
    print(sum([os.stat(name, dir_fd=rootfd).st_size for name in files]),
          end="")
    print("bytes in", len(files), "non-directory files")
    if 'CVS' in dirs:
        dirs.remove('CVS')  # don't visit CVS directories
```

In the next example, walking the tree bottom-up is essential: [`rmdir()`](/modules/os/rmdir.md) doesn’t allow deleting a directory before the directory is empty:

```python
# Delete everything reachable from the directory named in "top",
# assuming there are no symbolic links.
# CAUTION: This is dangerous! For example, if top == '/', it
# could delete all your disk files.
import os
for root, dirs, files, rootfd in os.fwalk(top, topdown=False):
    for name in files:
        os.unlink(name, dir_fd=rootfd)
    for name in dirs:
        os.rmdir(name, dir_fd=rootfd)
```