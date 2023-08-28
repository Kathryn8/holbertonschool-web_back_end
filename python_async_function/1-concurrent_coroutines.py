#!/usr/bin/env python3
""" A module that contains a simple function """
from typing import List
import asyncio
import random
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """ Waits a random amount of time """
    delays_list = []
    for i in range(0, n):
        seconds = await wait_random(max_delay)
        delays_list.append(seconds)
    return delays_list
