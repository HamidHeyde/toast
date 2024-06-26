#### Hi

Installing the dependencies (npm install), for me, some packages, couldn't be installed and it asked for admin access.
If you faced the same error please use (sudo npm install) instead, which fixed the problem for me

```bash
sudo npm install
```
If the same problem happens when running the application, use sudo for that as well

```bash
sudo npm run start
```

#### Application Flow
 - When the app loads the first time, it fetches any possible already available submission and populates the Table
 - When you press the `New Submission` button,
   - the button will be disabled and the snackbar pops up
   - if you `close/like` the snackbar, the `New Submission` will be enabled again
   - if you like the submission:
     - if `successful`, it then will be added to the table and the localStorage and the snackbar will disappear
     - if `unsuccessful`, the snackbar will stay there and an error message will be displayed. The user can retry to like again, or close it.
       - if the user chooses to close, the data won't be added to the table
       - if the user chooses to retry by clicking the like button, it will redo the like clicking process

#### Components

- Table, Snackbar -> `Material UI`
- Styling -> `makeStyles()` -> `Material UI`



