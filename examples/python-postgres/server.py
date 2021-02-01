#!/usr/bin/python3
import psycopg2
import os

try:
    conn = psycopg2.connect("")
except:
    print("Couldn't connect")


cur = conn.cursor()
try:
    cur.execute("SELECT NOW()")
except:
    print("Oops database fail")

rows = cur.fetchall()
for row in rows:
    print(row)
