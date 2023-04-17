# sys.setswitchinterval()

Set the interpreter’s thread switch interval (in seconds).

This floating-point value determines the ideal duration of the “timeslices” allocated to concurrently running Python threads. Please note that the actual value can be higher, especially if long-running internal functions or methods are used. Also, which thread becomes scheduled at the end of the interval is the operating system’s decision. The interpreter doesn’t have its own scheduler.

### Syntax

```python
sys.setswitchinterval(interval)
```