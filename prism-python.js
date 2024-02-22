Prism.languages.python = {
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		greedy: true
	},
	'string-interpolation': {
		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: true,
		inside: {
			'interpolation': {
				// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: true,
				inside: {
					'format-spec': {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: true
					},
					'conversion-option': {
						pattern: /![sra](?=[:}]$)/,
						alias: 'punctuation'
					},
					rest: null
				}
			},
			'string': /[\s\S]+/
		}
	},
	'triple-quoted-string': {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: true,
		alias: 'string'
	},
	'string': {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: true
	},
	'function': {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: true
	},
	'class-name': {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: true
	},
	'decorator': {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: true,
		alias: ['annotation', 'punctuation'],
		inside: {
			'punctuation': /\./
		}
	},
	'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|type|while|with|yield)\b/,
	'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|function|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|module|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|unichr|unicode|vars|xrange|zip|abc|argparser|array|ast|asyncio|atexit|base64|bdb|binascii|bisect|builtins|bz2|calendar|cmath|cmd|code|codecs|codeop|collections|colorsys|compileall|concurrent|configparser|contextlib|contextvars|copy|copyreg|csv|ctypes|curses|dataclasses|datetime|dbm|decimal|difflib|dis|distutils|doctest|email|enum|errno|faulthandler|fcntl|filecmp|fileinput|fnmatch|fractions|ftplib|functools|gc|getopt|getpass|gettext|glob|graphlib|grp|gzip|hashlib|heapq|hmac|html|http|idlelib|imaplib|importlib|inspect|io|ipaddress|itertools|json|keyword|lib2to3|linecache|locale|logging|lzma|mailbox|marshal|math|mimetypes|mmap|modulefinder|multiprocessing|netrc|numbers|operator|os|pathlib|pdb|pickle|pickletools|pkgutil|platform|plistlib|poplib|posix|pprint|profile|pstats|pty|pwd|py_compile|pyclbr|pydoc|queue|quopri|random|re|readline|reprlib|resource|rlcompleter|runpy|sched|secrets|select|selectors|shelve|shlex|shutil|signal|site|smtplib|socket|socketserver|sqlite3|ssl|stat|statistics|string|stringprep|struct|subprocess|symtable|sys|sysconfig|syslog|tabnanny|tarfile|tempfile|termios|test|textwrap|threading|time|timeit|tkinter|token|tokenize|tomllib|trace|traceback|tracemalloc|tty|turtle|turtledemo|types|typing|unicodedata|unittest|urllib|uuid|venv|warnings|wave|weakref|webbrowser|winreg|winsound|wsgiref|xml|xmlrpc|zipapp|zipfile|zipimport|zlib|zoneinfo)\b/,
	'boolean': /\b(?:False|None|True)\b/,
	'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;
