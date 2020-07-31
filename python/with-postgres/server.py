#!/usr/bin/python3
from railway.postgres.psycopg2 import conn
import os

cur = conn.cursor()
try:
    cur.execute("SELECT * from jokes")
except:
    print("Oops database fail")

rows = cur.fetchall()
for row in rows:
    print(row)
