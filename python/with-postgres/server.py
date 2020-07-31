#!/usr/bin/python3
from railway import postgres
import os

conn = postgres.conn
cur = conn.cursor()
try:
    cur.execute("SELECT * from jokes")
except:
    print("Oops database fail")

rows = cur.fetchall()
for row in rows:
    print(row)
