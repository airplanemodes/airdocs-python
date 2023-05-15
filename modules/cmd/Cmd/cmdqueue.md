# cmd.Cmd.cmdqueue

A list of queued input lines.

The `cmdqueue` list is checked in [`cmdloop()`](/modules/cmd/Cmd/cmdloop.md) when new input is needed. If it is nonempty, its elements will be processed in order, as if entered at the prompt.

### Syntax

```python
cmd.Cmd.cmdqueue
```
