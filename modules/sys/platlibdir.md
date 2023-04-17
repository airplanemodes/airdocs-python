# sys.platlibdir

Name of the platform-specific library directory. It is used to build the path of standard library and the paths of installed extension modules.

It is equal to `"lib"` on most platforms. On Fedora and SuSE, it is equal to `"lib64"` on 64-bit platforms which gives the following `sys.path` paths (where `X.Y` is the Python `major.minor` version):

* `/usr/lib64/pythonX.Y/`: Standard library (like `os.py` of the [`os`](/modules/os/) module).
* `/usr/lib64/pythonX.Y/lib-dynload/`: C extension modules of the standard library (like the [`errno`](/modules/errno/) module, the exact filename is platform specific).
* `/usr/lib/pythonX.Y/site-packages/` (always use `lib`, not `sys.platlibdir`): Third-party modules.
* `/usr/lib64/pythonX.Y/site-packages/`: C extension modules of third-party packages.

### Syntax

```python
sys.platlibdir
```