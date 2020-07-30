#!/usr/bin/python3
import psycopg2
import os

try:
    conn = psycopg2.connect(
        database=os.environ['PGDATABASE'],
        user=os.environ['PGUSER'],
        host=os.environ['PGHOST'],
        password=os.environ['PGPASSWORD']
    )
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
