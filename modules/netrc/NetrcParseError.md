# netrc.NetrcParseError

Exception raised by the [`netrc`](/modules/netrc/netrc/) class when syntactical errors are encountered in source text. Instances of this exception provide three interesting attributes: `msg` is a textual explanation of the error, `filename` is the name of the source file, and `lineno` gives the line number on which the error was found.