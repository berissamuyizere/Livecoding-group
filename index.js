class ElectionSystem {
 constructor() {
   this.voters = {};      
   this.candidates = {};  
 }
 registerVoter(voterId) {
   if (this.voters[voterId]) {
     console.log(" Voter already registered.");
   } else {
     this.voters[voterId] = false;
     console.log(` Voter ${voterId} registered.`);
   }
 }
 addCandidate(name) {
   if (this.candidates[name]) {
     console.log("Candidate already exists.");
   } else {
     this.candidates[name] = 0;
     console.log(` Candidate ${name} added.`);
   }
 }
 castVote(voterId, candidate) {
   if (!(voterId in this.voters)) {
     console.log(" Voter not registered.");
   } else if (this.voters[voterId]) {
     console.log(" Voter has already voted.");
   } else if (!(candidate in this.candidates)) {
     console.log(" Invalid candidate.");
   } else {
     this.candidates[candidate]++;
     this.voters[voterId] = true;
     console.log(` Vote cast for ${candidate} by ${voterId}.`);
   }
 }
 showResults() {
   console.log(" Election Results:");
   for (let [candidate, votes] of Object.entries(this.candidates)) {
     console.log(`- ${candidate}: ${votes} votes`);
   }
 }
}


const election = new ElectionSystem();
election.registerVoter("voter1");
election.registerVoter("voter2");
election.addCandidate("Tihitna");
election.addCandidate("Bersi");
election.castVote("voter1", "Tihitna");
election.castVote("voter1", "Bersi");
election.castVote("voter2", "Bersi");
election.showResults();
