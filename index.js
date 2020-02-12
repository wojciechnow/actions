const core = require('@actions/core');
const github = require('@actions/github');

try {
    const pushAuthor = github.context.payload.commits[0].author.email;
    console.log(`User that pushed code: ${pushAuthor}`);
    core.setOutput("pusher", pushAuthor);

} catch (error) {
    core.setFailed(error.message);
}