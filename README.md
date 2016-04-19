# A tool to post happy-birthday on Facebook without getting sucked into the Facebook vortex :)

I was learning to use protractor (an end-to-end testing framework that automates a user using a browser) to test non-angular 
sites 
(it was made by google for angularjs websites).  I decided to address the problem of posting happy birthday to facebook
friends without having to manually login and out which affords time to become distracted by something and wasting time
browsing on facebook.

Last time I worked on this project I ran into a problem in which Facebook can tell that I'm logging in automatically.  I think
it has to do with how fast the characters are entered in the login fields, because then a pop-up appears
that has to be dealt with--effectively stopping the browser automation.  I think if I wrote code to enter one character at a
time with pauses in between, this may by pass the pop-up.

Another problem is figuring out how to browse to the area where I can post happy-birthday.  I tried to grab elements by
their ids, but I learned that facebook generates those dynamically to deter super hackers like me ;)  Not!

That is the state of this app until further development.
