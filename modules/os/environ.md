# os.environ

A mapping object where keys and values are strings that represent the process environment. For example, `environ['HOME']` is the pathname of your home directory (on some platforms), and is equivalent to `getenv("HOME")` in C.

This mapping is captured the first time the [`os`](/modules/os/) module is imported, typically during Python startup as part of processing `site.py`. Changes to the environment made after this time are not reflected in `os.environ`, except for changes made by modifying `os.environ` directly.

This mapping may be used to modify the environment as well as query the environment. [`putenv()`](/modules/os/putenv.md) will be called automatically when the mapping is modified.

On Unix, keys and values use [`sys.getfilesystemencoding()`](/modules/sys/getfilesystemencoding.md) and `'surrogateescape'` error handler. Use [`environb`](/modules/os/environb.md) if you would like to use a different encoding.

On Windows, the keys are converted to uppercase. This also applies when getting, setting, or deleting an item. For example, `environ['monty'] = 'python'` maps the key `'MONTY'` to the value `'python'`.

?> Calling [`putenv()`](/modules/os/putenv.md) directly does not change `os.environ`, so it’s better to modify `os.environ`.

?> On some platforms, including FreeBSD and macOS, setting `environ` may cause memory leaks. Refer to the system documentation for `putenv()`.

You can delete items in this mapping to unset environment variables. [`unsetenv()`](/modules/os/unsetenv.md) will be called automatically when an item is deleted from `os.environ`, and when one of the `pop()` or `clear()` methods is called.