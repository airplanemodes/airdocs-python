# script

Execute the Python code contained in **script**, which must be a filesystem path (absolute or relative) referring to either a Python file, a directory containing a `__main__.py` file, or a zipfile containing a `__main__.py` file.

If this option is given, the first element of [`sys.argv`](/modules/sys/argv.md) will be the script name as given on the command line.

If the script name refers directly to a Python file, the directory containing that file is added to the start of [`sys.path`](/modules/sys/path.md), and the file is executed as the `__main__` module.

If the script name refers to a directory or zipfile, the script name is added to the start of [`sys.path`](/modules/sys/path.md) and the `__main__.py` file in that location is executed as the `__main__` module.

[`-I`](/cli/Miscellaneous/I.md) option can be used to run the script in isolated mode where [`sys.path`](/modules/sys/path.md) contains neither the script’s directory nor the user’s site-packages directory. All `PYTHON*` environment variables are ignored, too.

If no interface option is given, [`-i`](/cli/Miscellaneous/-i.md) is implied, `sys.argv[0]` is an empty string (`""`) and the current directory will be added to the start of [`sys.path`](/modules/sys/path.md). Also, tab-completion and history editing is automatically enabled, if available on your platform (see Readline configuration).

### Syntax

```shell
$ python3 script
```