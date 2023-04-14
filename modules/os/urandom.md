# os.urandom()

Return a bytestring of size random bytes suitable for cryptographic use.

This function returns random bytes from an OS-specific randomness source. The returned data should be unpredictable enough for cryptographic applications, though its exact quality depends on the OS implementation.

On Linux, if the `getrandom()` syscall is available, it is used in blocking mode: block until the system urandom entropy pool is initialized (128 bits of entropy are collected by the kernel). See the PEP 524 for the rationale. On Linux, the [`getrandom()`](/modules/os/getrandom.md) function can be used to get random bytes in non-blocking mode (using the `GRND_NONBLOCK` flag) or to poll until the system urandom entropy pool is initialized.

On a Unix-like system, random bytes are read from the `/dev/urandom` device. If the `/dev/urandom` device is not available or not readable, the [`NotImplementedError`](/exceptions/NotImplementedError.md) exception is raised.

On Windows, it will use `BCryptGenRandom()`.

?> **See also:** The [`secrets`](/modules/secrets/) module provides higher level functions. For an easy-to-use interface to the random number generator provided by your platform, please see [`random.SystemRandom`](/modules/random/SystemRandom.md).

### Syntax

```python
os.urandom(size, /)
```