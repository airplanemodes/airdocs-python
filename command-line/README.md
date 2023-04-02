# Command line

When invoking Python, you may specify any of these options:
```
python3 [-bBdEhiIOqsSuvVWx?] [-c command | -m module-name | script | - ] [args]
```

The most common use case is, of course, a simple invocation of a script:
```
python3 myscript.py
```

## Interface options
The interpreter interface resembles that of the UNIX shell, but provides some additional methods of invocation:
- When called with standard input connected to a tty device, it prompts for commands and executes them until an EOF (an end-of-file character, you can produce that with `Ctrl-D` on UNIX or `Ctrl-Z`, `Enter` on Windows) is read.
- When called with a file name argument or with a file as standard input, it reads and executes a script from that file.
- When called with a directory name argument, it reads and executes an appropriately named script from that directory.
- When called with `-c command`, it executes the Python statement(s) given as **command**. Here **command** may contain multiple statements separated by newlines. Leading whitespace is significant in Python statements!
- When called with `-m module-name`, the given module is located on the Python module path and executed as a script.

In non-interactive mode, the entire input is parsed before it is executed.

An interface option terminates the list of options consumed by the interpreter, all consecutive arguments will end up in `sys.argv` – note that the first element, subscript zero (`sys.argv[0]`), is a string reflecting the program’s source.

### -c command
Execute the Python code in **command**. **command** can be one or more statements separated by newlines, with significant leading whitespace as in normal module code.

If this option is given, the first element of `sys.argv` will be `"-c"` and the current directory will be added to the start of `sys.path` (allowing modules in that directory to be imported as top level modules).

### -m module
Search `sys.path` for the named module and execute its contents as the `__main__` module.

Since the argument is a **module** name, you must not give a file extension (`.py`). The module name should be a valid absolute Python module name, but the implementation may not always enforce this (e.g. it may allow you to use a name that includes a hyphen).

Package names (including namespace packages) are also permitted. When a package name is supplied instead of a normal module, the interpreter will execute `<pkg>.__main__` as the main module. This behaviour is deliberately similar to the handling of directories and zipfiles that are passed to the interpreter as the script argument.

?> This option cannot be used with built-in modules and extension modules written in C, since they do not have Python module files. However, it can still be used for precompiled modules, even if the original source file is not available.

If this option is given, the first element of `sys.argv` will be the full path to the module file (while the module file is being located, the first element will be set to `"-m"`). As with the [`-c`](/command-line/?id=-c-ltcommandgt) option, the current directory will be added to the start of `sys.path`.

[`-I`](/command-line/?id=-i-1) option can be used to run the script in isolated mode where `sys.path` contains neither the current directory nor the user’s site-packages directory. All `PYTHON*` environment variables are ignored, too.

Many standard library modules contain code that is invoked on their execution as a script. An example is the timeit module:
```
python3 -m timeit -s 'setup here' 'benchmarked code here'
python3 -m timeit -h # for details
```

### script
Execute the Python code contained in **script**, which must be a filesystem path (absolute or relative) referring to either a Python file, a directory containing a `__main__.py` file, or a zipfile containing a `__main__.py` file.

If this option is given, the first element of sys.argv will be the script name as given on the command line.

If the script name refers directly to a Python file, the directory containing that file is added to the start of `sys.path`, and the file is executed as the `__main__` module.

If the script name refers to a directory or zipfile, the script name is added to the start of `sys.path` and the `__main__.py` file in that location is executed as the `__main__` module.

[`-I`](/command-line/?id=-i-1) option can be used to run the script in isolated mode where `sys.path` contains neither the script’s directory nor the user’s site-packages directory. All `PYTHON*` environment variables are ignored, too.

If no interface option is given, [`-i`](/command-line/?id=-i) is implied, `sys.argv[0]` is an empty string (`""`) and the current directory will be added to the start of `sys.path`. Also, tab-completion and history editing is automatically enabled, if available on your platform (see Readline configuration).

## Generic options

### --help
```
python3 --help
python3 -h
```
Print a short description of all command line options and corresponding environment variables and exit.

### --help-env
Print a short description of Python-specific environment variables and exit.

### --help-xoptions
Print a description of implementation-specific [`-X`](/command-line/?id=-x-1) options and exit.

### --help-all
Print complete usage information and exit.

### --version
```
python3 --version
python3 --V
python3 --VV
```
Print the Python version number and exit. When given twice (`-VV`), print more information about the build.

## Miscellaneous options

### -b
Issue a warning when comparing [`bytes`](/built-in-types/bytes.md) or [`bytearray`](/built-in-types/bytearray.md) with [`str`](/built-in-types/str.md) or [`bytes`](/built-in-types/bytes.md) with [`int`](/built-in-types/int.md). Issue an error when the option is given twice (`-bb`).

