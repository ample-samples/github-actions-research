## What is it?
Github actions is a CI/CD delivery platform.

## What is it typically used for?
It can be used to automate building, testing and deploying your code.

## How is it used?
Github actions consists of components

From [here](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
"You can configure a GitHub Actions _workflow_ to be triggered when an _event_ occurs in your repository, such as a pull request being opened or an issue being created. Your workflow contains one or more _jobs_ which can run in sequential order or in parallel. Each job will run inside its own virtual machine _runner_, or inside a container, and has one or more steps that either run a script that you define or run an _action_, which is a reusable extension that can simplify your workflow."

### Workflows
- A developer defined process which runs one (or more) _jobs_.
- Defined with a yaml file inside of the repository.
- Are triggered at specified times:
    - Defined schedule
    - On an event
    - Manually
- Workflows can be reused as a part of other workflows

### Events
- A specific activity which can be used to trigger workflows, e.g.:
    - 

### Jobs
### Actions
### Runners

## What can we use it for in the client project?
