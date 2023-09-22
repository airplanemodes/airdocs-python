# -v

Print a message each time a module is initialized, showing the place (filename or built-in module) from which it is loaded.

When given twice (`-vv`), print a message for each file that is checked for when searching for a module. Also provides information on module cleanup at exit.

?> See also [`PYTHONVERBOSE`](/cli/Environment/PYTHONVERBOSE.md).

### Syntax

```bash
$ python3 -v
$ python3 -vv
```