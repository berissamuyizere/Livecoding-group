class ElectionSystem {
    private val voters = mutableMapOf<String, Boolean>()  // voterId -> hasVoted
    private val candidates = mutableMapOf<String, Int>()  // candidate -> votes
    fun registerVoter(voterId: String) {
        if (voterId in voters) {
            println(":warning: Voter already registered.")
        } else {
            voters[voterId] = false
            println(":white_check_mark: Voter $voterId registered.")
        }
    }
    fun addCandidate(name: String) {
        if (name in candidates) {
            println(":warning: Candidate already exists.")
        } else {
            candidates[name] = 0
            println(":white_check_mark: Candidate $name added.")
        }
    }
    fun castVote(voterId: String, candidate: String) {
        when {
            !voters.containsKey(voterId) -> println(" Voter not registered.")
            voters[voterId] == true -> println(" Voter has already voted.")
            !candidates.containsKey(candidate) -> println("Invalid candidate.")
            else -> {
                candidates[candidate] = candidates[candidate]!! + 1
                voters[voterId] = true
                println(":ballot_box_with_ballot: Voter $voterId voted for $candidate.")
            }
        }
    }
    fun showResults() {
        println("Election Results:")
        candidates.forEach { (name, votes) ->
            println("- $name: $votes votes")
        }
    }
}
fun main() {
    val election = ElectionSystem()
    election.registerVoter("v1")
    election.registerVoter("v2")
    election.addCandidate("Alice")
    election.addCandidate("Bob")
    election.castVote("v1", "Alice")
    election.castVote("v1", "Bob")
    election.castVote("v2", "Bob")
    election.showResults()
}
