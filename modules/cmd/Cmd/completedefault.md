# cmd.Cmd.completedefault()

`>>> cmd.Cmd.completedefault.__doc__`: Method called to complete an input line when no command-specific `complete_*()` method is available.

By default, it returns an empty list.

### Syntax

```python
cmd.Cmd.completedefault(text, line, begidx, endidx)
```