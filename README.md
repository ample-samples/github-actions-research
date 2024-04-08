# Todd, Athish, Michaela
#Hello everyone !! ITS ATHISH!! :)

2.) What is branch protection and why should the `main` branch only be updated by a pull request? (Athish).

- **Prevent unwanted changes** - The main branch should be protected to prevent other developers from making direct changes to the this central branch. Instead, they are maintained using pull request, which allow others to review your code before merging.

- **Code Review** - Allow people to review your code before merging to catch bugs errors and maintain code quality

- **Ensure tests are passed** - Before anything is merged you can check if tests are passed first.

- **revert pull requests** - it's much easier to revert pull requests than manually undo changes made to the main branch
