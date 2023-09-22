# -i

When a script is passed as first argument or the [`-c`](/cli/Interface/-c.md) option is used, enter interactive mode after executing the script or the command, even when [`sys.stdin`](/modules/sys/stdin.md) does not appear to be a terminal. The [`PYTHONSTARTUP`](/cli/Environment/PYTHONSTARTUP.md) file is not read.

?> This can be useful to inspect global variables or a stack trace when a script raises an exception.

### Syntax

```bash
$ python3 -i
```