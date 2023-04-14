# os.times()

> **Availability:** Unix, Windows.

Returns the current global process times. The return value is an object with five attributes:

* `user` - user time.
* `system` - system time.
* `children_user` - user time of all child processes.
* `children_system` - system time of all child processes.
* `elapsed` - elapsed real time since a fixed point in the past.

For backwards compatibility, this object also behaves like a five-tuple containing `user`, `system`, `children_user`, `children_system`, and `elapsed` in that order.

### Syntax

```python
os.times()
```