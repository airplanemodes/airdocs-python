# glob.glob()

Return a possibly empty list of path names that match **pathname**, which must be a string containing a path specification.

**pathname** can be either absolute (like `/usr/src/Python-1.5/Makefile`) or relative (like `../../Tools/*/*.gif`), and can contain shell-style wildcards. Broken symlinks are included in the results (as in the shell). Whether or not the results are sorted depends on the file system. If a file that satisfies conditions is removed or added during the call of this function, whether a path name for that file will be included is unspecified.

If **root_dir** is not `None`, it should be a path-like object specifying the root directory for searching. It has the same effect on `glob()` as changing the current directory before calling it. If **pathname** is relative, the result will contain paths relative to **root_dir**.

This function can support paths relative to directory descriptors with the **dir_fd** parameter.

If **recursive** is true, the pattern “`**`” will match any files and zero or more directories, subdirectories and symbolic links to directories. If the pattern is followed by an [`os.sep`](/modules/os/sep.md) or [`os.altsep`](/modules/os/altsep.md) then files will not match.

If **include_hidden** is true, “`**`” pattern will match hidden directories.

Raises an auditing event `glob.glob` with **arguments** **pathname**, **recursive**.

Raises an auditing event `glob.glob/2` with **arguments** **pathname**, **recursive**, **root_dir**, **dir_fd**.

?> Using the “`**`” pattern in large directory trees may consume an inordinate amount of time.

### Syntax

```python
glob.glob(pathname, *, root_dir=None, dir_fd=None, recursive=False, include_hidden=False)
```

### Examples

For example, consider a directory containing the following files: `1.gif`, `2.txt`, `card.gif` and a subdirectory sub which contains only the `file 3.txt`. `glob()` will produce the following results. Notice how any leading components of the path are preserved.

```python
import glob
glob.glob('./[0-9].*') # ['./1.gif', './2.txt']
glob.glob('*.gif') # ['1.gif', 'card.gif']
glob.glob('?.gif') # ['1.gif']
glob.glob('**/*.txt', recursive=True) # ['2.txt', 'sub/3.txt']
glob.glob('./**/', recursive=True) # ['./', './sub/']
```

If the directory contains files starting with `.` they won’t be matched by default. For example, consider a directory containing `card.gif` and `.card.gif`:

```python
import glob
glob.glob('*.gif') # ['card.gif']
glob.glob('.c*') # ['.card.gif']
```