
// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. 
// If <= 5, return 'Get Out Now!'. 
// Else return 'Nice Work Champ!'.


function outed(meet, boss){
    let members_amount = 0;
    let total_score = 0;

    for (let member in meet){
        if (boss === member){
            total_score += meet[member] * 2;
        }
        else{
            total_score += meet[member];
        }
        members_amount += 1;
    }
    if ((total_score / members_amount) <= 5){
        return "Get Out Now!";
    }
    else{
        return "Nice Work Champ!";
    }
}