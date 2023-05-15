# cmd.Cmd.precmd()

Hook method executed just before the command line **line** is interpreted, but after the input prompt is generated and issued.

This method is a stub in [`Cmd`](/modules/cmd/Cmd/). It exists to be overridden by subclasses. The return value is used as the command which will be executed by the [`onecmd()`](/modules/cmd/Cmd/onecmd.md) method. The `precmd()` implementation may re-write the command or simply return **line** unchanged.

### Syntax

```python
cmd.Cmd.precmd(line)
```