 let joinButtons = document.querySelectorAll(".joinBtn");

      joinButtons.forEach(function(button){
        button.addEventListener("click",function(){
            alert("Welcome to KORVA !")
        });
      });

// Quiz section------------------------------------------------


const startQuizBtn = document.querySelector("#start-quiz");
const submitBtn = document.querySelector("#submit-quiz");
const backToIntroBtn = document.querySelector("#back-to-intro");
const restartBtn = document.querySelector("#restart-quiz");

const introScreen = document.querySelector("#quiz-intro");
const questionsScreen = document.querySelector("#quiz-questions");
const resultsScreen = document.querySelector("#quiz-results");

const resultHeading = document.querySelector("#result-heading");
const resultDescription = document.querySelector("#result-description");

const resultGoal = document.querySelector("#result-goal");
const resultDays = document.querySelector("#result-days");
const resultLocation = document.querySelector("#result-location");


const questionCounter = document.querySelector("#question-counter");
const progressPercentage = document.querySelector("#progress-percentage");
const progressFill = document.querySelector("#progress-fill");

const resultRecommendation = document.querySelector("#result-recommendation");

let currentQuestion = 0;
const userAnswers ={};

const quizQuestions = [
    {
        question: "What is your primary fitness goal?",
        name: "fitness-goal",
        options: [
            { value: "weight-loss", label: "Weight Loss" },
            { value: "muscle-building", label: "Muscle Building" },
            { value: "general-fitness", label: "General Fitness" },
            { value: "flexibility", label: "Flexibility & Mobility" }
        ]
    },
    {
        question: "What is your experience level?",
        name: "experience",
        options: [
            { value: "beginner", label: "Beginner" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" }
        ]
    },
    {
        question: "How many days per week can you work out?",
        name: "workout-days",
        options: [
            { value: "2-3", label: "2–3 Days" },
            { value: "4-5", label: "4–5 Days" },
            { value: "6-7", label: "6–7 Days" }
        ]
    },
    {
        question: "Where do you prefer to work out?",
        name: "workout-place",
        options: [
            { value: "gym", label: "Gym" },
            { value: "home", label: "Home" },
            { value: "outdoor", label: "Outdoors" }
        ]
    }
];

    startQuizBtn.addEventListener("click", function(){
        introScreen.classList.remove("active");
        questionsScreen.classList.add("active");

        currentQuestion = 0;
        displayQuestion();
    });

    const nextBtn = document.querySelector("#next-question");
    const previousBtn = document.querySelector("#previous-question");

    nextBtn.addEventListener("click", function(){

        const question = quizQuestions[currentQuestion];

        if(!userAnswers[question.name]){
            alert("Please select an answer before continuing !");
            return;
        }

        if(currentQuestion < quizQuestions.length-1){
            currentQuestion++;
            displayQuestion();
        }

        console.log("Current question:", currentQuestion);
    });

    submitBtn.addEventListener("click", function() {
        const question = quizQuestions[currentQuestion];

        if(!userAnswers[question.name]){
            alert("Please select an answer before submitting!");
            return;
        }

        displayResults();

        questionsScreen.classList.remove("active");
        resultsScreen.classList.add("active");

        console.log("User Answers:", userAnswers);
    });

    const questionTitle = document.querySelector("#question-title");
    const questionOptions = document.querySelector(".quiz-options");

    function displayQuestion(){
        const question = quizQuestions[currentQuestion];

        questionTitle.textContent = question.question;

        questionOptions.innerHTML="";
        console.log(question.options);

        question.options.forEach(function(option) {
            const label = document.createElement("label");

            label.classList.add("quiz-option");

            previousBtn.style.display = currentQuestion > 0 ? "inline-flex" : "none";

            if (currentQuestion === quizQuestions.length - 1) {
                nextBtn.style.display = "none";
                submitBtn.style.display = "inline-flex";
            } else {
                nextBtn.style.display = "inline-flex";
                submitBtn.style.display = "none";
            }


            label.innerHTML = `
                <input type="radio" name="${question.name}" value="${option.value}">

                <span class="option-icon">
                    <i class="${getOptionIcon(question.name, option.value)}"></i>
                </span>

                <span class="option-text">
                    <strong>${option.label}</strong>
                    <small>${getOptionDescription(question.name, option.value)}</small>
                </span>

                <i class="bi bi-circle option-check"></i>
            `;

            const radio = label.querySelector("input");

            if(userAnswers[question.name] === option.value){
                radio.checked = true;
            }

            radio.addEventListener("change", function() {
                userAnswers[question.name] = radio.value;
            });

            questionOptions.appendChild(label);
        })
        updateProgress();
    };
    previousBtn.addEventListener("click", function(){
        if(currentQuestion > 0){
            currentQuestion--;
            displayQuestion();
        }
    });

    restartBtn.addEventListener("click", function () {
        currentQuestion = 0;

        Object.keys(userAnswers).forEach(function (key) {
            delete userAnswers[key];
        });

        resultsScreen.classList.remove("active");
        introScreen.classList.remove("active");
        questionsScreen.classList.add("active");

        displayQuestion();

    });

    backToIntroBtn.addEventListener("click", function () {
        questionsScreen.classList.remove("active");
        introScreen.classList.add("active");
    });

    function getOptionIcon(questionName, value) {
    const icons = {
        "fitness-goal": {
            "weight-loss": "bi bi-fire",
            "muscle-building": "bi bi-bicycle",
            "general-fitness": "bi bi-heart-pulse",
            "flexibility": "bi bi-person-arms-up"
        },
        "experience": {
            "beginner": "bi bi-emoji-smile",
            "intermediate": "bi bi-lightning",
            "advanced": "bi bi-trophy"
        },
        "workout-days": {
            "2-3": "bi bi-calendar2",
            "4-5": "bi bi-calendar2-week",
            "6-7": "bi bi-calendar2-check"
        },
        "workout-place": {
            "gym": "bi bi-building",
            "home": "bi bi-house",
            "outdoor": "bi bi-tree"
        }
    };

    return icons[questionName][value];
}

    function updateProgress() {
        const totalQuestions = quizQuestions.length;
        const currentNumber = currentQuestion + 1;
        const percentage = (currentNumber / totalQuestions) * 100;

        questionCounter.textContent =
            `Question ${currentNumber} of ${totalQuestions}`;

        progressPercentage.textContent = `${percentage}% Complete`;

        progressFill.style.width = `${percentage}%`;
    }
function getOptionDescription(questionName, value) {
    const descriptions = {
        "fitness-goal": {
            "weight-loss": "Burn calories and improve fitness.",
            "muscle-building": "Build strength and muscle mass.",
            "general-fitness": "Improve health and overall fitness.",
            "flexibility": "Improve mobility and flexibility."
        },
        "experience": {
            "beginner": "New to working out.",
            "intermediate": "Familiar with regular exercise.",
            "advanced": "Experienced with structured training."
        },
        "workout-days": {
            "2-3": "A few sessions each week.",
            "4-5": "A balanced weekly routine.",
            "6-7": "A highly frequent workout schedule."
        },
        "workout-place": {
            "gym": "Access equipment and machines.",
            "home": "Exercise in your own space.",
            "outdoor": "Train outside in the fresh air."
        }
    };

    return descriptions[questionName][value];
}

function getReadableAnswer(questionName, value) {
    const readableAnswers = {
        "fitness-goal": {
            "weight-loss": "Weight Loss",
            "muscle-building": "Muscle Building",
            "general-fitness": "General Fitness",
            "flexibility": "Flexibility & Mobility"
        },
        "experience": {
            "beginner": "Beginner",
            "intermediate": "Intermediate",
            "advanced": "Advanced"
        },
        "workout-days": {
            "2-3": "2–3 Days per Week",
            "4-5": "4–5 Days per Week",
            "6-7": "6–7 Days per Week"
        },
        "workout-place": {
            "gym": "Gym",
            "home": "Home",
            "outdoor": "Outdoors"
        }
    };

    return readableAnswers[questionName][value];
}

function getFitnessRecommendation(goal, experience) {
    const recommendations = {
        "weight-loss": {
            "beginner": "Start with brisk walking and light cardio, combined with basic strength training.",
            "intermediate": "Combine regular cardio with strength training and gradually increase intensity.",
            "advanced": "Use a structured combination of cardio, resistance training, and recovery sessions."
        },
        "muscle-building": {
            "beginner": "Start with full-body strength workouts and focus on learning proper exercise technique.",
            "intermediate": "Follow a structured resistance-training routine with progressive overload.",
            "advanced": "Use a well-planned strength program with progressive overload and adequate recovery."
        },
        "general-fitness": {
            "beginner": "Begin with light cardio, basic strength exercises, and mobility work.",
            "intermediate": "Combine cardio, strength training, and flexibility exercises throughout the week.",
            "advanced": "Build a balanced routine combining endurance, strength, mobility, and recovery."
        },
        "flexibility": {
            "beginner": "Start with gentle stretching and basic mobility exercises.",
            "intermediate": "Practice regular mobility sessions and gradually deepen your stretching routine.",
            "advanced": "Include structured mobility work and advanced flexibility exercises appropriate to your ability."
        }
    };

    return recommendations[goal][experience];
}

function displayResults() {
    resultGoal.textContent = getReadableAnswer(
        "fitness-goal",
        userAnswers["fitness-goal"]
    );

    resultDays.textContent = getReadableAnswer(
        "workout-days",
        userAnswers["workout-days"]
    );

    resultLocation.textContent = getReadableAnswer(
        "workout-place",
        userAnswers["workout-place"]
    );

    resultHeading.textContent = "Your Fitness Journey Starts Here!";

    resultDescription.textContent =
        "Your answers will help you start building a fitness routine that suits your goals.";

    resultRecommendation.textContent = getFitnessRecommendation(
        userAnswers["fitness-goal"],
        userAnswers["experience"]
    );
}



// Todo-list -------------------------------------------------------
let addWorkOut = document.querySelector(".add-workout-btn");
      
addWorkOut.addEventListener("click", function(){
    let workOutInput = document.querySelector(".workout-input");
    if (workOutInput.value.trim() === ""){
        return;
    }
    let workOutItem = document.createElement("div");
    workOutItem.classList.add("each-workout-item")
    workOutItem.innerHTML = workOutInput.value;
    let delBtn = document.createElement("button");
    let delIcon = document.createElement("i");
 

    let workOutList = document.querySelector(".right-workout");
    let emptyWorkOut = document.querySelector(".empty-workout");
    emptyWorkOut.style.display = "none";
    workOutList.appendChild(workOutItem);
    workOutItem.appendChild(delBtn);
    delBtn.appendChild(delIcon);
    delBtn.classList.add("deleteBtn");
    delIcon.classList.add("bi", "bi-trash");

    delBtn.addEventListener("click", function(){
        workOutItem.remove();

         if (workOutList.querySelector(".each-workout-item") === null){
        emptyWorkOut.style.display="flex";
        }
    });  
});

let nameError = document.createElement("p");
nameError.classList.add("form-error");

let emailError = document.createElement("p");
emailError.classList.add("form-error");

let subjectError = document.createElement("p");
subjectError.classList.add("form-error");

let messageError = document.createElement("p");
messageError.classList.add("form-error");

document.querySelector("#name").parentElement.appendChild(nameError);
document.querySelector("#email").parentElement.appendChild(emailError);
document.querySelector("#text").parentElement.appendChild(subjectError);
document.querySelector("#message").parentElement.appendChild(messageError);



let name = document.getElementById("name");

name.addEventListener("input", function(){

if (name.value.trim() === ""){
    nameError.textContent="Name is required";
}else if (name.value.trim().length < 3){
    nameError.textContent="Name is too short";
}else{
    nameError.textContent="";
}
});

let email = document.getElementById("email");
email.addEventListener("input", function(){
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email.value)){
    emailError.textContent="Invalid email!";
}else {
    emailError.textContent="";
}
});

