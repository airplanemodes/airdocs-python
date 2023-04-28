# cmd.Cmd.postcmd()

`>>> cmd.Cmd.postcmd.__doc__`: Hook method executed just after a command dispatch is finished.

This method is a stub in [`Cmd`](/modules/cmd/Cmd/). It exists to be overridden by subclasses. **line** is the command line which was executed, and **stop** is a flag which indicates whether execution will be terminated after the call to `postcmd()`. This will be the return value of the [`onecmd()`](/modules/cmd/Cmd/onecmd.md) method. The return value of this method will be used as the new value for the internal flag which corresponds to **stop**. Returning false will cause interpretation to continue.

### Syntax

```python
cmd.Cmd.postcmd(stop. line)
```
