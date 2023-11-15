Feature:  Candidate Interview Result
Scenario: Verify that the user can upload a txt file for Application Initiated.
Given I navigate to the site and log in
Given create empolyee and jop title
Given Prepare the candidate needs until it has “Application Initiated” status
When Upload File To Candidat
Then uploaded file should contain the same data as was uploaded

Scenario: Verify that the user can upload a txt file for Hired statuses.
Given I navigate to the site and log in
Given create empolyee and jop title
Given Prepare the candidate needs until it has “Hired” status
When Upload File To Candidat
Then uploaded file should contain the same data as was uploaded