### -B
If given, Python won’t try to write `.pyc` files on the import of source modules. 

### --check-hash-based-pycs
```
python3 --check-hash-based-pycs [default | always | never]
```
Control the validation behavior of hash-based `.pyc` files. When set to **default**, checked and unchecked hash-based bytecode cache files are validated according to their default semantics. When set to **always**, all hash-based `.pyc` files, whether checked or unchecked, are validated against their corresponding source file. When set to **never**, hash-based `.pyc` files are not validated against their corresponding source files.

The semantics of timestamp-based `.pyc` files are unaffected by this option.

### -d
Turn on parser debugging output (for expert only, depending on compilation options).

### -E
Ignore all `PYTHON*` environment variables, e.g. `PYTHONPATH` and `PYTHONHOME`, that might be set.

### -i
When a script is passed as first argument or the [`-c`](/command-line/?id=-c-command) option is used, enter interactive mode after executing the script or the command, even when `sys.stdin` does not appear to be a terminal. The `PYTHONSTARTUP` file is not read.

?> This can be useful to inspect global variables or a stack trace when a script raises an exception.

### -I
Run Python in isolated mode. This also implies [`-E`](/command-line/?id=-e), [`-P`](/command-line/?id=-p) and [`-s`](/command-line/?id=-s) options.

In isolated mode sys.path contains neither the script’s directory nor the user’s site-packages directory. All `PYTHON*` environment variables are ignored, too. Further restrictions may be imposed to prevent the user from injecting malicious code.

### -O
Remove assert statements and any code conditional on the value of `__debug__`. Augment the filename for compiled (bytecode) files by adding `.opt-1` before the `.pyc` extension.

### -OO
Do [`-O`](/command-line/?id=-o) and also discard docstrings. Augment the filename for compiled (bytecode) files by adding `.opt-2` before the `.pyc` extension

### -P
Don’t prepend a potentially unsafe path to `sys.path`:

- `python -m module` command line: Don’t prepend the current working directory.
- `python script.py` command line: Don’t prepend the script’s directory. If it’s a symbolic link, resolve symbolic links.
- `python -c code` and `python` (REPL) command lines: Don’t prepend an empty string, which means the current working directory.

?> See also the `PYTHONSAFEPATH` environment variable, and [`-E`](/command-line/?id=-e) and [`-I`](/command-line/?id=-i-1) (isolated) options.

### -q
Don’t display the copyright and version messages even in interactive mode.

### -R
Turn on hash randomization. This option only has an effect if the `PYTHONHASHSEED` environment variable is set to `0`, since hash randomization is enabled by default.

On previous versions of Python, this option turns on hash randomization, so that the `__hash__()` values of str and bytes objects are “salted” with an unpredictable random value. Although they remain constant within an individual Python process, they are not predictable between repeated invocations of Python.

Hash randomization is intended to provide protection against a denial-of-service caused by carefully chosen inputs that exploit the worst case performance of a dict construction, O(n2) complexity. See http://www.ocert.org/advisories/ocert-2011-003.html for details.

`PYTHONHASHSEED` allows you to set a fixed value for the hash seed secret.

### -s
Don’t add the `user site-packages directory` to `sys.path`.

### -S
Disable the import of the module [`site`](/modules/site.md) and the site-dependent manipulations of `sys.path` that it entails. Also disable these manipulations if site is explicitly imported later (call `site.main()` if you want them to be triggered).

### -u
Force the stdout and stderr streams to be unbuffered. This option has no effect on the stdin stream.

?> See also `PYTHONUNBUFFERED`.

### -v
Print a message each time a module is initialized, showing the place (filename or built-in module) from which it is loaded. When given twice (`-vv`), print a message for each file that is checked for when searching for a module. Also provides information on module cleanup at exit.

?> See also `PYTHONVERBOSE`.

### -W
Warning control. Python’s warning machinery by default prints warning messages to `sys.stderr`.

The simplest settings apply a particular action unconditionally to all warnings emitted by a process (even those that are otherwise ignored by default):

```
python3 -Wdefault  # Warn once per call location
python3 -Werror    # Convert to exceptions
python3 -Walways   # Warn every time
python3 -Wmodule   # Warn once per calling module
python3 -Wonce     # Warn once per Python process
python3 -Wignore   # Never warn
```

The action names can be abbreviated as desired and the interpreter will resolve them to the appropriate action name. For example, `-Wi` is the same as `-Wignore`.

The full form of argument is: `action:message:category:module:lineno`.

Empty fields match all values. Trailing empty fields may be omitted. For example `-W ignore::DeprecationWarning` ignores all [`DeprecationWarning`](/exceptions/DeprecationWarning.md) warnings.

