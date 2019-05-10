//stores question data
const DATA = [
    {
        question: 'What rock band released three albums in 1969 containing almost all of their major hits?',
        answers: ['Creedence Clearwater Revival', 'The Beatles', 'The Doors', 'Led Zeppelin'],
        correctAnswer: 'Creedence Clearwater Revival', 
        goodFeedback: 'Yup! The band released Bayou Country, Green River, and Willy and the Poor Boys in 1969 containing songs such as “Fortunate Son,” “Proud Mary,” “Born on the Bayou,” and “Bad Moon Rising” and a number of other radio hits they’re still known for.',
        badFeedback: 'Boo! Sorry, wrong answer. CCR released Bayou Country, Green River, and Willy and the Poor Boys in 1969 containing songs such as “Fortunate Son,” “Proud Mary,” “Born on the Bayou,” and “Bad Moon Rising” and a number of other radio hits they’re still known for.',
        image: 'imgs/ccr.jpg',
        alt: 'Creedence Clearwater Revival',
    },
    {
        question: 'How did The Ramones get their name?',
        answers: ['It was Joey’s last name', 'As a tribute to The Beatles', 'It sounded cool', 'It was the name of their favorite bartender in Queens, NY'
        ],
        correctAnswer: 'As a tribute to The Beatles', 
        goodFeedback: 'Yup! Prior to being known as The Beatles, the band went by The Silver Beatles and each member donned a stage name. Paul McCartney was known as “Paul Ramón.” Thus, years later, The Ramones were born and also adopted stage names.',
        badFeedback: 'Nope. The Ramones got their name from the stage name previously used by Paul McCartney when The Beatles were "The Silver Beatles." He went by “Paul Ramón.”',
        image: 'imgs/ramones.jpg',
        alt: 'The Ramones',
    },
    {
        question: 'What band did former Red Hot Chili Peppers guitarist John Frusciante audition for before RHCP?',
        answers: ['Rage Against the Machine', 'Nirvana', 'Guns N’ Roses', 'Frank Zappa'],
        correctAnswer: 'Frank Zappa', 
        goodFeedback: 'Indeed! Frusciante was a massive Zappa fan and went to the audition for his band but left before playing because Zappa had a strict no drugs or alcohol policy, and John wanted to be a rock star who indulged in both of those vices.',
        badFeedback: 'Sorry! Wrong this time. Frusciante nearly auditioned for Frank Zappa\'s band but dropped out because Zappa had a no booze, no drugs policy.',
        image: 'imgs/johnfrusciante.jpg',
        alt: 'John Frusciante',
    },
    {
        question: 'Why did Jimi Hendrix burn his guitar on stage at the 1969 Monterey Pop Festival?',
        answers: ['The guitar broke on stage', 'He was dared to do it by his tour manager', 'To one-up The Who', 'He never actually burned his guitar'
    ],
        correctAnswer: 'To one-up The Who', 
        goodFeedback: 'Right you are! The night before, Pete Townshend of The Who smashed his guitar on stage. Hendrix felt the need to outdo Townshend, and burned his guitar on stage during his set, creating one of the most iconic Hendrix photos.',
        badFeedback: 'Nope, sorry. Jimi burned his guitar to one-up Pete Townshend, who\'d smahsed his guitar on stage the night before.',
        image: 'imgs/hendrix.jpg',
        alt: 'Jimi Hendrix Burning Guitar',
    },
    {
        question: 'How did Led Zeppelin get its name?',
        answers: ['It was a joke about their chances of success', 'A joke in poor taste about The Hindenburg crash', 'The name of their favorite record store', 'Just because'],
        correctAnswer: 'It was a joke about their chances of success', 
        goodFeedback: 'Yes! In 1968, the band that would come to be known as Led Zeppelin (then The New Yardbirds) was in its early days. Drummer of The Who Keith Moon was quoted in a newspaper article saying The New Yardbirds would “go down like a lead zeppelin” and the band took that as its new moniker.',
        badFeedback: 'Wrong answer. The Who drummer Keith Moon was quoted in a newspaper article saying they would "go down like a lead zeppelin" and the name stuck.',
        image: 'imgs/zeppelin.jpg',
        alt: 'Led Zeppelin',
    },
    {
        question: 'Why was Bob Dylan nearly arrested in New Jersey in 2009?',
        answers: ['He was caught with drugs', 'Public urination', 'Being a suspicious old man who was loitering on a random lawn', 'He was stopped driving while intoxicated'],
        correctAnswer: 'Being a suspicious old man who was loitering on a random lawn', 
        goodFeedback: 'Righto! Dylan was taking a night walk in the rain in Long Branch, NJ in 2009 when he wandered into the yard of a for sale home. The home was still occupied and residents called the police. When police arrived, Dylan (not carrying identification) identified himself as Bob Dylan, and the police thought he was simply a crazy wandering vagrant.',
        badFeedback: 'Nope, sorry. Dylan was taking a night walk when he wandered into a random yard of a for sale home. The residents called the cops, and when he identified himself as Bob Dylan but was not carrying ID, they thought he was just a wandering vagrant. Oh, Bob.',
        image: 'imgs/bobby.jpg',
        alt: 'Bob Dylan',
    },
    {
        question: 'Who’s the real king of rock and roll?',
        answers: ['Elvis Presley', 'Chuck Berry', 'Bruce Springsteen', 'B.B. King'],
        correctAnswer: 'Chuck Berry', 
        goodFeedback: 'Yes! This may sound like an opinion, but Elvis Presley was billed as “the king of rock and roll” due to a racial divide in the south. In reality, rock historians believe Berry to have birthed the genre.',
        badFeedback: 'Nope. While it may sound like opinion, rock historians credit Chuck Berry with birthing the genre. Elvis was likely given credit due to a racial divide in the south.',
        image: 'imgs/chuck.jpg',
        alt: 'Chuck Berry',
    },
    {
        question: 'What 90s grunge band was kicked out of its own album release party?',
        answers: ['Stone Temple Pilots', 'Pearl Jam', 'The Melvins', 'Nirvana'],
        correctAnswer: 'Nirvana', 
        goodFeedback: 'Indeed! During the release party for Nevermind in 1991, every member of the band was thrown out of the party for starting a food fight. Very mature, guys.',
        badFeedback: 'Nope, sorry. Every member of Nirvana was kicked out of the album release party for Nevermind in 1991 after starting a food fight.',
        image: 'imgs/nirvana.jpg',
        alt: 'Nirvana',
    },
    {
        question: 'How did the band Foo Fighters get its name?',
        answers: ['A reference to the Nirvana food fight', 'An inside joke between band members', 'UFOs', 'Dave Grohl was secretly a web developer'],
        correctAnswer: 'UFOs', 
        goodFeedback: 'Yes! During the 1940s, the U.S. Air Force (founded in 1947) referred to unidentified flying objects (maybe aliens?) as “Foo Fighters.” Guess they thought it sounded cool.',
        badFeedback: 'No, sorry. The Foo Fighters are named after what the U.S. Air Force called UFOs in the 1940s: Foo Fighters.',
        image: 'imgs/foofighters.jpg',
        alt: 'Foo Fighters',
    },
    {
        question: 'What artist played to the largest crowd in rock history?',
        answers: ['Rod Stewart', 'Metallica', 'AC/DC', 'Neil Young'],
        correctAnswer: 'Rod Stewart', 
        goodFeedback: 'Nice, that\'s right. In 1994, Rod Stewart performed in front of 3.5 million people at Copacabana Beach in Brazil. Crazy, right?',
        badFeedback: 'Nope. In 1994, Rod Stewart performed in front of 3.5 million people at Copacabana Beach in Brazil.',
        image: 'imgs/rodstewart.jpg',
        alt: 'Rod Stewart and The Faces',
    },
];

