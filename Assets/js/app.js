
var ques = document.querySelector('#data');


fetch('./questions.json')
.then(res => res.json())
.then(data =>
{
    console.log(data);

    var mydata = '';

    for(var i of data)
    {
        mydata += `
        <div class="question${i.id} mt-4">
                <p><b>Question </b>${i.question}</p>
                <input type="radio" name="question${i.id}"> ${i.option1}
                <br>
                <input type="radio" name="question${i.id}"> ${i.option2}
                <br>
                <input type="radio" name="question${i.id}"> ${i.option3}
                <br>
                <input type="radio" name="question${i.id}"> ${i.option4}
        </div>
        `
    }
    ques.innerHTML = mydata;


});