The **action** field is as explained above but only applies to warnings that match the remaining fields.

The **message** field must match the whole warning message. This match is case-insensitive.

The category field matches the warning category (ex: [`DeprecationWarning`](/exceptions/DeprecationWarning.md)). This must be a class name. The match test whether the actual warning category of the message is a subclass of the specified warning category.

The **module** field matches the (fully qualified) module name. This match is case-sensitive.

The **lineno** field matches the line number, where zero matches all line numbers and is thus equivalent to an omitted line number.

Multiple `-W` options can be given. When a warning matches more than one option, the action for the last matching option is performed. Invalid `-W` options are ignored (though, a warning message is printed about invalid options when the first warning is issued).

Warnings can also be controlled using the `PYTHONWARNINGS` environment variable and from within a Python program using the [`warnings`](/modules/warnings.md) module. For example, the `warnings.filterwarnings()` function can be used to use a regular expression on the warning message.

### -x
Skip the first line of the source, allowing use of non-Unix forms of `#!cmd`. This is intended for a DOS specific hack only.

### -X
Reserved for various implementation-specific options. CPython currently defines the following possible values:
- `-X faulthandler` to enable faulthandler.
- `-X showrefcount` to output the total reference count and number of used memory blocks when the program finishes or after each statement in the interactive interpreter. This only works on debug builds.
- `-X tracemalloc` to start tracing Python memory allocations using the [`tracemalloc`](/modules/tracemalloc.md) module. By default, only the most recent frame is stored in a traceback of a trace. Use `-X tracemalloc=NFRAME` to start tracing with a traceback limit of **NFRAME** frames.
- `-X int_max_str_digits` configures the integer string conversion length limitation.
- `-X importtime` to show how long each import takes. It shows module name, cumulative time (including nested imports) and self time (excluding nested imports). Note that its output may be broken in multi-threaded application. Typical usage is `python3 -X importtime -c 'import asyncio'`.
- `-X dev`: enable Python Development Mode, introducing additional runtime checks that are too expensive to be enabled by default.
- `-X utf8` enables the Python UTF-8 Mode. `-X utf8=0` explicitly disables Python UTF-8 Mode (even when it would otherwise activate automatically).
- `-X pycache_prefix=PATH` enables writing `.pyc` files to a parallel tree rooted at the given directory instead of to the code tree.
- `-X warn_default_encoding` issues a [`EncodingWarning`](/exceptions/EncodingWarning.md) when the locale-specific default encoding is used for opening files.
- `-X no_debug_ranges` disables the inclusion of the tables mapping extra location information (end line, start column offset and end column offset) to every instruction in code objects. This is useful when smaller code objects and pyc files are desired as well as suppressing the extra visual location indicators when the interpreter displays tracebacks.
- `-X frozen_modules` determines whether or not frozen modules are ignored by the import machinery. A value of “on” means they get imported and “off” means they are ignored. The default is “on” if this is an installed Python (the normal case). If it’s under development (running from the source tree) then the default is “off”. Note that the “importlib_bootstrap” and “importlib_bootstrap_external” frozen modules are always used, even if this flag is set to “off”.

It also allows passing arbitrary values and retrieving them through the `sys._xoptions` dictionary.

### -J
Reserved for use by Jython.

## Environment variables

### PYTHONHOME
### PYTHONPATH
### PYTHONSAFEPATH
### PYTHONPLATLIBDIR
### PYTHONSTARTUP
### PYTHONOPTIMIZE
### PYTHONBREAKPOINT
### PYTHONDEBUG
### PYTHONINSPECT
### PYTHONUNBUFFERED
### PYTHONVERBOSE
### PYTHONCASEOK
### PYTHONDONTWRITEBYTECODE
### PYTHONPYCACHEPREFIX
### PYTHONHASHSEED
### PYTHONINTMAXSTRDIGITS
### PYTHONIOENCODING
### PYTHONNOUSERSITE
### PYTHONUSERBASE
### PYTHONEXECUTABLE
### PYTHONWARNINGS
### PYTHONFAULTHANDLER
### PYTHONTRACEMALLOC
### PYTHONPROFILEIMPORTTIME
### PYTHONASYNCIODEBUG
### PYTHONMALLOC
### PYTHONMALLOCSTATS
### PYTHONLEGACYWINDOWSFSENCODING
### PYTHONLEGACYWINDOWSSTDIO
### PYTHONCOERCECLOCALE
### PYTHONDEVMODE
### PYTHONUTF8
### PYTHONWARNDEFAULTENCODING
### PYTHONNODEBUGRANGES
### PYTHONTHREADDEBUG
### PYTHONDUMPREFS
### PYTHONDUMPREFSFILE=FILENAME