//creates variable for question num
let questionNumber = 0;
//creates variable for score
let scoreNumber = 0;

//function generates question from DATA object 

function generateQuestion() {
    if (questionNumber < DATA.length) {
        return `<div class="quizQuestions-${questionNumber}">
        <h2>${DATA[questionNumber].question}</h2>
        <form>
        <legend>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${DATA[questionNumber].answers[0]}" name="answer" required>
        <span>${DATA[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${DATA[questionNumber].answers[1]}" name="answer" required>
        <span>${DATA[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${DATA[questionNumber].answers[2]}" name="answer" required>
        <span>${DATA[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${DATA[questionNumber].answers[3]}" name="answer" required>
        <span>${DATA[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitQuestion">Submit</button>
        </fieldset>
        </legend>
        </form>
        </div>`
    }
    else {
        giveFinalFeedback();
        restartQuiz();
        $('.questionNumber').text(10);
    }
}

//this function changes the question number 

function changeQuestionNumber() {
    questionNumber++;
        //increments question number
        {$('.questionNumber').text(questionNumber+1)}
}

function changeQuizScore() {
    scoreNumber ++;
}



//these functions start the quiz and remove the start page 

function beginQuiz() {
    $('.startButton').on('click', function() {
        $('.startQuiz').css('display', 'none');;
        $('.quizForm').css('display', 'block');
        $('.questionNumber').text(1);
    });
}

