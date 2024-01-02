# -P

Don’t prepend a potentially unsafe path to [`sys.path`](/modules/sys/path.md):

- `python -m module` command line: Don’t prepend the current working directory.
- `python script.py` command line: Don’t prepend the script’s directory. If it’s a symbolic link, resolve symbolic links.
- `python -c code` and `python` (REPL) command lines: Don’t prepend an empty string, which means the current working directory.

?> See also the [`PYTHONSAFEPATH`](/cli/Environment/PYTHONSAFEPATH.md) environment variable, and [`-E`](/cli/Miscellaneous/-E.md) and [`-I`](/cli/Miscellaneous/I.md) (isolated) options.

### Syntax

```shell
$ python3 -P
```