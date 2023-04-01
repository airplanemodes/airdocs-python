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

### -c
### -m
### script

## Generic options

### --help
### --help-env
### --help-xoptions
### --help-all
### --version

## Miscellaneous options

### -b
### -B
### --check-hash-based-pycs
### -d
### -E
### -i
### -I
### -O
### -OO
### -P
### -q
### -R
### -s
### -S
### -u
### -v
### -W
### -x
### -X
### -J

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