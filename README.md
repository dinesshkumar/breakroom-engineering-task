# breakroom-engineering-task
The minimum wage is not given so set at £10.00 by default. You can adjust this by modifying the MINIMUM_WAGE constant in the script if needed.

## Prerequisites
Install latest version of NodeJS

## How to Run the Script
1. Clone or download this repository to your local machine.
2. Open a terminal and navigate to the directory containing the script.
3. Create your quiz response data in a JSON file. The format should be similar to the example below:
   "{
       "enjoys_job": "yes",
       "respected_by_managers": "no",
       "good_for_carers": "yes",
       "contracted_hours": 20,
       "hours_actually_worked": 34,
       "unpaid_extra_work": "unsure",
       "age": 26,
       "hourly_rate": "£8.22",
       "submitted_date": 1608211454000
   }"
4. Run "node generate_score.js <filename>". Replace "<filename>" with the quiz response JSON file.
