# cmd.Cmd.onecmd()

`>>> cmd.Cmd.onecmd.__doc__`: Interpret the argument as though it had been typed in response to the prompt.

This may be overridden, but should not normally need to be. See the [`precmd()`](/modules/cmd/Cmd/precmd.md) and [`postcmd()`](/modules/cmd/Cmd/postcmd.md) methods for useful execution hooks. The return value is a flag indicating whether interpretation of commands by the interpreter should stop. If there is a `do_*()` method for the command **str**, the return value of that method is returned, otherwise the return value from the [`default()`](/modules/cmd/Cmd/default.md) method is returned.

### Syntax

```python
cmd.Cmd.onecmd(str)
```
