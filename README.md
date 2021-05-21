# Nobo-Test
A Javascript Program to login into Facebook, made using Puppeteer by Mohammed Zishan.

With this Javascript package, you can login into Facebook directly from your console or powershell. 
This is done using the Puppeteer library (kind of like Selenium of python) which allows us to control web elements with ease.


Instructions & Prerequisites to use this Javascript package :
-----------------------------
1) Node.js must be installed (to use npm commands in the console)
2) Git must be installed (to access the Github contents and this package)

These prerequisites must be satisfied or else the program might run into errors.



Steps to run this package: 
-----------------------------

1) First create a an empty folder anywhere in your computer
2) Name this folder anything like for example "monprojet", "testfacebook", "candidattest".
NOTE : this folder MUST NOT contain any spaces, and must be continuous.

3) Open Command Prompt in this empty folder and run this command :
npm init -y

4) Now type this command :
npm install https://github.com/mohdzish/nobo-test.git

5) Finally this command :
npm --prefix ./node_modules/@mohdzish/nobo-test/ run login username password

IMPORTANT : replace username and password with your Facebook username and password.

Following this step, and if you did'nt encounter any errors, a Chromium tab should open up.
And Facebook should appear, and DO NOT touch on any key or mouse anywhere in the Chromium page.

Eventually, your Facebook page should appear, if everything went alright.


