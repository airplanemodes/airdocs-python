# -W

Warning control. Python’s warning machinery by default prints warning messages to [`sys.stderr`](/modules/sys/stderr.md).

The simplest settings apply a particular action unconditionally to all warnings emitted by a process (even those that are otherwise ignored by default):

```shell
$ python3 -Wdefault  # Warn once per call location
$ python3 -Werror    # Convert to exceptions
$ python3 -Walways   # Warn every time
$ python3 -Wmodule   # Warn once per calling module
$ python3 -Wonce     # Warn once per Python process
$ python3 -Wignore   # Never warn
```

The action names can be abbreviated as desired and the interpreter will resolve them to the appropriate action name. For example, `-Wi` is the same as `-Wignore`.

The full form of argument is: `action:message:category:module:lineno`.

Empty fields match all values. Trailing empty fields may be omitted. For example `-W ignore::DeprecationWarning` ignores all [`DeprecationWarning`](/exceptions/DeprecationWarning.md) warnings.

The **action** field is as explained above but only applies to warnings that match the remaining fields.

The **message** field must match the whole warning message. This match is case-insensitive.

The category field matches the warning category (ex: [`DeprecationWarning`](/exceptions/DeprecationWarning.md)). This must be a class name. The match test whether the actual warning category of the message is a subclass of the specified warning category.

The **module** field matches the (fully qualified) module name. This match is case-sensitive.

The **lineno** field matches the line number, where zero matches all line numbers and is thus equivalent to an omitted line number.

Multiple `-W` options can be given. When a warning matches more than one option, the action for the last matching option is performed. Invalid `-W` options are ignored (though, a warning message is printed about invalid options when the first warning is issued).

Warnings can also be controlled using the [`PYTHONWARNINGS`](/cli/Environment/PYTHONWARNINGS.md) environment variable and from within a Python program using the [`warnings`](/modules/warnings.md) module. For example, the [`warnings.filterwarnings()`](/modules/warnings/filterwarnings.md) function can be used to use a regular expression on the warning message.

### Syntax

```shell
$ python3 -W
```