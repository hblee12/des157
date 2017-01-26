//madlibs2.0
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");


    console.log('reading');

    //capture the submit event
    document.forms.onsubmit = processForm;
    document.forms.onreset = clearForm;

    //define process function
    function processForm() {
        console.log('processing form');
        //store user name in a variable
        var userNoun = document.forms.userNoun.value;
        var userVerb = document.forms.userVerb.value;
        var userAdj = document.forms.userAdj.value;
        var userVerb2 = document.forms.userVerb2.value;
        var userNoun2 = document.forms.userNoun2.value;
        var userNoun3 = document.forms.userNoun3.value;
        var userAdj2 = document.forms.userAdj2.value;
        var userNoun4 = document.forms.userNoun4.value;
        var userNoun5 = document.forms.userNoun5.value;
        var userNoun6 = document.forms.userNoun6.value;
        var userNoun7 = document.forms.userNoun7.value;

        if (userNoun==""){
          alert("fill your name in please");
        }

        userInput.innerHTML = 'After a long day of work, Kanye West goes to his Kanye ' + userNoun + ' to take his Kanye ' + userVerb + '. He wakes up feeling his Kanye ' + userAdj + '. Then he’ll get Kanye ' + userVerb2 + ' on his Kanye ' + userNoun2 + ' to go on a Kanye ' + userNoun3 + '. He goes to church and becomes Kanye ' + userAdj2 + ' , then to a hotel room to be a Kanye' + userNoun4 + '. Then to school to take his Kanye' + userNoun5 + '. He forgot to brush his teeth. Did he run out of Kanye ' + userNoun6 + '? His neighbor stole it, what a Kanye ' + userNoun7 + '.';

        return false;

    }

    function clearForm() {
        userInput.innerHTML = '';
    }
});