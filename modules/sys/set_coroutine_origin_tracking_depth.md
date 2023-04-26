# sys.set_coroutine_origin_tracking_depth()

Allows enabling or disabling coroutine origin tracking. When enabled, the `cr_origin` attribute on coroutine objects will contain a tuple of (filename, line number, function name) tuples describing the traceback where the coroutine object was created, with the most recent call first. When disabled, `cr_origin` will be `None`.

To enable, pass a **depth** value greater than zero. This sets the number of frames whose information will be captured. To disable, pass set **depth** to zero.

This setting is thread-specific.

### Syntax

```python
sys.set_coroutine_origin_tracking_depth(depth)
```