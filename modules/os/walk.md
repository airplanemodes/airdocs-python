# os.walk()

Generate the file names in a directory tree by walking the tree either top-down or bottom-up. For each directory in the tree rooted at directory **top** (including **top** itself), it yields a 3-tuple `(dirpath, dirnames, filenames)`.

- **dirpath** is a string, the path to the directory.
- **dirnames** is a list of the names of the subdirectories in **dirpath** (including symlinks to directories, and excluding `'.'` and `'..'`).
- **filenames** is a list of the names of the non-directory files in **dirpath**.

Note that the names in the lists contain no path components. To get a full path (which begins with **top**) to a file or directory in **dirpath**, do `os.path.join(dirpath, name)`. Whether or not the lists are sorted depends on the file system. If a file is removed from or added to the **dirpath** directory during generating the lists, whether a name for that file be included is unspecified.

If optional argument **topdown** is `True` or not specified, the triple for a directory is generated before the triples for any of its subdirectories (directories are generated top-down). If **topdown** is `False`, the triple for a directory is generated after the triples for all of its subdirectories (directories are generated bottom-up). No matter the value of **topdown**, the list of subdirectories is retrieved before the tuples for the directory and its subdirectories are generated.

When **topdown** is `True`, the caller can modify the dirnames list in-place (perhaps using [`del`](/statements/del.md) or slice assignment), and `walk()` will only recurse into the subdirectories whose names remain in **dirnames**. This can be used to prune the search, impose a specific order of visiting, or even to inform `walk()` about directories the caller creates or renames before it resumes `walk()` again. Modifying **dirnames** when **topdown** is `False` has no effect on the behavior of the walk, because in bottom-up mode the directories in **dirnames** are generated before **dirpath** itself is generated.

By default, errors from the [`scandir()`](/modules/os/scandir.md) call are ignored. If optional argument **onerror** is specified, it should be a function. It will be called with one argument, an [`OSError`](/exceptions/OSError.md) instance. It can report the error to continue with the walk, or raise the exception to abort the walk. Note that the filename is available as the `filename` attribute of the exception object.

By default, `walk()` will not walk down into symbolic links that resolve to directories. Set **followlinks** to `True` to visit directories pointed to by symlinks, on systems that support them.

?> Be aware that setting **followlinks** to `True` can lead to infinite recursion if a link points to a parent directory of itself. `walk()` does not keep track of the directories it visited already.

?> If you pass a relative pathname, don’t change the current working directory between resumptions of `walk()`. `walk()` never changes the current directory, and assumes that its caller doesn’t either.

Raises an auditing event `os.walk` with arguments `top`, `topdown`, `onerror`, `followlinks`.

### Syntax

```python
os.walk(top, topdown=True, onerror=None, followlinks=False)
```

### Examples

This example displays the number of bytes taken by non-directory files in each directory under the starting directory, except that it doesn’t look under any CVS subdirectory:

```python
import os
from os.path import join, getsize
for root, dirs, files in os.walk('python/Lib/email'):
    print(root, "consumes", end=" ")
    print(sum(getsize(join(root, name)) for name in files), end=" ")
    print("bytes in", len(files), "non-directory files")
    if 'CVS' in dirs:
        dirs.remove('CVS')  # don't visit CVS directories
```

In the next example (simple implementation of [`shutil.rmtree()`](/modules/shutil/rmtree.md)), walking the tree bottom-up is essential, [`rmdir()`](/modules/os/rmdir.md) doesn’t allow deleting a directory before the directory is empty:

```python
# Delete everything reachable from the directory named in "top",
# assuming there are no symbolic links.
# CAUTION:  This is dangerous!  For example, if top == '/', it
# could delete all your disk files.
import os
for root, dirs, files in os.walk(top, topdown=False):
    for name in files:
        os.remove(os.path.join(root, name))
    for name in dirs:
        os.rmdir(os.path.join(root, name))
```