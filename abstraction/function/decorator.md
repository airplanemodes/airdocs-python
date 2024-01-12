# Decorator

```python
from time import perf_counter_ns

def perf(func):
    def wrapper():
        measure_start = perf_counter_ns()
        func()
        measure_end = perf_counter_ns() - measure_start
        print(f"{func.__name__} took {measure_end} nanoseconds to run.")
    return wrapper

@perf
def timer_test():
    i = 0
    while (i < 1000):
        i += 1

timer_test() # timer_test took 36959 nanoseconds to run.
```