# Modules

### Text processing services

- [`string`](/modules/string/) - Common string operations.
- [`re`](/modules/re/) - Regular expression operations.
- [`difflib`](/modules/difflib/) - Helpers for computing deltas.
- [`textwrap`](/modules/textwrap/) - Text wrapping and filling.
- [`unicodedata`](/modules/unicodedata/) - Unicode database.
- [`stringprep`](/modules/stringprep/) - Internet string preparation.
- [`readline`](/modules/readline/) - GNU readline interface.
- [`rlcompleter`](/modules/rlcompleter/) - Completion function for GNU readline.

### Binary data services

- [`struct`](/modules/struct/) - Interpret bytes as packed binary data.
- [`codecs`](/modules/codecs/) - Codec registry and base classes.

### Data types

- [`datetime`](/modules/datetime/) - Basic date and time types.
- [`zoneinfo`](/modules/zoneinfo/) - IANA time zone support.
- [`calendar`](/modules/calendar/) - General calendar-related functions.
- [`collections`](/modules/collections/) - Container data types.
- [`heapq`](/modules/heapq/) - Heap queue algorithm.
- [`array`](/modules/array/) - Efficient arrays of numeric values.
- [`weakref`](/modules/weakref/) - Weak references.
- [`types`](/modules/types/) - Dynamic type creation and names for built-in types.
- [`copy`](/modules/copy/) - Shallow and deep copy operations.
- [`pprint`](/modules/pprint/) - Data pretty printer.
- [`reprlib`](/modules/reprlib/) - Alternate [`repr()`](/built-in-functions/repr.md) implementation.
- [`enum`](/modules/enum/) - Support for enumerations.
- [`graphlib`](/modules/graphlib/) - Functionality to operate with graph-like structures.

### Numeric and mathematical modules

- [`numbers`](/modules/numbers/) — Numeric abstract base classes.
- [`math`](/modules/math/) — Mathematical functions.
- [`cmath`](/modules/cmath/) — Mathematical functions for complex numbers.
- [`decimal`](/modules/decimal/) — Decimal fixed point and floating point arithmetic.
- [`fractions`](/modules/fractions/) — Rational numbers.
- [`random`](/modules/random/) — Generate pseudo-random numbers.
- [`statistics`](/modules/statistics/) — Mathematical statistics functions.

### Functional programming modules

- [`itertools`](/modules/itertools/) - Functions creating iterators for efficient looping.
- [`functools`](/modules/functools/) - Higher-order functions and operations on callable objects.
- [`operator`](/modules/operator/) - Standard operators as functions.

### File and directory access

- [`pathlib`](/modules/pathlib/) - Object-oriented filesystem paths.
- [`fileinput`](/modules/fileinput/) - Iterate over lines from multiple input streams.
- [`stat`](/modules/stat/) - Interpreting [`stat()`](/built-in-functions/stat.md) results.
- [`filecmp`](/modules/filecmp/) - File and directory comparisons.
- [`tempfile`](/modules/tempfile/) - Generate temporary files and directories.
- [`glob`](/modules/glob/) - Unix style pathname pattern expansion.
- [`fnmatch`](/modules/fnmatch/) - Unix filename pattern matching.
- [`linecache`](/modules/linecache/) - Random access to text lines.
- [`shutil`](/modules/shutil/) - High-level file operations.

### Data persistence

- [`pickle`](/modules/pickle/) - Python object serialization.
- [`copyreg`](/modules/copyreg/) - Register [`pickle`](/modules/pickle.md) support functions.
- [`shelve`](/modules/shelve/) - Python object persistence.
- [`marshal`](/modules/marshal/) - Internal Python object serialization.
- [`dbm`](/modules/dbm/) - Interfaces to Unix “databases”.
- [`sqlite3`](/modules/sqlite3/) - DB-API 2.0 interface for SQLite databases.

### Data compression and archiving

- [`zlib`](/modules/zlib/) - Compression compatible with gzip.
- [`gzip`](/modules/gzip/) - Support for gzip files.
- [`bz2`](/modules/bz2/) - Support for bzip2 compression.
- [`lzma`](/modules/lzma/) - Compression using the LZMA algorithm.
- [`zipfile`](/modules/zipfile/) - Work with ZIP archives.
- [`tarfile`](/modules/tarfile/) - Read and write tar archive files.

### File formats

