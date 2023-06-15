# hashlib

**Secure hashes and message digests.**

> Source code: [`Lib/hashlib.py`](https://github.com/python/cpython/tree/3.11/Lib/hashlib.py)

This module implements a common interface to many different secure hash and message digest algorithms. Included are the FIPS secure hash algorithms SHA1, SHA224, SHA256, SHA384, SHA512, (defined in [the FIPS 180-4 standard](https://csrc.nist.gov/publications/detail/fips/180/4/final)), the SHA-3 series (defined in [the FIPS 202 standard](https://csrc.nist.gov/publications/detail/fips/202/final)) as well as RSA’s MD5 algorithm (defined in internet [**RFC 1321**](https://datatracker.ietf.org/doc/html/rfc1321.html)). The terms “secure hash” and “message digest” are interchangeable. Older algorithms were called message digests. The modern term is secure hash.

?> If you want the adler32 or crc32 hash functions, they are available in the [`zlib`](/modules/zlib/) module.