# cmd.Cmd.cmdloop()

`>>> cmd.Cmd.cmdloop.__doc__`: Repeatedly issue a prompt, accept input, parse an initial prefix off the received input, and dispatch to action methods, passing them the remainder of the line as argument.

The optional argument is a banner or intro string to be issued before the first prompt (this overrides the [`intro`](/modules/cmd/Cmd/intro.md) class attribute).

If the [`readline`](/modules/readline/) module is loaded, input will automatically inherit bash-like history-list editing (e.g. *Control-P* scrolls back to the last command, *Control-N* forward to the next one, *Control-F* moves the cursor to the right non-destructively, *Control-B* moves the cursor to the left non-destructively, etc.).

An end-of-file on input is passed back as the string `'EOF'`.

An interpreter instance will recognize a command name `foo` if and only if it has a method `do_foo()`. As a special case, a line beginning with the character `'?'` is dispatched to the method [`do_help()`](/modules/cmd/Cmd/do_help.md). As another special case, a line beginning with the character `'!'` is dispatched to the method `do_shell()` (if such a method is defined).

This method will return when the [`postcmd()`](/modules/cmd/Cmd/postcmd.md) method returns a true value. The **stop** argument to [`postcmd()`](/modules/cmd/Cmd/postcmd.md) is the return value from the command’s corresponding `do_*()` method.

If completion is enabled, completing commands will be done automatically, and completing of commands args is done by calling `complete_foo()` with arguments **text**, **line**, **begidx**, and **endidx**. **text** is the string prefix we are attempting to match: all returned matches must begin with it. **line** is the current input line with leading whitespace removed, **begidx** and **endidx** are the beginning and ending indexes of the prefix text, which could be used to provide different completion depending upon which position the argument is in.

All subclasses of [`Cmd`](/modules/cmd/Cmd/) inherit a predefined [`do_help()`](/modules/cmd/Cmd/do_help.md). This method, called with an argument `'bar'`, invokes the corresponding method `help_bar()`, and if that is not present, prints the docstring of `do_bar()`, if available. With no argument, [`do_help()`](/modules/cmd/Cmd/do_help.md) lists all available help topics (that is, all commands with corresponding `help_*()` methods or commands that have docstrings), and also lists any undocumented commands.

### Syntax

```python
cmd.Cmd.cmdloop(intro=None)
```