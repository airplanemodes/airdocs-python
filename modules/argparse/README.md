# argparse

**Parser for command-line options, arguments and sub-commands.**

> Source code: [`Lib/argparse.py`](https://github.com/python/cpython/tree/3.11/Lib/argparse.py)

The `argparse` module makes it easy to write user-friendly command-line interfaces. The program defines what arguments it requires, and `argparse` will figure out how to parse those out of [`sys.argv`](/modules/sys/argv.md). The `argparse` module also automatically generates help and usage messages. The module will also issue errors when users give the program invalid arguments.