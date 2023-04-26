# sys.thread_info

A named tuple holding information about the thread implementation.

**name**  
Name of the thread implementation:

* `'nt'`: Windows threads.
* `'pthread'`: POSIX threads.
* `'pthread-stubs'`: stub POSIX threads (on WebAssembly platforms without threading support).
* `'solaris'`: Solaris threads.

**lock**  
Name of the lock implementation:

* `'semaphore'`: a lock uses a semaphore.
* `'mutex+cond'`: a lock uses a mutex and a condition variable.
* `None` if this information is unknown.

**version**  
Name and version of the thread library. It is a string, or `None` if this information is unknown.

### Syntax

```python
sys.thread_info
```