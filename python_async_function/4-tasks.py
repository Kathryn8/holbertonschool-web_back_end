#!/usr/bin/env python3
""" A module that contains a simple function """
from typing import List
import asyncio
import random
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """ Waits a random amount of time """
    delays = await asyncio.gather(
        *[task_wait_random(max_delay) for _ in range(n)])
    return sorted(delays)
