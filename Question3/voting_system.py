class ElectionSystem:
   def __init__(self):
       self.voters = {} 
       self.candidates = {}
   def register_voter(self, voter_id):
       if voter_id in self.voters:
           print(":warning: Voter already registered.")
       else:
           self.voters[voter_id] = False
           print(f":white_check_mark: Voter {voter_id} registered.")
   def add_candidate(self, name):
       if name in self.candidates:
           print(":warning: Candidate already exists.")
       else:
           self.candidates[name] = 0
           print(f":white_check_mark: Candidate {name} added.")
   def cast_vote(self, voter_id, candidate):
       if voter_id not in self.voters:
           print(":x: Voter not registered.")
       elif self.voters[voter_id]:
           print(" Voter has already voted.")
       elif candidate not in self.candidates:
           print(" Invalid candidate.")
       else:
           self.candidates[candidate] += 1
           self.voters[voter_id] = True
           print(f":ballot_box_with_ballot: Vote cast for {candidate} by voter {voter_id}.")
   def show_results(self):
       print("\n:bar_chart: Election Results:")
       for candidate, votes in self.candidates.items():
           print(f"- {candidate}: {votes} votes")


election = ElectionSystem()
election.register_voter("voter1")
election.register_voter("voter2")
election.add_candidate("Alice")
election.add_candidate("Bob")
election.cast_vote("voter1", "Alice")
election.cast_vote("voter1", "Bob")
election.cast_vote("voter2", "Bob")
election.show_results()
