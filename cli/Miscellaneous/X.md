# -X

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

It also allows passing arbitrary values and retrieving them through the [`sys._xoptions`](/modules/sys/_xoptions.md) dictionary.

### Syntax

```shell
$ python3 -X option
```