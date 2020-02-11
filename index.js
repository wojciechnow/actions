const core = require('@actions/core');
const github = require('@actions/github');

try {
    const pushAuthor = github.context.payload.commits[0].author.email;
    console.log(`The event payload: ${pushAuthor}`);
    core.setOutput("pusher");

} catch (error) {
    core.setFailed(error.message);
}