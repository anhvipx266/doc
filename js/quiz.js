function quiz(quizData) {
    var result = ""

    for (let i = 0; i < quizData.length; i++) {
        const data = quizData[i];

        var choice = ""

        for (let j = 0; j < data.choice.length; j++) {
            let txt = data.choice[j]
            choice += "<div>" + `<input class="quiz-choice" type="radio" name="quiz-${i}" id="quiz-${i}-choice-${j}" value="${j}">`
                + ` <label for="quiz-${i}-choice-${j}">${txt}</label>` + "</div>"
        }
        var str = `<div class="quiz" answer="${data.answer}">
            <p>${data.quiz}</p>
            ${choice}
        </div>`
        result += str
    }

    return result
}

function quizLoad(sel, data) {
    $(sel).html(quiz(data))

    $(".quiz-choice").on("change", (e) => {
        let choice = $(e.target)
        if (choice.val() == choice.parent().parent().attr("answer")) {
            choice.parent().css("background-color", "green")
        }
        else {
            choice.parent().css("background-color", "red")
        }

        choice.parent().parent().find("input").prop('disabled', true);
    })
}

if (quizData != null) {
    quizLoad("#quiz-box", quizData)
}