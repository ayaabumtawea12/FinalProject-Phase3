Feature:  Candidate Interview Result
Scenario: Candidate Interview Result Verification Pass
Given I navigate to the site and log in
Given create empolyee and jop title
Given Prepare the candidate needs until it has “Interview Scheduled” status
When Candidate Interview Result Verification
Then statues is passed


Scenario: Candidate Interview Result Verification Fail
Given I navigate to the site and log in
Given create empolyee and jop title
Given Prepare the candidate needs until it has “Interview Scheduled” status
When Candidate Interview Resul Verification
Then statues is Fail