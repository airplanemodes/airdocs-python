# Modules

### Text processing services
- [`string`](/modules/string.md) - Common string operations.
- [`re`](/modules/re.md) - Regular expression operations.
- [`difflib`](/modules/difflib.md) - Helpers for computing deltas.
- [`textwrap`](/modules/textwrap.md) - Text wrapping and filling.
- [`unicodedata`](/modules/unicodedata.md) - Unicode database.
- [`stringprep`](/modules/stringprep.md) - Internet string preparation.
- [`readline`](/modules/readline.md) - GNU readline interface.
- [`rlcompleter`](/modules/rlcompleter.md) - Completion function for GNU readline.

### Binary data services
- [`struct`](/modules/struct.md) - Interpret bytes as packed binary data.
- [`codecs`](/modules/codecs.md) - Codec registry and base classes.

### Data types
- [`datetime`](/modules/datetime.md) - Basic date and time types.
- [`zoneinfo`](/modules/zoneinfo.md) - IANA time zone support.
- [`calendar`](/modules/calendar.md) - General calendar-related functions.
- [`collections`](/modules/collections.md) - Container data types.
- [`heapq`](/modules/heapq.md) - Heap queue algorithm.
- [`array`](/modules/array.md) - Efficient arrays of numeric values.
- [`weakref`](/modules/weakref.md) - Weak references.
- [`types`](/modules/types.md) - Dynamic type creation and names for built-in types.
- [`copy`](/modules/copy.md) - Shallow and deep copy operations.
- [`pprint`](/modules/pprint.md) - Data pretty printer.
- [`reprlib`](/modules/reprlib.md) - Alternate [`repr()`](/built-in-functions/repr.md) implementation.
- [`enum`](/modules/enum.md) - Support for enumerations.
- [`graphlib`](/modules/graphlib.md) - Functionality to operate with graph-like structures.

### Numeric and mathematical modules
- [`numbers`](/modules/numbers.md) — Numeric abstract base classes.
- [`math`](/modules/math.md) — Mathematical functions.
- [`cmath`](/modules/cmath.md) — Mathematical functions for complex numbers.
- [`decimal`](/modules/decimal.md) — Decimal fixed point and floating point arithmetic.
- [`fractions`](/modules/fractions.md) — Rational numbers.
- [`random`](/modules/random.md) — Generate pseudo-random numbers.
- [`statistics`](/modules/statistics.md) — Mathematical statistics functions.

### Functional programming modules
- [`itertools`](/modules/itertools.md) - Functions creating iterators for efficient looping.
- [`functools`](/modules/functools.md) - Higher-order functions and operations on callable objects.
- [`operator`](/modules/operator.md) - Standard operators as functions.

### File and directory access
- [`pathlib`](/modules/pathlib.md) - Object-oriented filesystem paths.
- [`fileinput`](/modules/fileinput.md) - Iterate over lines from multiple input streams.
- [`stat`](/modules/stat.md) - Interpreting [`stat()`](/built-in-functions/stat.md) results.
- [`filecmp`](/modules/filecmp.md) - File and directory comparisons.
- [`tempfile`](/modules/tempfile.md) - Generate temporary files and directories.
- [`glob`](/modules/glob.md) - Unix style pathname pattern expansion.
- [`fnmatch`](/modules/fnmatch.md) - Unix filename pattern matching.
- [`linecache`](/modules/linecache.md) - Random access to text lines.
- [`shutil`](/modules/shutil.md) - High-level file operations.

### Data persistence
- [`pickle`](/modules/pickle.md) - Python object serialization.
- [`copyreg`](/modules/copyreg.md) - Register [`pickle`](/modules/pickle.md) support functions.
- [`shelve`](/modules/shelve.md) - Python object persistence.
- [`marshal`](/modules/marshal.md) - Internal Python object serialization.
- [`dbm`](/modules/dbm.md) - Interfaces to Unix “databases”.
- [`sqlite3`](/modules/sqlite3.md) - DB-API 2.0 interface for SQLite databases.

### Data compression and archiving
- [`zlib`](/modules/zlib.md) - Compression compatible with gzip.
- [`gzip`](/modules/gzip.md) - Support for gzip files.
- [`bz2`](/modules/bz2.md) - Support for bzip2 compression.
- [`lzma`](/modules/lzma.md) - Compression using the LZMA algorithm.
- [`zipfile`](/modules/zipfile.md) - Work with ZIP archives.
- [`tarfile`](/modules/tarfile.md) - Read and write tar archive files.

