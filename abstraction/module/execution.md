# Execution

When you run a Python module with:

```shell
python fibo.py <arguments>
```

the code in the module will be executed, just as if you imported it, but with the [`__name__`](/abstraction/module/__name__.md) set to `"__main__"`. That means that by adding this code at the end of your module:

```python
if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
```

you can make the file usable as a script as well as an importable module, because the code that parses the command line only runs if the module is executed as the “main” file:

```shell
python fibo.py 50
# 0 1 1 2 3 5 8 13 21 34
```

If the module is imported, the code is not run:

```python
>>> import fibo
>>> 
```

This is often used either to provide a convenient user interface to a module, or for testing purposes (running the module as a script executes a test suite).
