#!/usr/bin/env python3
""" This module contains a simple function """
from typing import List, Union, Tuple, Callable, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ A function to return a tuple """
    return [(i, len(i)) for i in lst]
