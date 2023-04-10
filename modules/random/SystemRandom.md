# random.SystemRandom()

Class that uses the [`os.urandom()`](/modules/os/urandom.md) function for generating random numbers from sources provided by the operating system.

Not available on all systems. Does not rely on software state, and sequences are not reproducible. Accordingly, the [`seed()`](/modules/random/seed.md) method has no effect and is ignored. The [`getstate()`](/modules/random/getstate.md) and [`setstate()`](/modules/random/setstate.md) methods raise [`NotImplementedError`](/exceptions/NotImplementedError.md) if called.

### Syntax

```python
random.SystemRandom()
random.SystemRandom(seed)
```