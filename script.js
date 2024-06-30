const questions = [
    {
        question: "What is the name of the highest civilian award in India?",
        answers: [
            { text: "Padma Shri", correct: false},
            { text: "Padma Bhushan", correct: false},
            { text: "Bharat Ratna", correct: true},
            { text: "Padma Vibhushan", correct: false},
        ]
    },
    {
        question: "Which Indian State is known as the 'Land of the Raising Sun'?",
        answers: [
            { text: "Nagaland", correct: false},
            { text: "Arunachal Pradesh", correct: true},
            { text: "Mizoram", correct: false},
            { text: "Manipur", correct: false},
        ]
    },
    {
        question: "Which Indian City is known as the 'Pink City'?",
        answers: [
            { text: "Agra", correct: false},
            { text: "Udaipur", correct: false},
            { text: "Jodhpur", correct: false},
            { text: "Jaipur", correct: true},
        ]
    },
    {
        question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",
        answers: [
            { text: "Rabindranath Tagore", correct: true},
            { text: "Mahatma Gandhi", correct: false},
            { text: "Sarojini Naidu", correct: false},
            { text: "Bnkim Chandra Chatterjee", correct: false},
        ]
    },
    {
        question: "Which state is known as the 'Space Garden of India?",
        answers: [
            { text: "Andhra Pradesh", correct: false},
            { text: "Karnataka", correct: false},
            { text: "Kerala", correct: true},
            { text: "Tamil Nadu", correct: false},
        ]
    },
    {
        question: "What is the name of the largest Indian state by area?",
        answers: [
            { text: "Uttar Pradesh", correct: false},
            { text: "Rajasthan", correct: true},
            { text: "Maharashtra", correct: false},
            { text: "Madhya Pradesh", correct: false},
        ]
    },
    {
        question: "What is the name of the largest Indian state by Population?",
        answers: [
            { text: "Uttar Pradesh", correct: true},
            { text: "Maharashtra", correct: false},
            { text: "West Bengal", correct: false},
            { text: "Bihar", correct: false},
        ]
    },
    {
        question: "Who is known as the 'Nightingle of India'?",
        answers: [
            { text: "M. S. Subbulakshmi", correct: false},
            { text: "Asha Bhosle", correct: false},
            { text: "Sarojini naidu", correct: true},
            { text: "Shreya Ghoshal", correct: false},
        ]
    },
    {
        question: "What is the name of the Indian Space Agency?",
        answers: [
            { text: "NASA", correct: false},
            { text: "ESA", correct: false},
            { text: "ISRO", correct: true},
            { text: "JAXA", correct: false},
        ]
    },
    {
        question: "Who was the first Indian Women to climb Mount Everest?",
        answers: [
            { text: "Santosh Yadav", correct: true},
            { text: "Bachendri Pal", correct: false},
            { text: "Premlata Agarwal", correct: false},
            { text: "Arunima Sinha", correct: false},
        ]
    },
    {
        question: "What is the name of the largest Indian State in terms of area in the Northeast Region?",
        answers: [
            { text: "Mizoram", correct: false},
            { text: "Assam", correct: false},
            { text: "Manipur", correct: false},
            { text: "Arunachal Pradesh", correct: true},
        ]
    },
    {
        question: "Who is the first Indian Women to win an Olympic Medal?",
        answers: [
            { text: "P. V. Sindhu", correct: false},
            { text: "Karnam Malleswari", correct: true},
            { text: "Sania Mirza", correct: false},
            { text: "Saina Nehwal", correct: false},
        ]
    },
    {
        question: "What is the name of the highest mountain peak in India?",
        answers: [
            { text: "Annapurna", correct: false},
            { text: "Nanda Devi", correct: false},
            { text: "Kanchenjunga", correct: true},
            { text: "Mount Everest", correct: false},
        ]
    },
    {
        question: "Wha is known as the 'Iron Lady of India'?",
        answers: [
            { text: "Sonia Gandhi", correct: false},
            { text: "Indira Gandhi", correct: true},
            { text: "Pratibha Patil", correct: false},
            { text: "Sushma Swaraj", correct: false},
        ]
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        answers: [
            { text: "B. R. Ambedkar", correct: false},
            { text: "Sardar Vallabhbhai Patel", correct: false},
            { text: "Mahatma Gandhi", correct: true},
            { text: "Jawaharlal Nehru", correct: false},
        ]
    },
    {
        question: "Which Indian State is known as the 'God's Own Country?",
        answers: [
            { text: "Arunachal Pradesh", correct: false},
            { text: "Karnataka", correct: false},
            { text: "Andhra Pradesh", correct: false},
            { text: "Kerala", correct: true},
        ]
    },
    {
        question: "Who is the first Women Prime Minister of India?",
        answers: [
            { text: "Pratibha Patil", correct: false},
            { text: "Draupadi Murma", correct: false},
            { text: "Indira Gandhi", correct: true},
            { text: "Sonia Gandhi", correct: false},
        ]
    },
    {
        question: "Who composed the Indian National song 'Vande Mataram'?",
        answers: [
            { text: "Sarojini Naidu", correct: false},
            { text: "Mexico City", correct: false},
            { text: "Subramania Bharati", correct: false},
            { text: "Bankim Chandra Chattopadhyay", correct: true},
        ]
    },
    {
        question: "What is the name of the Indian Festival of Lights?",
        answers: [
            { text: "Diwali", correct: true},
            { text: "Dussehra", correct: false},
            { text: "Navratri", correct: false},
            { text: "Holi", correct: false},
        ]
    },
    {
        question: "Who is known as the 'Father of the Indian Constitution?",
        answers: [
            { text: "Mahatma Gandhi", correct: false},
            { text: "B. R. Ambedkar", correct: true},
            { text: "Jawaharlal Nehru", correct: false},
            { text: "Sardar Vallabhbhai Patel", correct: false},
        ]
    },
    {
        question: "Who was the first Indian to win a Nobel Price?",
        answers: [
            { text: "C. V. Raman", correct: false},
            { text: "Rabindranath Tagore", correct: true},
            { text: "Amartya Sen", correct: false},
            { text: "Mother Teresa", correct: false},
        ]
    },
    {
        question: "Who was the first Indian Women to win a Grand Slam title in tennis?",
        answers: [
            { text: "Mahesh Bhupathi", correct: false},
            { text: "Sania Nehwal", correct: false},
            { text: "Leander Paes", correct: false},
            { text: "Sania Mirza", correct: true},
        ]
    },
    {
        question: "Who is known as the 'Grand Old Man of India?",
        answers: [
            { text: "Dadabhai Naoroji", correct: true},
            { text: "Sardhar Vallabhbhai Patel", correct: false},
            { text: "Bal Gangadhar Tilak", correct: false},
            { text: "Mahatma Gandhi", correct: false},
        ]
    },
    {
        question: "Name of the Indian Classical dance form that originated in Kerala?",
        answers: [
            { text: "Kathakali", correct: true},
            { text: "Kuchipudi", correct: false},
            { text: "Bharatanatyam", correct: false},
            { text: "Odissi", correct: false},
        ]
    },
    {
        question: "Which Indian City is known as the 'City of Pearls?",
        answers: [
            { text: "Jaipur", correct: false},
            { text: "Lucknow", correct: false},
            { text: "Hyderabad", correct: true},
            { text: "Agra", correct: false},
        ]
    },
    {
        question: "Which Indian State shares its borders with Myanmar, China, and Bhutan?",
        answers: [
            { text: "Manipur", correct: false},
            { text: "Meghalaya", correct: false},
            { text: "Arunachal Pradesh", correct: true},
            { text: "Nagaland", correct: false},
        ]
    },
    {
        question: "Who is known as the 'Milkman of India?",
        answers: [
            { text: "Verghese Kurien", correct: true},
            { text: "Ratan Tata", correct: false},
            { text: "Mukesh Ambani", correct: false},
            { text: "Azim Premji", correct: false},
        ]
    },
    {
        question: "Which Indian City is knoen as the 'City of Lakes?",
        answers: [
            { text: "Jaipur", correct: false},
            { text: "Udaipur", correct: true},
            { text: "Jodhpur", correct: false},
            { text: "Bhopal", correct: false},
        ]
    },
    {
        question: "What is the name of the Indian State that is home to the Sundarbans?",
        answers: [
            { text: "Odisha", correct: false},
            { text: "Assam", correct: false},
            { text: "West Bengal", correct: true},
            { text: "Bihar", correct: false},
        ]
    },
    {
        question: "Which State is home to the Great Indian Desert?",
        answers: [
            { text: "Punjab", correct: false},
            { text: "Maharashtra", correct: false},
            { text: "Gujarat", correct: false},
            { text: "Rajasthan", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();