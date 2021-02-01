# Railway Django Example

1. Initialize a Django Project

`django-admin startproject <project_name>`

2. Change into the project directory

`cd <project_name>`

3. Create a Railway Project

`railway init`

Edit `settings.py` Changing ENGINE from `django.db.backends.sqlite3` to `django.db.backends.postgresql`

Run Django with Railway

`railway run python manage.py runserver`

/fin

NOTE: The only thing changed in this project from the Django was altering the DATABASES dictionary inside of settings.py (Changed ENGINE from sqlite3 to postgresql)
