/*Build a Reddit-style voting closure (10%)

Fill the functions/upvote.js file with a closure that lets users upvote under these two constraints:

voters have a certain amount of karma that they can spend on upvotes
voters cannot upvote too quickly, i.e., not within 5 seconds after a previous upvote*/

function up(karma){
    var votingTime = undefined;
    return function (upvote){
        if(votingTime != undefined){
            var newVotingTime = (Date.now() - votingTime) / 100;
            if(newVotingTime <= 5){
                console.log('You are upvoting too quickly');
                return;
            }
        }
        if((karma - upvote) < 0) {
            console.log(`not enough ${karma}`);
            return;
        }

        karma = karma - upvote;
        votingTime = Date.now();
        console.log(`karma left is ${karma}, upvote is ${upvote}`);
    }
}

let voter1 = up(100);