#!/usr/bin/env python3
""" This module contains a simple function """
from typing import List, Union

Num = Union[int, float]


def sum_mixed_list(mxd_list: List[Num]) -> float:
    """ A function to return sum of list ofmixed numbers """
    sum: float = 0
    for i in mxd_list:
        sum = sum + i
    return sum
