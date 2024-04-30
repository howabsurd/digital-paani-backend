# Digital-Paani-Backend
This is the assignment provided by Digital-Paani. 

## MVP

Please develop a simple book management API using Node JS. The API should offer these functionalities:
    
  User authentication.
    
  CRUD operations for managing book entries (e.g., title, author,publication year).
    
  Filtering books by author or publication year.

### Installation

Clone the GitHub repository:
git clone https://github.com/howabsurd/digital-paani-backend.git

**Navigate to the backend folder:**

cd digital-paani-backend

Create a .env file in the folder and fill in the following information:

**.env**

PORT=4000

MONGO_URI=mongodb+srv://poptanikrish1:7CSExvtVt9qrZqyE@krish-project.8zxohfa.mongodb.net/digital

GOOGLE_CLIENT_ID=524422188042-m9k18sc7djji4e7sfrhd8gsetjta42kt.apps.googleusercontent.com

GOOGLE_CLIENT_SECRET=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


## API
Filtering books by author or publication year.

    curl --location --globoff 'http://localhost:4000/api/book?publication_year={publication_year}&author={author_name}'

Adding a book 

    curl --location 'http://localhost:4000/api/book' \--header 'Content-Type: application/json' \--data '{"title" : "JavaScript 2003","author" : "Caly Carter","price" : 4000,  "publication_year" : 2003}'

Delete a book by title 

    curl --location --request DELETE 'http://localhost:4000/api/book' \--header 'Content-Type: application/json' \--data '{"title" : "JavaScript 2003"}'

Update a book by using ID 

    curl --location --request PUT 'http://localhost:4000/api/book/662f54e276a6a67cddd46dc7' \--data ''


## User Authentiction 

I have handled the User authentication using google. However, I am not protecting the routes for easier testing purposes. You can login through google after running the project. Hit the url 

    http://localhost:4000/auth/google 


And login through google. It will create a session in your browser so that You dont need to login again. And for logout you need to hit-


    http://localhost:4000/logout




    
