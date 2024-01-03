# venv

**Creation of virtual environments.**

> Source code: [`Lib/venv/`](https://github.com/python/cpython/tree/3.12/Lib/venv/)  
> **Availability:** not Emscripten, not WASI.

The `venv` module supports creating lightweight “virtual environments”, each with their own independent set of Python packages installed in their [`site`](/modules/site/) directories. A virtual environment is created on top of an existing Python installation, known as the virtual environment’s “base” Python, and may optionally be isolated from the packages in the base environment, so only those explicitly installed in the virtual environment are available.

When used from within a virtual environment, common installation tools such as `pip` will install Python packages into a virtual environment without needing to be told to do so explicitly.

A virtual environment is (amongst other things):

* Used to contain a specific Python interpreter and software libraries and binaries which are needed to support a project (library or application). These are by default isolated from software in other virtual environments and Python interpreters and libraries installed in the operating system.
* Contained in a directory, conventionally either named `venv` or `.venv` in the project directory, or under a container directory for lots of virtual environments, such as `~/.virtualenvs`.
* Not checked into source control systems such as Git.
* Considered as disposable – it should be simple to delete and recreate it from scratch. You don’t place any project code in the environment.
* Not considered as movable or copyable – you just recreate the same environment in the target location.

?> More background on Python virtual environments at [**PEP 405**](https://peps.python.org/pep-0405/).

Creation of virtual environments is done by executing the command `venv`:

```shell
python -m venv .venv
```

Running this command creates the target directory (creating any parent directories that don’t exist already) and places a `pyvenv.cfg` file in it with a `home` key pointing to the Python installation from which the command was run (a common name for the target directory is `.venv`). It also creates a `bin` (or `Scripts` on Windows) subdirectory containing a copy/symlink of the Python binary/binaries (as appropriate for the platform or arguments used at environment creation time). It also creates an (initially empty) `lib/pythonX.Y/site-packages` subdirectory (on Windows, this is `Lib\site-packages`). If an existing directory is specified, it will be re-used.

The created `pyvenv.cfg` file also includes the `include-system-site-packages` key, set to `true` if `venv` is run with the `--system-site-packages` option, `false` otherwise.

Unless the `--without-pip` option is given, `ensurepip` will be invoked to bootstrap `pip` into the virtual environment.

Multiple paths can be given to `venv`, in which case an identical virtual environment will be created, according to the given options, at each provided path.

When a Python interpreter is running from a virtual environment, [`sys.prefix`](/modules/sys/prefix.md) and [`sys.exec_prefix`](/modules/sys/exec_prefix.md) point to the directories of the virtual environment, whereas [`sys.base_prefix`](/modules/sys/base_prefix.md) and [`sys.base_exec_prefix`](/modules/sys/base_exec_prefix.md) point to those of the base Python used to create the environment. It is sufficient to check `sys.prefix != sys.base_prefix` to determine if the current interpreter is running from a virtual environment.

A virtual environment may be “activated” using a script in its binary directory (`bin` on POSIX, `Scripts` on Windows). This will prepend that directory to your `PATH`, so that running python will invoke the environment’s Python interpreter and you can run installed scripts without having to use their full path. The invocation of the activation script is platform-specific (`<venv>` must be replaced by the path to the directory containing the virtual environment):

| Shell                | Command to activate virtual environment |
| -------------------- | --------------------------------------- |
| bash/zsh             | `source <venv>/bin/activate`            |
| fish                 | `source <venv>/bin/activate.fish`       |
| csh/tcsh             | `source <venv>/bin/activate.csh`        |
| PowerShell (POSIX)   | `<venv>/bin/Activate.ps1`               |
| PowerShell (Windows) | `PS C:\> <venv>\Scripts\Activate.ps1`   |
| cmd.exe              | `C:\> <venv>\Scripts\activate.bat`      |

You don’t specifically need to activate a virtual environment, as you can just specify the full path to that environment’s Python interpreter when invoking Python. Furthermore, all scripts installed in the environment should be runnable without activating it.