let subject = document.getElementById("text");
subject.addEventListener("input", function(){
if (subject.value.trim().length < 5){
    subjectError.textContent="Subject too short!"
}else{
    subjectError.textContent="";
}
});

let message = document.getElementById("message");
message.addEventListener("input", function(){
if (message.value.trim().length < 5){
    messageError.textContent="message too short!"
}else{
    messageError.textContent="";
}

});
let form = document.querySelector("form");
form.addEventListener("submit", function(event){

    event.preventDefault();

});

// -----------------------------Weather--------------------------------
function getUserLocation(){
    if(navigator.geolocation){
        console.log("Geolocation is supported!");
        navigator.geolocation.getCurrentPosition(
            function(position){

                console.log("Location permission granted!");

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);

                getWeather(latitude,longitude);
                getCityName(latitude,longitude);
            },
            function(error){
                console.log("Unable to get location:", error.message);
            }
        );
    }else{
        console.log("Geolocation is not supported by this browser.");
    }
    
}

async function getWeather(latitude, longitude){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`;

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        const temperature = data.current.temperature_2m;
        const weatherCode = data.current.weather_code;

        console.log("Temperature:", temperature);
        console.log("Weather Code:",weatherCode);

        document.querySelector("#weather-temperature").textContent=
        `${temperature}°C`;

        document.querySelector("#weather-condition").textContent=
        getWeatherCondition(weatherCode);
    }catch(error){
        console.log("Weather Error:",error.message);
    }
}

async function getCityName(latitude, longitude){
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Failed to fetch city name");
        }

        const data = await response.json();

        const address = data.address;
        const city = address.city || address.town || address.village || address.country;

        document.querySelector("#weather-city").textContent = 
        city ? city.toUpperCase(): "YOUR LOCATION";
    }catch(error){
        console.log("City Error:",error.message);
        document.querySelector("#weather-city").textContent= "LOCAL WEATHER";
    }
}

function getWeatherCondition(code) {
    const conditions = {
        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Rime Fog",
        51: "Light Drizzle",
        53: "Moderate Drizzle",
        55: "Heavy Drizzle",
        61: "Light Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        71: "Light Snow",
        73: "Moderate Snow",
        75: "Heavy Snow",
        80: "Rain Showers",
        81: "Moderate Rain Showers",
        82: "Heavy Rain Showers",
        95: "Thunderstorm"
    };

    return conditions[code] || "Weather Unavailable";
}



getUserLocation();
