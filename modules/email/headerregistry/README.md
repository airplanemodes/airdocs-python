# email.headerregistry

**Custom header objects.**

> Source code: [`Lib/email/headerregistry.py`](https://github.com/python/cpython/tree/3.13/Lib/email/headerregistry.py)

Headers are represented by customized subclasses of [`str`](/built-in-types/str/). The particular class used to represent a given header is determined by the [`header_factory`](/modules/email/policy/EmailPolicy/header_factory.md) of the [`policy`](/modules/email/policy/) in effect when the headers are created. This section documents the particular header_factory implemented by the email package for handling [**RFC 5322**](https://datatracker.ietf.org/doc/html/rfc5322.html) compliant email messages, which not only provides customized header objects for various header types, but also provides an extension mechanism for applications to add their own custom header types.

When using any of the policy objects derived from [`EmailPolicy`](/modules/email/policy/EmailPolicy/), all headers are produced by [`HeaderRegistry`](/modules/email/headerregistry/HeaderRegistry/) and have [`BaseHeader`](/modules/email/headerregistry/BaseHeader/) as their last base class. Each header class has an additional base class that is determined by the type of the header. For example, many headers have the class UnstructuredHeader as their other base class. The specialized second class for a header is determined by the name of the header, using a lookup table stored in the [`HeaderRegistry`](/modules/email/headerregistry/HeaderRegistry/). All of this is managed transparently for the typical application program, but interfaces are provided for modifying the default behavior for use by more complex applications.

The sections below first document the header base classes and their attributes, followed by the API for modifying the behavior of [`HeaderRegistry`](/modules/email/headerregistry/HeaderRegistry/), and finally the support classes used to represent the data parsed from structured headers.
