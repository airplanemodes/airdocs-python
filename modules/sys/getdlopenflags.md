# sys.getdlopenflags()

> **Availability:** Unix.

Return the current value of the flags that are used for `dlopen()` calls.

Symbolic names for the flag values can be found in the [`os`](/modules/os/) module (`RTLD_xxx` constants, e.g. `os.RTLD_LAZY`).

### Syntax

```python
sys.getdlopenflags()
```