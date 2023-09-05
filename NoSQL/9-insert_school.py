#!/usr/bin/env python3
"""Python function that inserts new document in a collection"""


def insert_school(mongo_collection, **kwargs):
    """Returns the new _id"""
    insert_result = mongo_collection.insert_one(kwargs)
    new_id = insert_result.inserted_id
    return new_id
