#!/usr/bin/env python3
""" A module that contains a simple function """
import asyncio
import random

async def wait_random(max_delay: int = 10) -> int:
    """ Waits a random amount of time """
    seconds_to_wait: float = random.uniform(0, max_delay)
    await asyncio.sleep(seconds_to_wait)
    return seconds_to_wait
