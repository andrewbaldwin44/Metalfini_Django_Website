# Metalfini Django Website

> E-commerce Website Written for Metalfini

## Live Demo

## Features

## Deploy the Project

__Clone the repo to your local machine using the terminal__:
```
$ git clone git@github.com:andrewbaldwin44/Metalfini_Django_Website.git
```

__Deploy the Back-End Development Server__:
1. Move back into the proect directiory `cd Metalfini_Django_Website`
2. Create a virtual environment: `python3 -m venv venv`
3. Activate the virtual environment: `source venv/bin/activate`
4. Install the dependencies: `pip install -r requirements.txt`
5. Create a `.env` file with `DEBUG` set to `True` and generate a `SECRET_KEY`
6. Set up the database by running the migrations `python3 server/manage.py migrate metalfini`
7. Start the development server `python3 server/manage.py runserver`

__Deploy the Front-End Development Server__:
1. Install the dependencies `yarn install`
2. Start the development server `yarn start`

This will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Technologies Used

- Python
- Django
- React.js
- Redux.js
- Redux Saga

## Author

👤 **Andrew Baldwin**

- Github: [@andrewbaldwin44](https://github.com/andrewbaldwin44)
