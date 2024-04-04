# [Logs Monitor]()

It is an application to monitor the behavior of the players in a fun game called Noisrucer,
which helps students in learning difficult and abstract algorithm concepts.

## Sending Data to Log Monitor
 The [section](Documentation/C%23Adaptor.md) outlines the process of sending log 
 data via API calls.

## How to run this Project?

Please find the details on how to set up this project locally [here](Documentation/ProjectSetup.md)

## Functionalities Supported

### Frontend
- Renders logs generated by the game
- Provides analytics on the stored logs
- Provides interactive User Interface to access stored logs
- Interacts with the backend server through REST API calls.
  
### Backend
- Provides API end points for fetching and storing logs data. API details can be found here [here](Documentation/APIDetails.md)

## Technologies and libraries used

### Frontend

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/guide/)
- [npm](https://docs.npmjs.com/getting-started/what-is-npm)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [React Icons](https://react-icons.github.io/react-icons/search?q=loca)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/docs/getting-started)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)

### Backend

- [Node](https://nodejs.org/docs/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)
  
## Future work

- [ ] Add analytical insights on the dashboard 
    - Number of successful play sessions happened over specified time
    - Common errors faced by the game users
    - The popular level
    - The difficult level
    -  Time taken by the user to complete a particular level
- [ ] Filter logs based on different parameters
    - Start Time
    - End Time
    - Level Name
    - Game id
    - Simple text
- [ ]  User Authentication
- [ ]  Store error logs in DB and provide analytical insights on the dashboard
- [ ]  Deploy application on render
