# web-framework-tutorial

Date 5/12/2022
Requirements
User Details
name: Sam
age: 20
Update Name button
Set Random Age button
Save button

- Class to represent a User and all of its data such as name and data
- User class needs to have the ability to store some data, retrieve it and change it.
- needs to have the ability to notify the rest of the app when some data is changed
- Users needs to be able to persist data to an outside server and then retrive it as some future points.

Model Classes
- Handle data used to represent users blog posts
View Classes 
- Handle HTML and events caused by the user(like clicks)

Extraction Approach 
- Build class User as a mega class with tons of methods
- Refactor user to use composition
- Refactor user to be a reusable class that can represent any piece of data, not just a user

