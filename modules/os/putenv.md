# os.putenv()

Set the environment variable named **key** to the string **value**.

Such changes to the environment affect subprocesses started with [`system()`](/modules/os/system.md), [`popen()`](/modules/os/popen.md) or [`fork()`](/modules/os/fork.md) and [`execv()`](/modules/os/execv.md).

Assignments to items in [`os.environ`](/modules/os/environ.md) are automatically translated into corresponding calls to `putenv()`. However, calls to `putenv()` don’t update [`os.environ`](/modules/os/environ.md), so it is actually preferable to assign to items of [`os.environ`](/modules/os/environ.md). This also applies to [`getenv()`](/modules/os/getenv.md) and [`getenvb()`](/modules/os/getenvb.md), which respectively use [`os.environ`](/modules/os/environ.md) and [`os.environb`](/modules/os/environb.md) in their implementations.

?> On some platforms, including FreeBSD and macOS, setting `environ` may cause memory leaks. Refer to the system documentation for `putenv()`.

Raises an auditing event `os.putenv` with arguments `key`, `value`.

### Syntax

```python
os.putenv(key, value, /)
```