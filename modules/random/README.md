# random

**Generate pseudo-random numbers.**

> Source code: [`Lib/random.py`](https://github.com/python/cpython/tree/3.12/Lib/random.py)

This module implements pseudo-random number generators for various distributions.

For integers, there is uniform selection from a range. For sequences, there is uniform selection of a random element, a function to generate a random permutation of a list in-place, and a function for random sampling without replacement.

On the real line, there are functions to compute uniform, normal (Gaussian), lognormal, negative exponential, gamma, and beta distributions. For generating distributions of angles, the von Mises distribution is available.

Almost all module functions depend on the basic function [`random()`](/modules/random/random.md), which generates a random float uniformly in the half-open range `0.0 <= X < 1.0`. Python uses the Mersenne Twister as the core generator. It produces 53-bit precision floats and has a period of 2**19937-1. The underlying implementation in C is both fast and threadsafe. The Mersenne Twister is one of the most extensively tested random number generators in existence. However, being completely deterministic, it is not suitable for all purposes, and is completely unsuitable for cryptographic purposes.

The functions supplied by this module are actually bound methods of a hidden instance of the [`random.Random`](/modules/random/class_Random.md) class. You can instantiate your own instances of [`Random`](/modules/random/class_Random.md) to get generators that don’t share state.

Class [`Random`](/modules/random/class_Random.md) can also be subclassed if you want to use a different basic generator of your own devising: in that case, override the [`random()`](/modules/random/random.md), [`seed()`](/modules/random/seed.md), [`getstate()`](/modules/random/getstate.md), and [`setstate()`](/modules/random/setstate.md) methods. Optionally, a new generator can supply a [`getrandbits()`](/modules/random/getrandbits.md) method — this allows [`randrange()`](/modules/random/randrange.md) to produce selections over an arbitrarily large range.

The random module also provides the [`SystemRandom`](/modules/random/SystemRandom.md) class which uses the system function [`os.urandom()`](/modules/os/urandom.md) to generate random numbers from sources provided by the operating system.

!> **Warning:** The pseudo-random generators of this module should not be used for security purposes. For security or cryptographic uses, see the [`secrets`](/modules/secrets/) module.