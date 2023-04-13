# os.renames()

Recursive directory or file renaming function.

Works like [`rename()`](/modules/os/rename.md), except creation of any intermediate directories needed to make the new pathname good is attempted first. After the rename, directories corresponding to rightmost path segments of the old name will be pruned away using [`removedirs()`](/modules/os/removedirs.md).

?> This function can fail with the new directory structure made if you lack permissions needed to remove the leaf directory or file.

Raises an auditing event `os.rename` with arguments `src`, `dst`, `src_dir_fd`, `dst_dir_fd`.

### Syntax

```python
os.renames(old, new)
```