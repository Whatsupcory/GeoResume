GeoResume
==============

Interactive Resume <br />
<em>(Original resume format was created by Chris Coyier at <a href="http://css-tricks.com/one-page-resume-site/" target="_blank">CSS-Tricks</a>.</em>

Demo at <a href="http://www.corymacvie.com" target="_blank">CoryMacVie.com</a>

<strong>Phase 1</strong> - <em>Completed</em><br />
Develop a new type of interactive resume. Display a resume on the left hand side hovering over a world map.
The world map will have pins that corresponds to job positions.  As a site user scrolls over different job positions in
the map will zoom to those locations.  The site will also have a way to display portfolio of work from each position. 
Also there needs to be a pop out business card with vcard capability. 

<strong>Phase 2</strong> - <em>In Progress</em><br />
Develop a php backend for the site that allows users to create their own subdomain (different domain) and import their LinkedIn job profile information and create their own interactive resume. 

<strong>Notice</strong><br />
I plan on writing this myself, but if you could teach me a few things or have ideas on how to improve it then you are welcome to help.

==============

<h3>SETUP INSTRUCTIONS:</h3>

Install these files and personalize the information in index.html<br />
<br />
<strong>HTML</strong> <br />
index.html // Please signup and use your own mapbox.com account for the base map.<br />
Resume_CoryMacVie.pdf // Export your own PDF from the docx provided.<br />
Resume_CoryMacVie.docx // Provided to style your resume like the website.<br />
<br />
<strong>CSS</strong> // Create CSS folder<br />
style.css  // Customize to your desired preference. <br />
tooltip.css // Styles the pop up bubbles on mini references.<br />
control.MiniMap.css // Styles the mini map in bottom right corner.  Please use your own mapbox account.<br />
<br />
<strong>JavaScript</strong> // Create JS Folder<br />
tooltips.js  // Controls the pop up bubbles on mini references.<br />
control.minimap.js // Controls mini map.<br />
<br />
<strong>Images</strong> // Create JS Folder<br /> 
college.png<br />
work.png<br />
volunteer.png<br />
pdf_icon.png<br />
paperclip_sm.png<br />
headshot1.jpg // Replace this with your own personal image. Make it professional. <br />
github-logo.png // Please include this link for others. <br />

<strong>Tips</strong> <br />
- When setting "map.setView" in the html, off set the lat/long so they land right of the resume page. Make sure the zoom level is where you want it to be.  Use testing.html to show you center coordinates on the page. Again use your own basemap from mapbox.
- When creating markers on your map, first lay them in mapbox.com to find the lat/long (they are arranged in reverse order long/lat). 
<br />

==============

<h3>NOTABLE UPDATES:</h3>

- Add quote bubbles to mini references
- Download PDF, vCard & GitHub buttons

<h3>ROAD MAP:</h3>

- Pan Map slower
- Add Foursquare history to the map
