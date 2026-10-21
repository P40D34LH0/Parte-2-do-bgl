document.addEventListener("DOMContentLoaded", () => {
  const freaksListContainer = document.getElementById("freaks-list");
  const btnBackHome = document.getElementById("btn-back-home");
  const wegaOverlay = document.getElementById("wega-overlay");

  if (freaksListContainer) {
    const freaksData = [
      {
        id: "jake",
        title: "Jake Junior Jake Senior",
        defaultImg: "../img/OLD_JUNIOR.png",
        defaultDesc: "Chases at a very slow pace, shooting Jake Seniors at you as they move. Jake Seniors will briefly home into you when they're fired.",
        altImg: "../img/OLD_ENGINEER.png",
        altDesc: "Jake Junior Jake Senior will now spawn turrets in random spots of the map that shoot Jake Seniors, the turrets will disappear after a bit and be respawned in other locations."
      },
      {
        id: "evilmark",
        title: "EVIL MARK ONLINE",
        defaultImg: "../img/OLD_MARK.png",
        defaultDesc: "Evil Mark Online chases you slowly, and aims lasers at you. If you get hit by a laser, you will take damage.",
        altImg: "../img/OLD_MARK_RAGE.png",
        altDesc: "Evil Mark Online becomes enraged instantly."
      },
      {
        id: "rorys",
        title: "Rorys",
        defaultImg: "../img/RorysIcon.png",
        defaultDesc: "Will teleport to a random spot on the map, and if they touch the player, they will cover their screen.",
        altImg: "../img/GoldRoryIcon.png",
        altDesc: "They are able to fly towards you after teleporting."
      },
      {
        id: "johnsons",
        title: "Johnsons",
        defaultImg: "../img/OLD_JOHNSON_ICON.png",
        defaultDesc: "Johnsons will attempt to intercept you by slamming before flinging you into the sky.",
        altImg: "../img/OLD_JOHNSON_ICON_ULTRA.png",
        altDesc: "Not much changes besides the fact that he now slams multiple times."
      },
      {
        id: "john",
        title: "John",
        defaultImg: "../img/JOHNICON.png",
        defaultDesc: "John will appear after 96 ludwigs at level 1 to 57 ludwigs at level 19, and will charge at you roughly once every level every 400 seconds. If you parry by pressing Q, he will be bounced away and you will regenerate 25 hp, else you will be launched upwards and take 20 dmg.",
        altImg: "../img/JOHNICONMAX.png",
        altDesc: "John will now get faster every level and gain a rebound once. (one more rebound every 10 levels)"
      },
      {
        id: "ultrairios",
        title: "Ultra Irios",
        defaultImg: "../img/OLD_IRICON.png",
        defaultDesc: "Will fly towards you, and shoot fireballs that deal low damage.",
        altImg: "../img/OLD_DIAMOND_IRICON.png",
        altDesc: "He now shoots fireballs in a spread pattern."
      },
      {
        id: "tonys",
        title: "Tonys",
        defaultImg: "../img/Tonysicon.png",
        defaultDesc: "A bunch of Tonys' will appear on your screen, they fade away after a little bit.",
        altImg: "../img/Tonysiconmax.png",
        altDesc: "Now only one Tonys appears that covers the entire screen."
      }
    ];

freaksData.forEach((freak) => {
  const card = document.createElement("div");
  card.className = "freak-card";
  card.dataset.state = "default";

  card.innerHTML = `
    <div class="freak-card-left">
      <img src="${freak.defaultImg}" alt="${freak.title}" class="freak-img">
    </div>
    <div class="freak-card-right">
      <h3 class="freak-name">${freak.title}</h3>
      <p class="freak-desc">${freak.defaultDesc}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.add("flash-effect");

    setTimeout(() => {
      const imgEl = card.querySelector(".freak-img");
      const descEl = card.querySelector(".freak-desc");

      if (card.dataset.state === "default") {
        card.dataset.state = "alt";
        imgEl.src = freak.altImg;
        descEl.textContent = freak.altDesc;
        card.classList.add("active-retroflame");
      } else {
        card.dataset.state = "default";
        imgEl.src = freak.defaultImg;
        descEl.textContent = freak.defaultDesc;
        card.classList.remove("active-retroflame");
      }
    }, 150);

    setTimeout(() => {
      card.classList.remove("flash-effect");
    }, 300);
  });

  freaksListContainer.appendChild(card);
});

    if (btnBackHome) {
      btnBackHome.addEventListener("click", () => {
        wegaOverlay.classList.remove("hidden");
        setTimeout(() => {
          window.location.href = "site.html";
        }, 1500);
      });
    }
  }

  const quizBox = document.getElementById("quiz-box");

  if (quizBox) {
    const rawQuestions = [
      {
        id: 1,
        creature: "Combat King",
        normalImg: "../img/Combatking1.png",
        wrongImg: "../img/Combatking2.png",
        question: "How much damage does his leap attack deal?",
        correctOption: "A - 85",
        options: ["A - 85", "B - 45", "C - 90", "D - 100"]
      },
      {
        id: 2,
        creature: "Skeleton",
        normalImg: "../img/Skeleton.png",
        wrongImg: "../img/Skelly_hurt.png",
        question: "What is the origin of The Skeleton?",
        correctOption: "A - THE SKELETON APPEARS",
        options: ["A - THE SKELETON APPEARS", "B - Terraria", "C - Minecraft", "D - Human body"]
      },
      {
        id: 3,
        creature: "Klevinoroto",
        normalImg: "../img/Klev_normal.png",
        wrongImg: "../img/Klev_low.png",
        question: "What fighting style was used for Klevinoroto?",
        correctOption: "A - Sisyphus Prime",
        options: ["A - Sisyphus Prime", "B - Minos Prime", "C - Ithor", "D - Jerma"]
      },
      {
        id: 4,
        creature: "Matter",
        normalImg: "../img/MiracleMatter_normal_icon.png",
        wrongImg: "../img/MiracleMatter_losing_icon.png",
        question: "Where did Matter come from?",
        correctOption: "A - Kirby 64: The Crystal Shards",
        options: ["A - Kirby 64: The Crystal Shards", "B - Super Mario Bros", "C - Megaman", "D - Pac-man"]
      },
      {
        id: 5,
        creature: "Weegee",
        normalImg: "../img/Weegee_Not_Hurt.png",
        wrongImg: "../img/Weegee_Hurt.png",
        question: "What does Weegee say before the fight?",
        correctOption: "A - Obey WEEGEE, destroy MARIO.",
        options: ["A - Obey WEEGEE, destroy MARIO.", "B - You know what they say", "C - Mama? MAMA LUIGI?", "D - WEEGEE"]
      }
    ];

    function shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const questions = shuffleArray(rawQuestions);

    let currentQuestionIndex = 0;
    let correctScore = 0;
    let wrongScore = 0;
    let isProcessing = false;

    const creatureImg = document.getElementById("creature-img");
    const creatureName = document.getElementById("creature-name");
    const questionText = document.getElementById("question-text");
    const optionsGrid = document.getElementById("options-grid");
    const correctCountEl = document.getElementById("correct-count");
    const wrongCountEl = document.getElementById("wrong-count");
    const feedbackCorrect = document.getElementById("feedback-correct");
    const finalResult = document.getElementById("final-result");
    const finalEval = document.getElementById("final-eval");
    const finalStats = document.getElementById("final-stats");

    function renderQuestion() {
      isProcessing = false;
      const q = questions[currentQuestionIndex];

      creatureImg.src = q.normalImg;
      creatureName.textContent = q.creature;
      questionText.textContent = q.question;
      optionsGrid.innerHTML = "";

      const shuffledOptions = shuffleArray(q.options);

      shuffledOptions.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.textContent = opt;

        btn.addEventListener("click", () => handleAnswer(opt, q));
        optionsGrid.appendChild(btn);
      });
    }

    function handleAnswer(selectedOpt, questionData) {
      if (isProcessing) return;
      isProcessing = true;

      const isCorrect = (selectedOpt === questionData.correctOption);

      if (isCorrect) {
        correctScore++;
        correctCountEl.textContent = correctScore;

        // Feedback positivo com Tar Thumbs Up
        feedbackCorrect.classList.remove("hidden");

        setTimeout(() => {
          feedbackCorrect.classList.add("hidden");
          nextQuestion();
        }, 1500);

      } else {
        wrongScore++;
        wrongCountEl.textContent = wrongScore;

        creatureImg.src = questionData.wrongImg;

        const allButtons = optionsGrid.querySelectorAll(".btn-option");
        allButtons.forEach((btn) => btn.classList.add("fall-down"));

        setTimeout(() => {
          nextQuestion();
        }, 1600);
      }
    }

    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        showFinalResults();
      }
    }

    function showFinalResults() {
      quizBox.classList.add("hidden");
      finalResult.classList.remove("hidden");

      let evalMessage = "";

      if (correctScore === 5) {
        evalMessage = "UAAAAAAAAU! ACERTOU TUDO!";
      } else if (correctScore === 0) {
        evalMessage = "TU ERROU TUDO! SEU BURROOOOOOO!";
      } else if (correctScore >= 3) {
        evalMessage = "Boa, sabe o suficiente.";
      } else {
        evalMessage = "Bruh, melhor tentar de novo.";
      }

      finalEval.textContent = evalMessage;
      finalStats.textContent = `Acertos: ${correctScore} | Erros: ${wrongScore}`;
    }

    renderQuestion();
  }
});