# sys.setdlopenflags()

> **Availability:** Unix.

Set the flags used by the interpreter for `dlopen()` calls, such as when the interpreter loads extension modules. Among other things, this will enable a lazy resolving of symbols when importing a module, if called as `sys.setdlopenflags(0)`. To share symbols across extension modules, call as `sys.setdlopenflags(os.RTLD_GLOBAL)`. Symbolic names for the flag values can be found in the [`os`](/modules/os/) module (`RTLD_xxx` constants, e.g. os.`RTLD_LAZY`).

### Syntax

```python
sys.setdlopenflags(n)
```