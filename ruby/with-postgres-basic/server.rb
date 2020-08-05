require 'pg'

conn=PG.connect()

res = conn.exec("SELECT now()")

res.each{ |row|
    puts row
}