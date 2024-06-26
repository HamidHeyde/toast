#### Hi

Installing the dependencies (npm install) for some packages it asked for admin access.
If you faced the same error please use (sudo npm install) instead which fix the problem for me

```bash
sudo npm install
```
If same problem happens when running the application, use sudo for that as well

```bash
sudo npm run start
```

#### Application Flow
 - When the app loads the first time, it fetches any possible already available submission and populates the Table
 - When you press the `New Submission` button,
   - the button will be disabled and the snackbar pops up
   - if you close por like using the snackbar, the `New Submission` will be enabled again
   - if you like the submission:
     - if `successful`, it will be added to the table and the localStorage and the snackbar will disappear
     - if `unsuccessful`, the snackbar will stay there and an error message will be displayed. The user can retry to like again, or close it.
       - if closes, the data won't be added to the table
       - if retry like button, it will retry

#### Components

- Table, Snackbar -> `Material UI`
- Styling -> `makeStyles()` -> `Material UI`