- [`csv`](/modules/csv/) - CSV File Reading and Writing.
- [`configparser`](/modules/configparser/) - Configuration file parser.
- [`tomlib`](/modules/tomlib/) - Parse TOML files.
- [`netrc`](/modules/netrc/) - netrc file processing.
- [`plistlib`](/modules/plistlib/) - Generate and parse Apple .plist files.

### Cryptographic services

- [`hashlib`](/modules/hashlib/) - Secure hashes and message digests.
- [`hmac`](/modules/hmac/) - Keyed-hashing for message authentication.
- [`secrets`](/modules/secrets/) - Generate secure random numbers for managing secrets.

### Generic operating system services

- [`os`](/modules/os/) - Miscellaneous operating system interfaces.
- [`io`](/modules/io/) - Core tools for working with streams.
- [`time`](/modules/time/) - Time access and conversions.
- [`argparser`](/modules/argparser/) - Parser for command-line options, arguments and sub-commands.
- [`getopt`](/modules/getopt/) - C-style parser for command line options.
- [`logging`](/modules/logging/) - Logging facility for Python.
- [`getpass`](/modules/getpass/) - Portable password input.
- [`curses`](/modules/curses/) - Terminal handling for character-cell displays.
- [`platform`](/modules/platform/) - Access to underlying platform’s identifying data.
- [`errno`](/modules/errno/) - Standard errno system symbols.
- [`ctypes`](/modules/ctypes/) - A foreign function library for Python.

### Concurrent execution

- [`threading`](/modules/threading/) - Thread-based parallelism.
- [`multiprocessing`](/modules/multiprocessing/) - Process-based parallelism.
- [`subprocess`](/modules/subprocess/) - Subprocess management.
- [`sched`](/modules/sched/) - Event scheduler.
- [`queue`](/modules/queue/) - A synchronized queue class.
- [`contextvars`](/modules/contextvars/) - Context variables.

### Networking and interprocess communication

- [`asyncio`](/modules/asyncio/) - Asynchronous I/O.
- [`socket`](/modules/socket/) - Low-level networking interface.
- [`ssl`](/modules/ssl/) - TLS/SSL wrapper for socket objects.
- [`select`](/modules/select/) - Waiting for I/O completion.
- [`selectors`](/modules/selectors/) - High-level I/O multiplexing.
- [`signal`](/modules/signal/) - Set handlers for asynchronous events.
- [`mmap`](/modules/mmap/) - Memory-mapped file support.

### Internet data handling

- [`email`](/modules/email/) - An email and MIME handling package.
- [`json`](/modules/json/) - JSON encoder and decoder.
- [`mailbox`](/modules/mailbox/) - Manipulate mailboxes in various formats.
- [`mimetypes`](/modules/mimetypes/) - Map filenames to MIME types.
- [`base64`](/modules/base64/) - Base16, Base32, Base64, Base85 data encodings.
- [`binascii`](/modules/binascii/) - Convert between binary and ASCII.
- [`quopri`](/modules/quopri/) - Encode and decode MIME quoted-printable data.

### Structured markup processing tools

- [`html`](/modules/html/) - HyperText Markup Language support.

### Internet protocols and support

- [`webbrowser`](/modules/webbrowser/) - Convenient web-browser controller.
- [`wsgiref`](/modules/wsgiref/) - WSGI utilities and reference implementation.
- [`urllib`](/modules/urllib/) - URL handling modules.
- [`http`](/modules/http/) - HTTP modules.
- [`socketserver`](/modules/socketserver/) - A framework for network servers.
- [`xmlrpc`](/modules/xmlrpc/) - XMLRPC server and client modules.

### Multimedia services

- [`wave`](/modules/wave/) - Read and write WAV files.
- [`colorsys`](/modules/colorsys/) - Conversions between color systems.

### Internationalization

- [`gettext`](/modules/gettext/) - Multilingual internationalization services.
- [`locale`](/modules/locale/) - Internationalization services.

### Program frameworks

- [`turtle`](/modules/turtle/) - Turtle graphics.
- [`cmd`](/modules/cmd/) - Support for line-oriented command interpreters.
- [`shlex`](/modules/shlex/) - Simple lexical analysis.

### Graphical user interfaces with tk

- [`tkinter`](/modules/tkinter/) - Python interface to Tcl/Tk.

### Development tools

