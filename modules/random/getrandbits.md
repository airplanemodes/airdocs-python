# random.getrandbits()

Returns a non-negative Python integer with **k** random bits.

This method is supplied with the MersenneTwister generator and some other generators may also provide it as an optional part of the API. When available, `getrandbits()` enables [`randrange()`](/modules/random/randrange.md) to handle arbitrarily large ranges.

### Syntax

```python
random.getrandbits(k)
```