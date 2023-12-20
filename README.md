ReadMe - IUI Project 

Help Desk Chatbot - Group 003
Team Members - Tharan Bala, Shreyas Chate, Agam Damaraju

Website link - https://helpdesk-chat.firebaseapp.com/
Please open this link to check the UI of the application.

IMPORTATNT - 
The application hasn't been hosted on the cloud due to most of the cloud asking for paid services. The frontend of the application (React + Typescript) has been hosted on Firebase which is a free Google cloud service, but to host our backend (Flask-Python framework with MongoDB connection) needs to be paid as it access data from a different database and charges for each hit of api to the DB. 
As of now, you can check the UI we have developed and converse with the Chatbot - which is the main focus of the project, being related to IUI. 

Idea - 
Our application is a tool that will be accessible to anybody from anywhere to resolve their IT or UWM account related issue. The advantage of our system is that, it has a Chatbot, who acts like a consultant in the case of Help Desk and provides resolution in the same way a help desk consultant would do. It is 24x7 available and can resolve the issue then and there, and if needed will also transfer the incident to the technician on shift for better assistance. 
This way the easy and simple issues related to WIFI, account will be handled by the Chatbot and major issues or incidents can be handled by the technicians on shift. 

Future goals/works -
1. Propose a new tech stack for DB managment and hosting of the application, which results in less charges.
2. Develop a new Chatbot trained with the Knowledge Base resources used by the Help Desk technicians. 
3. Revamp the looks and design of the User Interface with mainly focusing on the Chatbot.
4. Develop new features for next release of the application.

Steps to host local application,
- Git clone https://github.com/Tharanbala/HelpDeskChatbot.git
Backend:
- Go to the server-flask folder, using the command 'cd server-flask'
- Create a new virtual environment for installing all the packages need to run the application, using the command 'python -m venv venv'. 
- Activate the virutal environment by using '.\venv\Scripts\Activate' if Windows or 'source venv/bin/activate' if Ubuntu. 
- Once you have activated the environment, use the command 'pip install requirements.txt' which will install all the needed packages. 
- Once all the packages are installed, run the program using the command 'python server.py'.
- The Flask server will run on http://127.0.0.1:5000
Frontend:
- Go to the helpdeskchatbot folder, using the command 'cd helpdeskchatbot'.
- Install all the packages needed using 'npm install'. (If you do not have NPM installed, you need to install it before)
- Once all the packages are installed, run the program using the command 'npm start'.
- The React server will run on http://localhost:3000