### File formats
- [`csv`](/modules/csv.md) - CSV File Reading and Writing.
- [`configparser`](/modules/configparser.md) - Configuration file parser.
- [`tomlib`](/modules/tomlib.md) - Parse TOML files.
- [`netrc`](/modules/netrc.md) - netrc file processing.
- [`plistlib`](/modules/plistlib.md) - Generate and parse Apple .plist files.

### Cryptographic services
- [`hashlib`](/modules/hashlib.md) - Secure hashes and message digests.
- [`hmac`](/modules/hmac.md) - Keyed-hashing for message authentication.
- [`secrets`](/modules/secrets.md) - Generate secure random numbers for managing secrets.

### Generic operating system services
- [`os`](/modules/os.md) - Miscellaneous operating system interfaces.
- [`io`](/modules/io.md) - Core tools for working with streams.
- [`time`](/modules/time.md) - Time access and conversions.
- [`argparser`](/modules/argparser.md) - Parser for command-line options, arguments and sub-commands.
- [`getopt`](/modules/getopt.md) - C-style parser for command line options.
- [`logging`](/modules/logging.md) - Logging facility for Python.
- [`getpass`](/modules/getpass.md) - Portable password input.
- [`curses`](/modules/curses.md) - Terminal handling for character-cell displays.
- [`platform`](/modules/platform.md) - Access to underlying platform’s identifying data.
- [`errno`](/modules/errno.md) - Standard errno system symbols.
- [`ctypes`](/modules/ctypes.md) - A foreign function library for Python.

### Concurrent execution
- [`threading`](/modules/threading.md) - Thread-based parallelism.
- [`multiprocessing`](/modules/multiprocessing.md) - Process-based parallelism.
- [`subprocess`](/modules/subprocess.md) - Subprocess management.
- [`sched`](/modules/sched.md) - Event scheduler.
- [`queue`](/modules/queue.md) - A synchronized queue class.
- [`contextvars`](/modules/contextvars.md) - Context variables.

### Networking and interprocess communication
- [`asyncio`](/modules/asyncio.md) - Asynchronous I/O.
- [`socket`](/modules/socket.md) - Low-level networking interface.
- [`ssl`](/modules/ssl.md) - TLS/SSL wrapper for socket objects.
- [`select`](/modules/select.md) - Waiting for I/O completion.
- [`selectors`](/modules/selectors.md) - High-level I/O multiplexing.
- [`signal`](/modules/signal.md) - Set handlers for asynchronous events.
- [`mmap`](/modules/mmap.md) - Memory-mapped file support.

### Internet data handling
- [`email`](/modules/email.md) - An email and MIME handling package.
- [`json`](/modules/json.md) - JSON encoder and decoder.
- [`mailbox`](/modules/mailbox.md) - Manipulate mailboxes in various formats.
- [`mimetypes`](/modules/mimetypes.md) - Map filenames to MIME types.
- [`base64`](/modules/base64.md) - Base16, Base32, Base64, Base85 data encodings.
- [`binascii`](/modules/binascii.md) - Convert between binary and ASCII.
- [`quopri`](/modules/quopri.md) - Encode and decode MIME quoted-printable data.

### Structured markup processing tools
- [`html`](/modules/html.md) - HyperText Markup Language support.

### Internet protocols and support
- [`webbrowser`](/modules/webbrowser.md) - Convenient web-browser controller.
- [`wsgiref`](/modules/wsgiref.md) - WSGI utilities and reference implementation.
- [`urllib`](/modules/urllib.md) - URL handling modules.
- [`http`](/modules/http.md) - HTTP modules.
- [`socketserver`](/modules/socketserver.md) - A framework for network servers.
- [`xmlrpc`](/modules/xmlrpc.md) - XMLRPC server and client modules.

### Multimedia services
- [`wave`](/modules/wave.md) - Read and write WAV files.
- [`colorsys`](/modules/colorsys.md) - Conversions between color systems.

### Internationalization
- [`gettext`](/modules/gettext.md) - Multilingual internationalization services.
- [`locale`](/modules/locale.md) - Internationalization services.

### Program frameworks
- [`turtle`](/modules/turtle.md) - Turtle graphics.
- [`cmd`](/modules/cmd.md) - Support for line-oriented command interpreters.
- [`shlex`](/modules/shlex.md) - Simple lexical analysis.

### Graphical user interfaces with tk
- [`tkinter`](/modules/tkinter.md) - Python interface to Tcl/Tk.

