# sys.argv

The list of command line arguments passed to a Python script.

`argv[0]` is the script name (it is operating system dependent whether this is a full pathname or not).

If the command was executed using the `-c` command line option to the interpreter, `argv[0]` is set to the string `'-c'`. If no script name was passed to the Python interpreter, `argv[0]` is the empty string.

To loop over the standard input, or the list of files given on the command line, see the [`fileinput`](/modules/fileinput/) module.

See also [`sys.orig_argv`](/modules/sys/orig_argv.md).

?> On Unix, command line arguments are passed by bytes from OS. Python decodes them with filesystem encoding and “surrogateescape” error handler. When you need original bytes, you can get it by `[os.fsencode(arg) for arg in sys.argv]`.

### Syntax

```python
sys.argv
```