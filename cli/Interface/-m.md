# -m

Search [`sys.path`](/modules/sys/path.md) for the named module and execute its contents as the `__main__` module.

Since the argument is a **module** name, you must not give a file extension (`.py`). The module name should be a valid absolute Python module name, but the implementation may not always enforce this (e.g. it may allow you to use a name that includes a hyphen).

Package names (including namespace packages) are also permitted. When a package name is supplied instead of a normal module, the interpreter will execute `<pkg>.__main__` as the main module. This behaviour is deliberately similar to the handling of directories and zipfiles that are passed to the interpreter as the script argument.

?> This option cannot be used with built-in modules and extension modules written in C, since they do not have Python module files. However, it can still be used for precompiled modules, even if the original source file is not available.

If this option is given, the first element of [`sys.argv`](/modules/sys/argv.md) will be the full path to the module file (while the module file is being located, the first element will be set to `"-m"`). As with the [`-c`](/cli/Interface/-c.md) option, the current directory will be added to the start of [`sys.path`](/modules/sys/path.md).

[`-I`](/cli/Miscellaneous/I.md) option can be used to run the script in isolated mode where [`sys.path`](/modules/sys/path.md) contains neither the current directory nor the user’s site-packages directory. All `PYTHON*` environment variables are ignored, too.

### Syntax

```shell
python3 -m module
```

### Examples

Many standard library modules contain code that is invoked on their execution as a script. An example is the timeit module:

```shell
python3 -m timeit -s 'setup here' 'benchmarked code here'
python3 -m timeit -h # for details
```