function renderQuestion() {
    $('.quizForm').html(generateQuestion());
}

function selectAnswer() { 
    $('form').on('submit', function(e) {
        e.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${DATA[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            selected.parent().addClass('correct');
            ifCorrect();
        }
        else {
            selected.parent().addClass('wrong');
            giveBadFeedback();
        }
    });

}

function ifCorrect() {
    giveGoodFeedback();
        updateQuizScore();
}

function ifIncorrect() {
    giveBadFeedback();
}

//feedback functions
function giveGoodFeedback() {
    let correctAnswer = `${DATA[questionNumber].correctAnswer}`;
    $('.quizForm').html(`<div class="feedback"><div class="image">
    <img src="${DATA[questionNumber].image}" alt="${DATA[questionNumber].alt}"/>
    </div><p>${DATA[questionNumber].goodFeedback}</p><button type=button class="nextButton">Next</button></div>`)
}

function giveBadFeedback() {
    let correctAnswer = `${DATA[questionNumber].correctAnswer}`;
    $('.quizForm').html(`<div class="feedback"><div class="image">
    <img src="${DATA[questionNumber].image}" alt="${DATA[questionNumber].alt}"/>
    </div><p>${DATA[questionNumber].badFeedback}</p><button type=button class="nextButton">Next</button></div>`)
}

function nextQuestion() {
    $('main').on('click', '.nextButton', function() {
        changeQuestionNumber();
        renderQuestion();
        selectAnswer();
    })
    }


function updateQuizScore() {
    changeQuizScore();
    $('.scoreNumber').text(scoreNumber)
}

//gives user feedback

function giveFinalFeedback() {
    if (scoreNumber >= 7) {
        $('.quizForm').html(`<div class="finalFeedback">
        <h2>Congrats!</h2>
        <img scr=''>
        <p>You got ${scoreNumber} out of 10. You really know your stuff!</p>
        <button type=button class="restartButton">Restart</button></div>`);
    }

    else if (scoreNumber < 7 && scoreNumber >= 4) {
        $('.quizForm').html(`<div class="finalFeedback">
        <h2>Not bad!</h2>
        <img scr=''>
        <p>You got ${scoreNumber} out of 10. You're no rock and roll historian, but you're well on your way!</p>
        <button type=button class="restartButton">Restart</button></div>`);
    } 
    
    else {
        $('.quizForm').html(`<div class="finalFeedback">
        <h2>Booooooooo!</h2>
        <img scr=''>
        <p>You got ${scoreNumber} out of 10. Time to brush up on your rock history.</p>
        <button type=button class="restartButton">Restart</button></div>`);
    }
}

function restartQuiz() {
    $('main').on('click', '.restartButton', function() {
        location.reload();
    })
}

//init quiz function

function initQuiz() {
    beginQuiz();
    renderQuestion();
    selectAnswer();
    nextQuestion();
}

$(initQuiz());