### Development tools
- [`typing`](/modules/typing.md) - Support for type hints.
- [`pydoc`](/modules/pydoc.md) - Documentation generator and online help system.
- [`doctest`](/modules/doctest.md) - Test interactive Python examples.
- [`unittest`](/modules/unittest.md) - Unit testing framework.
- [`test`](/modules/test.md) - Regression tests package for Python.

### Debugging and profiling
- [`bdb`](/modules/bdb.md) - Debugger framework.
- [`faulthandler`](/modules/faulthandler.md) - Dump the Python traceback.
- [`pdb`](/modules/pdb.md) - The Python Debugger.
- [`timeit`](/modules/timeit.md) - Measure execution time of small code snippets.
- [`trace`](/modules/trace.md) - Trace or track Python statement execution.
- [`tracemalloc`](/modules/tracemalloc.md) - Trace memory allocations.

### Software packaging and distribution
- [`distutils`](/modules/distutils.md) - Building and installing Python modules.
- [`ensurepip`](/modules/ensurepip.md) - Bootstrapping the `pip` installer.
- [`venv`](/modules/venv.md) - Creation of virtual environments.
- [`zipapp`](/modules/zipapp.md) - Manage executable Python ZIP archives.

### Python runtime services
- [`sys`](/modules/sys.md) - System-specific parameters and functions.
- [`sysconfig`](/modules/sysconfig.md) - Provide access to Python’s configuration information.
- [`builtins`](/modules/builtins.md) - Built-in objects.
- [`warnings`](/modules/warnings.md) - Warning control.
- [`dataclasses`](/modules/dataclasses.md) - Data classes.
- [`contextlib`](/modules/contextlib.md) - Utilities for [`with`](/statements/with.md)-statement contexts.
- [`abc`](/modules/abc.md) - Abstract base classes.
- [`atexit`](/modules/atexit.md) - Exit handlers.
- [`traceback`](/modules/traceback.md) - Print or retrieve a stack traceback.
- [`gc`](/modules/gc.md) - Garbage collector interface.
- [`inspect`](/modules/inspect.md) - Inspect live objects.
- [`site`](/modules/site.md) - Site-specific configuration hook.

### Custom Python interpreters
- [`code`](/modules/code.md) - Interpreter base classes.
- [`codeop`](/modules/codeop.md) - Compile Python code.

### Importing modules
- [`importzip`](/modules/importzip.md) - Import modules from ZIP archives.
- [`pkgutil`](/modules/pkgutil.md) - Package extension utility.
- [`modulefinder`](/modules/modulefinder.md) - Find modules used by a script.
- [`runpy`](/modules/runpy.md) - Locating and executing Python modules.
- [`importlib`](/modules/importlib.md) - The implementation of [`import`](/statements/import.md).

### Python language services
- [`ast`](/modules/ast.md) - Abstract syntax trees.
- [`symtable`](/modules/symtable.md) - Access to the compiler’s symbol tables.
- [`token`](/modules/token.md) - Constants used with Python parse trees.
- [`keyword`](/modules/keyword.md) - Testing for Python keywords.
- [`tokenize`](/modules/tokenize.md) - Tokenizer for Python source.
- [`tabnanny`](/modules/tabnanny.md) - Detection of ambiguous indentation.
- [`pyclbr`](/modules/pyclbr.md) - Python module browser support.
- [`py_compile`](/modules/py_compile.md) - Compile Python source files.
- [`compileall`](/modules/compileall.md) - Byte-compile Python libraries.
- [`dis`](/modules/dis.md) - Disassembler for Python bytecode.
- [`pickletools`](/modules/pickletools.md) - Tools for pickle developers.

### Unix specific services
- [`posix`](/modules/posix.md) - The most common POSIX system calls.
- [`pwd`](/modules/pwd.md) - The password database.
- [`grp`](/modules/grp.md) - The group database.
- [`termios`](/modules/termios.md) - POSIX style tty control.
- [`tty`](/modules/tty.md) - Terminal control functions.
- [`pty`](/modules/pty.md) - Pseudo-terminal utilities.
- [`fcntl`](/modules/fcntl.md) - The `fcntl` and `ioctl` system calls.
- [`resource`](/modules/resource.md) - Resource usage information.
- [`syslog`](/modules/syslog.md) - Unix syslog library routines.

### MS Windows specific services
- [`msvcrt`](/modules/msvcrt.md) - Useful routines from the MS VC++ runtime.
- [`winreg`](/modules/winreg.md) - Windows registry access.
- [`winsound`](/modules/winsound.md) - Sound-playing interface for Windows.