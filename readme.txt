Steps

DataBase Setup
-----------------------
1. Create databse 'spotify'
2. import db/spotify.sql file in spotify database

Node Setup
------------------
1. Open terminal and run command "npm i"
2. Run project with command "nodemon start"

API
---------------
1. 1st run login api with below credentials or curl api url

curl --location 'http://localhost:9000/api/user-login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@gmail.com",
    "password": "admin@1234"
}'


2. For insert isrc data details run below curl api url
 Note -> Copy "_token" value and pass in header authorization 

curl --location --request POST 'http://localhost:9000/api/insert-isrc-data?isrc=INY092200127' \
--header 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY5NjcwODg2MSwiZXhwIjoxNjk2NzA5NjYxfQ.cznFpGTraiekzZKoidfee2yoq9F6_OcwIjf3P5q_dcE'


3. Get By “ISRC”: single result run below curl api url

curl --location 'http://localhost:9000/api/get-isrc-data?isrc=INY092200127' \
--header 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY5NjcwODg2MSwiZXhwIjoxNjk2NzA5NjYxfQ.cznFpGTraiekzZKoidfee2yoq9F6_OcwIjf3P5q_dcE'


4. Get By “artist”: multiple results run below curl api url

curl --location 'http://localhost:9000/api/get-artist-track?artist_name=arijit' \
--header 'authorization: yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY5NjcwODg2MSwiZXhwIjoxNjk2NzA5NjYxfQ.cznFpGTraiekzZKoidfee2yoq9F6_OcwIjf3P5q_dcE'


API Collection
---------------------

https://api.postman.com/collections/1821359-a0d973f5-a93f-4f33-9022-2bf4d95588ce?access_key=PMAT-01HC5T95XFHWPN58Y7DWXWH1HZ



