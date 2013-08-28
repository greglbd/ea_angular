ea_angular
==========

angular js example

Time spent: 9hrs ( 3 research and 6 actual work)

3hrs reading up and playing with angular
2hrs markup
2hrs github login (angular learning curve!)
1hr  search functionality and relating functionality
1hr overriding some bootstrap responsive things.

If I'd known angular before doing this i think i would've got a lot more
done.  I would have done the right gutter in a much better way (I hate the 
way i left that) and I would've adhered to the css specifics more closely.

I now know i could've done all of this without the use of bootstrap js and 
jquery so would do it without next time.

I've used simple window.alerts in parts that with more time should be modals.

tasks completed:
Must Haves:
1. Show a login box initially for a GitHub user to login with their username / password (basic authentication is fine), by utilizing the github.js library
2. Form authentication for the login form
3. Allow user to login using their GitHub credentials and displaying a message indicating login success / failure Look and feel implemented according to the design comp

Nice to Haves
1. Once the user logs in successfully, they are shown a username search box with a search button, which will search GitHub for any username
2. Once the search is clicked, the results should show a list of that user's public repositories with each item in an "name / number of watchers" format
￼￼￼￼￼￼3. When a result is clicked, display an alert with the repository's id and the created_at time

Not Completed:
Please note that subsequent searches for the same previously searched username should not trigger further requests (but the client should still see the previous results)

If you immediately search for the same user e.g.
'Michael' then 'Michael',
then it doesn't make the request 
However, if you search 'Michael', then 'PaulIrish' and then 'Michael' again it will make all 3 requests as I didn't get round to storing the data persistently.