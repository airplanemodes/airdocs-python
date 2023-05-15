# cmd.Cmd.use_rawinput

A flag, defaulting to true. If true, [`cmdloop()`](/modules/cmd/Cmd/cmdloop.md) uses [`input()`](/built-in-functions/input.md) to display a prompt and read the next command. If false, `sys.stdout.write()` and `sys.stdin.readline()` are used (this means that by importing readline, on systems that support it, the interpreter will automatically support Emacs-like line editing and command-history keystrokes).

### Syntax

```python
cmd.Cmd.use_rawinput
```