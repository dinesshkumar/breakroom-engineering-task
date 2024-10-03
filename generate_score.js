const fs = require('fs');

// change minimum wage
const MINIMUM_WAGE = 10.0;

function calculateScore(response) {
    let totalQuestions = 0; 
    let score = 0;

    // enjoy their job
    if (response.enjoys_job && response.enjoys_job.toLowerCase() !== 'unsure') {
        totalQuestions++;
        if (response.enjoys_job.toLowerCase() === 'yes') {
            score++;
        };
    }
    console.log("enjoys_job",score, totalQuestions);

    // respected by managers
    if (response.respected_by_managers && response.respected_by_managers.toLowerCase() !== 'unsure') {
        totalQuestions++;
        if (response.respected_by_managers.toLowerCase() === 'yes') {
            score++;
        };
    }
    console.log("respected_by_managers",score, totalQuestions);

    // good for carers
    if (response.good_for_carers && response.good_for_carers.toLowerCase() !== 'unsure') {
        totalQuestions++;
        if (response.good_for_carers.toLowerCase() === 'yes') {
            score++;
        };
    }
    console.log("carers",score, totalQuestions);

    //  more than 8 hours
    if (response.contracted_hours !== undefined && response.hours_actually_worked !== undefined) {
        totalQuestions++;
        if ((response.hours_actually_worked - response.contracted_hours) >= 8){
             score++;
            };
    }
    console.log("more than 8", response.hours_actually_worked - response.contracted_hours,score, totalQuestions);

    //unpaid extra work
    if (response.unpaid_extra_work && response.unpaid_extra_work.toLowerCase() !== 'unsure') {
        totalQuestions++;
        if (response.unpaid_extra_work.toLowerCase() === 'no'){
            score++;
            } 
    }
    console.log("unpaid",score, totalQuestions);

    //minimum wage
    if (response.hourly_rate) {
        totalQuestions++;
        const hourlyRate = parseFloat(response.hourly_rate.replace('£', ''));
        if (hourlyRate >= MINIMUM_WAGE){
            score++;
        }
    }
    console.log("final ",score, totalQuestions);
    return { score, totalQuestions };
}

function calculatePercentage(scoreObj) {
    return Math.round((scoreObj.score / scoreObj.totalQuestions) * 100);
}

function main() {

    const filename = process.argv[2];
  
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }

        const response = JSON.parse(data);

        const scoreObj = calculateScore(response);
        const percentage = calculatePercentage(scoreObj);

        console.log(`Score is ${scoreObj.score}/${scoreObj.totalQuestions} (${percentage}%)`);
    });
}

main();
