# cmd.Cmd()

A `Cmd` instance or subclass instance is a line-oriented interpreter framework. There is no good reason to instantiate `Cmd` itself. Rather, it’s useful as a superclass of an interpreter class you define yourself in order to inherit `Cmd`’s methods and encapsulate action methods.

The optional argument **completekey** is the [`readline`](/modules/readline/) name of a completion key. It defaults to *Tab*. If **completekey** is not `None` and [`readline`](/modules/readline/) is available, command completion is done automatically.

The optional arguments **stdin** and 88 specify the input and output file objects that the `Cmd` instance or subclass instance will use for input and output. If not specified, they will default to [`sys.stdin`](/modules/sys/stdin.md) and [`sys.stdout`](/modules/sys/stdout.md).

If you want a given **stdin** to be used, make sure to set the instance’s [`use_rawinput`](/modules/cmd/Cmd/use_rawinput.md) attribute to `False`, otherwise **stdin** will be ignored.

### Syntax

```python
cmd.Cmd(completekey='tab', stdin=None, stdout=None)
```

### Examples

```python
import cmd

class ExampleShell(cmd.Cmd):
    intro = 'Welcome to the example shell! Type "help" to see a list of commands.'
    prompt = '> '
    
    def do_hello(self, args):
        """Print a greeting."""
        print('Hello, world!')
    
    def do_quit(self, args):
        """Quit the shell."""
        return True

if __name__ == '__main__':
    ExampleShell().cmdloop()
```
