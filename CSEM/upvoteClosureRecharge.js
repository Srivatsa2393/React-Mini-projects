/*F1) Build a Reddit-style voting closure (10%)

Fill the functions/upvote.js file with a closure that lets users upvote under these two constraints:

voters have a certain amount of karma that they can spend on upvotes
voters cannot upvote too quickly, i.e., not within 5 seconds after a previous upvote
The following code is already given to you:

F2) Extend the Reddit-style voting closure (10%)

Based on the previous task (F1), please fill the functions/upvote2.js file with a closure implementation that adds the following feature: 
voters can recharge their karma with a recharge(number) method.

The following code is already given to you:*/

function up(karma){
    var votingTime = undefined;
    return {
        vote: function(upvote){
            if(votingTime != undefined){
                var newVotingTime = (Date.now() - votingTime)/ 100;
                if(newVotingTime <= 5){
                    console.log('you are try to upvote too quickly. please try after some time');
                    return;
                }
            }
            if((karma - upvote) < 0){
                console.log(`Not enough karma: ${karma}`);
                return;
            }
            karma = karma - upvote;
            votingTime = Date.now();
            console.log(`remaining karma is: ${karma}, upvote is : ${upvote}`);
        },
            recharge: function(number){
                karma += number;
                console.log(`${number} recharged, Total karma now is ${karma}`)
        }
    }
}

let voter1 = up(100);
voter1.vote(90); // upvote: 90, karma left: 10
voter1.recharge(20); // 20 recharged. Total karma now: 30
// call after 5 sec
setTimeout(function () { voter1.vote(15); }, 5000); // upvote: 15, karma left: 15