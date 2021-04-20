# FastAPI-Railway.app
A sample python **[FastAPI](https://fastapi.tiangolo.com/)** (api app) to run on **[Railway.app](https://railway.app)**

To setup and run Railway app follow these steps https://docs.railway.app/getting-started

Few things different from the [Flask example](https://github.com/railwayapp/starters/tree/master/examples/flask):

Main difference between Flask and FastAPI is, Flask is WSGI and FastAPI is ASGI so Flask gunicorn wont work with FastAPI, you need to use uvicorn instead of gunicorn.

- Procfile is modified to call the 'python main.py'
- main.py uses uvicorn to start the app from __main__ function
- In uvicorn.run(...) along with the port it needs host="0.0.0.0" # I am not sure why this is required

This sample api includes a random number generator (with min and max limits)

##### App Routes
Route Root
> localhost:8080/
> returns {"Hello": "World from FastAPI"}

Route Random (Default)
> localhost:8080/random 
> returns a random number between 0 to 9
> ex:- {"value":8}

Route Random with min/max

> localhost:8080/random?min=100&max500 
> returns a random number between 100 and 500
> ex:- {"value":421}

Let me know if you have any questions [@prakis](https://twitter.com/prakis)