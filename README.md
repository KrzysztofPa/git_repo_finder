#Welcome 
This project allows you to browse the list of files in all repositories on github - using a form, selecting the user, language, and typing the name of the file you are looking for.

It uses the github api, is built on React with TypeScript, MaterialUi was used for styling.

For the project I focused on the main task and meeting the requirements - I believe that meeting the goals of the project and understanding the needs of the client is important.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Solution description

The "App" component, is the component that stores the state of the entire application, using props it passes setters and objects to sub-components, thus handling inter-component communication.

During the implementation of the task, I encountered several problems, including error detection, passing data without a central state (usually working in Redux, I treated this task as a challenge and a chance for development) and a problem with the extremely extensive, but fortunately detailed github API.

This was the first time I used MaterialUi, I didn't focus on the appearance, because I personally believe that the most important thing is to perform tasks, and any improvements and specific appearance of the application, it is worth to establish with the decision-makers.

In general, I consider the task moderately difficult, it definitely requires some experience, but actually a little deeper dive into the documentation of github and the components I used, made the whole task completed in the actual time of about 4 hours.


## To-Do improve website

- Add application state centralization (redux)
- Add translations (i18n)
- Add night mode