- [`typing`](/modules/typing/) - Support for type hints.
- [`pydoc`](/modules/pydoc/) - Documentation generator and online help system.
- [`doctest`](/modules/doctest/) - Test interactive Python examples.
- [`unittest`](/modules/unittest/) - Unit testing framework.
- [`test`](/modules/test/) - Regression tests package for Python.

### Debugging and profiling

- [`bdb`](/modules/bdb/) - Debugger framework.
- [`faulthandler`](/modules/faulthandler/) - Dump the Python traceback.
- [`pdb`](/modules/pdb/) - The Python Debugger.
- [`timeit`](/modules/timeit/) - Measure execution time of small code snippets.
- [`trace`](/modules/trace/) - Trace or track Python statement execution.
- [`tracemalloc`](/modules/tracemalloc/) - Trace memory allocations.

### Software packaging and distribution

- [`distutils`](/modules/distutils/) - Building and installing Python modules.
- [`ensurepip`](/modules/ensurepip/) - Bootstrapping the `pip` installer.
- [`venv`](/modules/venv/) - Creation of virtual environments.
- [`zipapp`](/modules/zipapp/) - Manage executable Python ZIP archives.

### Python runtime services

- [`sys`](/modules/sys/) - System-specific parameters and functions.
- [`sysconfig`](/modules/sysconfig/) - Provide access to Python’s configuration information.
- [`builtins`](/modules/builtins/) - Built-in objects.
- [`warnings`](/modules/warnings/) - Warning control.
- [`dataclasses`](/modules/dataclasses/) - Data classes.
- [`contextlib`](/modules/contextlib/) - Utilities for [`with`](/statements/with.md)-statement contexts.
- [`abc`](/modules/abc/) - Abstract base classes.
- [`atexit`](/modules/atexit/) - Exit handlers.
- [`traceback`](/modules/traceback/) - Print or retrieve a stack traceback.
- [`gc`](/modules/gc/) - Garbage collector interface.
- [`inspect`](/modules/inspect/) - Inspect live objects.
- [`site`](/modules/site/) - Site-specific configuration hook.

### Custom Python interpreters

- [`code`](/modules/code/) - Interpreter base classes.
- [`codeop`](/modules/codeop/) - Compile Python code.

### Importing modules

- [`importzip`](/modules/importzip/) - Import modules from ZIP archives.
- [`pkgutil`](/modules/pkgutil/) - Package extension utility.
- [`modulefinder`](/modules/modulefinder/) - Find modules used by a script.
- [`runpy`](/modules/runpy/) - Locating and executing Python modules.
- [`importlib`](/modules/importlib/) - The implementation of [`import`](/statements/import.md).

### Python language services

- [`ast`](/modules/ast/) - Abstract syntax trees.
- [`symtable`](/modules/symtable/) - Access to the compiler’s symbol tables.
- [`token`](/modules/token/) - Constants used with Python parse trees.
- [`keyword`](/modules/keyword/) - Testing for Python keywords.
- [`tokenize`](/modules/tokenize/) - Tokenizer for Python source.
- [`tabnanny`](/modules/tabnanny/) - Detection of ambiguous indentation.
- [`pyclbr`](/modules/pyclbr/) - Python module browser support.
- [`py_compile`](/modules/py_compile/) - Compile Python source files.
- [`compileall`](/modules/compileall/) - Byte-compile Python libraries.
- [`dis`](/modules/dis/) - Disassembler for Python bytecode.
- [`pickletools`](/modules/pickletools/) - Tools for pickle developers.

### Unix specific services

- [`posix`](/modules/posix/) - The most common POSIX system calls.
- [`pwd`](/modules/pwd/) - The password database.
- [`grp`](/modules/grp/) - The group database.
- [`termios`](/modules/termios/) - POSIX style tty control.
- [`tty`](/modules/tty/) - Terminal control functions.
- [`pty`](/modules/pty/) - Pseudo-terminal utilities.
- [`fcntl`](/modules/fcntl/) - The `fcntl` and `ioctl` system calls.
- [`resource`](/modules/resource/) - Resource usage information.
- [`syslog`](/modules/syslog/) - Unix syslog library routines.

### MS Windows specific services

- [`msvcrt`](/modules/msvcrt/) - Useful routines from the MS VC++ runtime.
- [`winreg`](/modules/winreg/) - Windows registry access.
- [`winsound`](/modules/winsound/) - Sound-playing interface for Windows.