# random.seed()

Initialize the random number generator.

If **a** is omitted or `None`, the current system time is used. If randomness sources are provided by the operating system, they are used instead of the system time (see the [`os.urandom()`](/modules/os/urandom.md) function for details on availability).

If **a** is an [`int`](/built-in-types/int/), it is used directly.

With **version** 2 (the default), a [`str`](/built-in-types/str/), [`bytes`](/built-in-types/bytes/), or [`bytearray`](/built-in-types/bytearray/) object gets converted to an [`int`](/built-in-types/int/) and all of its bits are used.

With **version** 1 (provided for reproducing random sequences from older versions of Python), the algorithm for [`str`](/built-in-types/str/) and [`bytes`](/built-in-types/bytes/) generates a narrower range of seeds.

### Syntax

```python
random.seed(a=None, version=2)
```