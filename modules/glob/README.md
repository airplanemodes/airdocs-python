# glob

**Unix style pathname pattern expansion.**

> Source code: [`Lib/glob.py`](https://github.com/python/cpython/tree/3.12/Lib/glob.py)

The `glob` module finds all the pathnames matching a specified pattern according to the rules used by the Unix shell, although results are returned in arbitrary order. No tilde expansion is done, but `*`, `?`, and character ranges expressed with `[]` will be correctly matched. This is done by using the [`os.scandir()`](/modules/os/scandir.md) and [`fnmatch.fnmatch()`](/modules/fnmatch/fnmatch.md) functions in concert, and not by actually invoking a subshell.

Note that files beginning with a dot (`.`) can only be matched by patterns that also start with a dot, unlike [`fnmatch.fnmatch()`](/modules/fnmatch/fnmatch.md) or [`pathlib.Path.glob()`](/modules/pathlib/Path/glob.md).

?> For tilde and shell variable expansion, use [`os.path.expanduser()`](/modules/os/path/expanduser.md) and [`os.path.expandvars()`](/modules/os/path/expandvars.md).

For a literal match, wrap the meta-characters in brackets. For example, `'[?]'` matches the character `'?'`.

?> **See also:** The [`pathlib`](/modules/pathlib/) module offers high-level path objects.