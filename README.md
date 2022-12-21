# Mock12
# Masai Job App (Frontend)

## Instructions

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS and React to solve this question.
- Use redux and thunk for dispatching asynchronous actions.
- Keep the code clean, commented and documented. Maintain feature based coding. (separate action and reducers - feature wise folders ) example : all the action and reducer related to authentication in one folder etc.
- Use only Chakra UI as CSS Library.
- You will have to also deploy both JSON server and app.

## Problem Statement:

- Your app should have two pages
    - Job Posting page
    - Job Listing page

### Job Posting page:

- This page should have a form which takes following info
    - Company name
    - City
    - Location
    - Role (Frontend, Backend, FullStack etc)
    - Level (Junior, Senior etc)
    - Position (Backend Developer, Junior Frontend Developer, Junior Backend Developer, FSD etc)
    - Language (Javascript, Java, C, C++ etc)
    - Contract (full time, part time)
    - Date
- On form submit, store data in JSON server.
- Your data should look like

```jsx
[
	{
		"company": "Ellette",
		"postedAt": "2021-03-30",
		"city": "Gangtok",
		"location": "American Samoa",
		"role": "Frontend",
		"level": "Junior",
		"contract": "Full Time",
		"position": " Backend Developer",
		"language": "Java"
	},
	{
		"company": "Jinny",
		"postedAt": "2021-09-09",
		"city": "Ludhiana",
		"location": "Belgium",
		"role": "FullStack",
		"level": "Junior",
		"contract": "Full Time",
		"position": "Junior Frontend Developer",
		"language": "Java"
	}
]
```

### Job Listing page:

- Fetch all your jobs which have been posted in previous page.
- Your UI should look like

![Screenshot 2022-09-07 at 10.29.29 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5592dad-edd4-4f56-addc-86c576984530/Screenshot_2022-09-07_at_10.29.29_AM.png)

- Design should look similar to given image above.
- Use some dummy or placeholder images for logo.

![Screenshot 2022-09-07 at 10.36.35 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/584471a1-ae17-4034-8c34-ec5ce20cd273/Screenshot_2022-09-07_at_10.36.35_AM.png)

- Your app should also have filter and search functionality
    - Filter by role (use Select tag with onchange event)
    - Search by techstack
        - Create a search bar and when user searches for any language for eg: HTML, jobs related to HTML should be displayed.
- This page should also have pagination, display only 10 jobs per page.
- Make Pixel perfect UI for extra marks.
- Design you app for two themes
    - Light Theme
    - Dark Theme
