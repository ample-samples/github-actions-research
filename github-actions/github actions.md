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
    - Someone opens a pull request
    - Pushes a commit
Full list [here](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

### Jobs
- A set of steps within a workflow which are executed in the same runner
    - These are either a a shell script or an _action_
- You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other. When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run.
- If these steps are executed sequentially, starting the a step requires the previous step to succeed
- Steps can pass information to subsequent steps

### Actions
- A custom application for GitHub Actions, used to perform a complex and frequently repeated task.

### Runners
- A server which runs your workflow
- Starts on a fresh virtual machine, e.g. Windows, Linux etc.

## What can we use it for in the client project?
