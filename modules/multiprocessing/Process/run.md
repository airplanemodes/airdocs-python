# multiprocessing.Process.run()

Method representing the process’s activity.

You may override this method in a subclass. The standard `run()` method invokes the callable object passed to the object’s constructor as the target argument, if any, with sequential and keyword arguments taken from the **args** and **kwargs** arguments, respectively.

Using a list or tuple as the **args** argument passed to `Process` achieves the same effect.

# Syntax

```python
multiprocessing.Process.run()
```