# -c

Execute the Python code in **command**.

**command** can be one or more statements separated by newlines, with significant leading whitespace as in normal module code.

If this option is given, the first element of [`sys.argv`](/modules/sys/argv.md) will be `"-c"` and the current directory will be added to the start of [`sys.path`](/modules/sys/path.md) (allowing modules in that directory to be imported as top level modules).

### Syntax

```bash
$ python3 -c command
```