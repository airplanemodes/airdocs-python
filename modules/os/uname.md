# os.uname()

> **Availability:** Unix.

Returns information identifying the current operating system. The return value is an object with five attributes:

- `sysname` - operating system name.
- `nodename` - name of machine on network (implementation-defined).
- `release` - operating system release.
- `version` - operating system version.
- `machine` - hardware identifier.

For backwards compatibility, this object is also iterable, behaving like a five-tuple containing `sysname`, `nodename`, `release`, `version`, and `machine` in that order.

?> Some systems truncate `nodename` to 8 characters or to the leading component. A better way to get the hostname is [`socket.gethostname()`](/modules/socket/gethostname.md) or even `socket.gethostbyaddr(socket.gethostname())`.

### Syntax

```python
os.uname()
```