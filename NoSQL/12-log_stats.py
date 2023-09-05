#!/usr/bin/env python3
"""  a Python script that provides Nginx logs in MongoDB """
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs = client.logs.nginx
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("{} logs".format(logs.count_documents({})))
    print("Methods:")
    for method in methods:
        print(
            "\tmethod {}: {}".format(
                method, logs.count_documents({"method": method})))
    print(
        "{} status check".format(
            logs.count_documents({"method": "GET", "path": "/status"})))
