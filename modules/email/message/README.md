# email.message

**Representing an email message.**

> Source code: [`Lib/email/message.py`](https://github.com/python/cpython/tree/3.12/Lib/email/message.py)

The central class in the [`email`](/modules/email/) package is the [`EmailMessage`](/modules/email/message/EmailMessage/) class, imported from the `email.message` module. It is the base class for the [`email`](/modules/email/) object model. [`EmailMessage`](/modules/email/message/EmailMessage/) provides the core functionality for setting and querying header fields, for accessing message bodies, and for creating or modifying structured messages.

An email message consists of *headers* and a *payload* (which is also referred to as the *content*). Headers are [**RFC 5322**](https://datatracker.ietf.org/doc/html/rfc5322.html) or [**RFC 6532**](https://datatracker.ietf.org/doc/html/rfc6532.html) style field names and values, where the field name and value are separated by a colon. The colon is not part of either the field name or the field value. The payload may be a simple text message, or a binary object, or a structured sequence of sub-messages each with their own set of headers and their own payload. The latter type of payload is indicated by the message having a MIME type such as multipart/* or message/rfc822.

The conceptual model provided by an [`EmailMessage`](/modules/email/message/EmailMessage/) object is that of an ordered dictionary of headers coupled with a *payload* that represents the [**RFC 5322**](https://datatracker.ietf.org/doc/html/rfc5322.html) body of the message, which might be a list of sub-`EmailMessage` objects. In addition to the normal dictionary methods for accessing the header names and values, there are methods for accessing specialized information from the headers (for example the MIME content type), for operating on the payload, for generating a serialized version of the message, and for recursively walking over the object tree.

The [`EmailMessage`](/modules/email/message/EmailMessage/) dictionary-like interface is indexed by the header names, which must be ASCII values. The values of the dictionary are strings with some extra methods. Headers are stored and returned in case-preserving form, but field names are matched case-insensitively. Unlike a real dict, there is an ordering to the keys, and there can be duplicate keys. Additional methods are provided for working with headers that have duplicate keys.

The *payload* is either a string or bytes object, in the case of simple message objects, or a list of [`EmailMessage`](/modules/email/message/EmailMessage/) objects, for MIME container documents such as multipart/* and message/rfc822 message objects.