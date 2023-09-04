#!/usr/bin/env python3
""" a Python function that lists all documents in a collection """
from pymongo import MongoClient


def list_all(mongo_collection):
    """ Return an empty list if no document in the collection """
    return mongo_collection.find({})
