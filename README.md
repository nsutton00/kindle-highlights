# kindle-highlights

Receive a regular email with a random selection of highlighted passages from your kindle.

## Overview
If you're like me, you read exclusively on your kindle and absolutely abuse the highlight feature. I like to highlight snippets that I think I might want to review later or things that stand out.

The problem is, too often my highlights get lost within the book and are never seen again. With no intuitive way to surface those highlights, I never revisit them and the reason I saved them in the first place slowly slips away.

This script solves this by sending me a random (1-5) selection of highlights from my kindle to my email every morning. It takes me only a few minutes to read through them each day and it keeps the information top of mind.

## Set up 

**Script set up**
* Make a new Google Sheet. Make a tab named `Highlights`.
*  Open 'tools' > 'script editor' from the menu bar.
* Copy in the code from [kindle-highlights.gs](https://github.com/nsutton00/kindle-highlights/blob/main/kindle-highlights.gs "kindle-highlights.gs"). 
*  Edit the first line variable 'email_to' to the email you want to receive the highlights.

**Adding your highlights**
* You need to copy your highlights from the My Clippings.txt file into the Google sheet. Instructions on how to get the My Clippings.txt file can be found easily on Google.
* Use [this python script](https://github.com/nsutton00/kindle-MyClippings-csv) to transform your My Clippings.txt file into a CSV. 
* Copy this CSV into the `Highlights` tab of the Google sheet.
* **Important:** do not copy the headers into your google sheet.

![Example of a properly setup sheet](https://github.com/nsutton00/kindle-highlights/blob/main/Google%20sheet.png)

*If you set up your sheet correctly, it will look something like this.*

**Scheduling your email**
* Follow these [instructions](https://developers.google.com/apps-script/guides/triggers/installable#managing_triggers_manually) to create a time driven trigger for your sheet.
* Select `main` as the function to call.
* You can create any schedule you prefer for your script. 

**The finished product**

![Example email with kindle highlights](https://github.com/nsutton00/kindle-highlights/blob/main/Your%20kindle%20highlights.png)
*If all goes well, you can expect to receive an email like this.*
