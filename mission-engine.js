// ================================================================
// SHARED MISSION ENGINE - Reduziert Redundanzen in allen Missionen
// ================================================================

class MissionEngine {
  constructor(missionConfig) {
    this.config = missionConfig;
    // Regex Pattern aus String rekonstruieren
    if (typeof this.config.validation.forbiddenChars === 'string') {
      this.config.validation.forbiddenChars = new RegExp(this.config.validation.forbiddenChars, 'g');
    }
    this.state = {
      timeLeft: missionConfig.timers.totalTime,
      isRunning: false,
      timerInterval: null,
      currentPhase: 1,
      currentHint: 1,
      isVictory: false,
      typingTimer: null
    };
    this.init();
  }

  init() {
    const hasSave = this.loadGame();
    this.renderHints();
    this.renderCodePhases();
    if (hasSave) {
      this.restoreUIFromState();
    } else {
      this.resetToDefault();
    }
    this.attachEventListeners();
  }

  loadGame() {
    const saved = localStorage.getItem(this.config.storageKey);
    if (!saved) return false;
    try {
      const loadedState = JSON.parse(saved);
      this.state.timeLeft = loadedState.timeLeft;
      this.state.isRunning = loadedState.isRunning;
      this.state.currentPhase = loadedState.currentPhase;
      this.state.currentHint = loadedState.currentHint;
      this.state.isVictory = loadedState.isVictory;
      return true;
    } catch (e) {
      console.error("Savegame korrupt", e);
      return false;
    }
  }

  saveGame() {
    const stateToSave = {
      timeLeft: this.state.timeLeft,
      isRunning: this.state.isRunning,
      currentPhase: this.state.currentPhase,
      currentHint: this.state.currentHint,
      isVictory: this.state.isVictory
    };
    localStorage.setItem(this.config.storageKey, JSON.stringify(stateToSave));
  }

  resetToDefault() {
    this.state.timeLeft = this.config.timers.totalTime;
    this.state.isRunning = false;
    this.state.currentPhase = 1;
    this.state.currentHint = 1;
    this.state.isVictory = false;
    if (this.state.timerInterval) clearInterval(this.state.timerInterval);
    if (this.state.typingTimer) clearInterval(this.state.typingTimer);

    this.updateTimer();
    document.getElementById("startBtn").style.display = "inline-block";
    document.getElementById("helpBtn").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("mainContainer").classList.remove("victory-mode");
    document.body.style.background = "#121212";
    document.querySelectorAll("input, button").forEach((el) => (el.disabled = false));
    for (let i = 1; i <= this.config.totalPhases; i++) {
      const p = document.getElementById(`codePhase${i}`);
      if (p) p.style.display = "none";
    }
    this.saveGame();
  }

  restoreUIFromState() {
    this.updateTimer();
    if (this.state.isRunning || this.state.timeLeft < this.config.timers.totalTime) {
      document.getElementById("startBtn").style.display = "none";
    } else {
      document.getElementById("startBtn").style.display = "inline-block";
    }

    for (let i = 1; i <= this.config.totalPhases; i++) {
      const p = document.getElementById(`codePhase${i}`);
      if (p) {
        p.style.display = i === this.state.currentPhase && !this.state.isVictory && this.state.timeLeft > 0 ? "block" : "none";
      }
    }

    if (this.state.isVictory) {
      this.gameWin(false);
    } else if (this.state.timeLeft <= 0) {
      this.gameOver(false);
    } else if (this.state.isRunning) {
      document.getElementById("helpBtn").style.display = "inline-block";
      this.state.timerInterval = setInterval(() => this.gameLoop(), 1000);
      setTimeout(() => {
        const firstInput = document.querySelector(`.input${this.state.currentPhase}`);
        if (firstInput && !firstInput.disabled) firstInput.focus();
      }, 200);
    }
  }

  renderHints() {
    const container = document.getElementById("dynamicHintsWrapper");
    container.innerHTML = "";

    for (let phase = 1; phase <= this.config.totalPhases; phase++) {
      const phaseHints = this.config.hints[phase];
      if (!phaseHints) continue;

      phaseHints.forEach((text, index) => {
        const hintNum = index + 1;
        const isLast = hintNum === phaseHints.length;

        const div = document.createElement("div");
        div.className = "hint-container";
        div.id = `hint${phase}-${hintNum}`;
        div.style.display = "none";

        const textSpan = document.createElement("span");
        textSpan.className = "hint-text-content";
        textSpan.dataset.fullText = text;

        div.appendChild(textSpan);
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));

        const btn = document.createElement("button");
        if (!isLast) {
          btn.className = "nextHint";
          btn.textContent = `Nächster Hinweis (-${this.config.penalties.hint}s)`;
          btn.addEventListener("click", () => {
            this.applyPenalty(this.config.penalties.hint);
            this.state.currentHint++;
            this.showHint(phase, this.state.currentHint, true);
            this.saveGame();
          });
        } else {
          btn.className = "help-btn";
          btn.id = `closeHints${phase}`;
          btn.textContent = "Hinweise schließen";
          btn.addEventListener("click", () => this.resetHints());
        }

        div.appendChild(btn);
        container.appendChild(div);
      });
    }
  }

  renderCodePhases() {
    const wrapper = document.getElementById("gamePhasesWrapper");
    wrapper.innerHTML = "";

    for (let phase = 1; phase <= this.config.totalPhases; phase++) {
      const code = this.config.codes[phase];
      const codeLen = code.length;
      const phaseWord = this.config.numberToWord[phase] || phase;

      const containerDiv = document.createElement("div");
      containerDiv.className = "code-container";
      containerDiv.id = `codePhase${phase}`;
      containerDiv.style.display = "none";

      const titleDiv = document.createElement("div");
      titleDiv.className = "code-title glitch";
      titleDiv.textContent = `CODE PHASE ${phaseWord}`;
      containerDiv.appendChild(titleDiv);

      const inputsDiv = document.createElement("div");
      inputsDiv.className = "inputs";

      for (let i = 0; i < codeLen; i++) {
        const input = document.createElement("input");
        input.className = `input${phase}`;
        input.maxLength = 1;

        input.addEventListener("input", (e) => {
          let val = e.target.value;
          if (this.config.validation.transform === "uppercase") val = val.toUpperCase();
          else if (this.config.validation.transform === "lowercase") val = val.toLowerCase();
          val = val.replace(this.config.validation.forbiddenChars, "");
          e.target.value = val;

          if (val && e.target.nextElementSibling) {
            e.target.nextElementSibling.focus();
          }
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && !e.target.value && e.target.previousElementSibling) {
            e.target.previousElementSibling.focus();
          }
        });
        inputsDiv.appendChild(input);
      }
      containerDiv.appendChild(inputsDiv);

      const btn = document.createElement("button");
      btn.id = `checkPhase${phase}`;
      btn.textContent = "PRÜFEN";
      btn.addEventListener("click", () => this.handleCodeCheck(phase));
      containerDiv.appendChild(btn);

      wrapper.appendChild(containerDiv);
    }
  }

  startGame() {
    this.state.isRunning = true;
    this.saveGame();
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("helpBtn").style.display = "inline-block";
    const phase1 = document.getElementById("codePhase1");
    if (phase1) phase1.style.display = "block";
    this.updateTimer();
    this.state.timerInterval = setInterval(() => this.gameLoop(), 1000);
    const firstInput = document.querySelector(".input1");
    if (firstInput) firstInput.focus();
  }

  gameLoop() {
    this.state.timeLeft--;
    this.updateTimer();
    this.saveGame();
    if (this.state.timeLeft <= 0) {
      this.gameOver();
    }
  }

  gameOver(playSound = true) {
    clearInterval(this.state.timerInterval);
    this.state.isRunning = false;
    this.saveGame();
    if (playSound) this.playTimerEndSound();
    document.body.style.background = "linear-gradient(45deg,#ff0000,#8b0000)";
    document.querySelectorAll("input").forEach((input) => (input.disabled = true));
    document.querySelectorAll('[id^="checkPhase"]').forEach((btn) => (btn.disabled = true));
    document.getElementById("helpBtn").style.display = "none";
    if (playSound) this.showCustomAlert("💥 ZEIT ABGELAUFEN! 💥");
  }

  gameWin(playSound = true) {
    clearInterval(this.state.timerInterval);
    this.state.isRunning = false;
    this.state.isVictory = true;
    this.saveGame();
    this.triggerVictoryMode();
    if (playSound) this.showCustomAlert("🎉 MISSION ABGESCHLOSSEN! 🎉", true);
  }

  handleCodeCheck(phaseNumber) {
    if (!this.state.isRunning) return;
    if (phaseNumber !== this.state.currentPhase) return;

    const code = this.getCode(`input${phaseNumber}`);
    this.clearInputStyles(`input${phaseNumber}`);

    if (code.length !== this.config.codes[phaseNumber].length) {
      this.showCustomAlert(`${this.config.codes[phaseNumber].length} STELLEN EINGEBEN!`);
      return;
    }

    if (code === this.config.codes[phaseNumber]) {
      this.playSuccessSound();
      this.resetHints();
      const isFinalPhase = phaseNumber === this.config.totalPhases;

      if (isFinalPhase) {
        this.gameWin();
      } else {
        this.showCustomAlert(`✓ PHASE ${phaseNumber} ERFOLGREICH! → PHASE ${phaseNumber + 1}`);
        document.getElementById(`codePhase${phaseNumber}`).style.display = "none";
        document.getElementById(`codePhase${phaseNumber + 1}`).style.display = "block";
        this.state.currentPhase++;
        this.state.currentHint = 1;
        this.saveGame();
        setTimeout(() => {
          const firstInput = document.querySelector(`.input${this.state.currentPhase}`);
          if (firstInput) firstInput.focus();
        }, 100);
      }
    } else {
      this.applyPenalty(this.config.penalties.wrongCode);
      this.playErrorSound();
      document.querySelectorAll(`.input${phaseNumber}`).forEach((input, i) => {
        if (input.value === this.config.codes[phaseNumber][i]) {
          input.classList.add("correct");
        } else {
          input.classList.add("wrong");
          input.value = "";
        }
      });
      const firstEmpty = Array.from(document.querySelectorAll(`.input${phaseNumber}`)).find((el) => !el.value);
      if (firstEmpty) firstEmpty.focus();
    }
  }

  applyPenalty(seconds) {
    this.state.timeLeft = Math.max(0, this.state.timeLeft - seconds);
    this.updateTimer();
    this.saveGame();
  }

  updateTimer() {
    const minutes = Math.floor(this.state.timeLeft / 60);
    const seconds = this.state.timeLeft % 60;
    const timerEl = document.getElementById("timer");
    timerEl.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    const isVictory = document.getElementById("mainContainer").classList.contains("victory-mode");
    if (this.state.timeLeft <= this.config.timers.critical && !isVictory && this.state.timeLeft > 0) {
      timerEl.classList.add("critical");
    } else {
      timerEl.classList.remove("critical");
    }
  }

  triggerVictoryMode() {
    document.getElementById("mainContainer").classList.add("victory-mode");
    document.getElementById("helpBtn").style.display = "none";
    const lastBtn = document.getElementById(`checkPhase${this.config.totalPhases}`);
    if (lastBtn) lastBtn.style.display = "none";
    document.querySelectorAll("input").forEach((el) => (el.disabled = true));
  }

  resetHints() {
    document.querySelectorAll(".hint-container").forEach((h) => (h.style.display = "none"));
    document.getElementById("warning").style.display = "none";
    if (this.state.isRunning && !this.state.isVictory) {
      document.getElementById("helpBtn").style.display = "inline-block";
    }
    if (this.state.typingTimer) clearInterval(this.state.typingTimer);
  }

  showHint(phase, hintNum, animated = true) {
    document.querySelectorAll(".hint-container").forEach((hint) => (hint.style.display = "none"));
    const hintContainer = document.getElementById(`hint${phase}-${hintNum}`);
    if (hintContainer) {
      hintContainer.style.display = "block";
      document.getElementById("helpBtn").style.display = "none";

      const textSpan = hintContainer.querySelector(".hint-text-content");
      const fullText = textSpan.dataset.fullText;

      if (animated) {
        this.typeWriter(textSpan, fullText);
      } else {
        textSpan.textContent = fullText;
      }
    }
  }

  typeWriter(element, text, speed = 25) {
    element.innerHTML = "";
    element.classList.add("typing-cursor");

    if (this.state.typingTimer) clearInterval(this.state.typingTimer);

    let i = 0;
    this.state.typingTimer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(this.state.typingTimer);
        element.classList.remove("typing-cursor");
      }
    }, speed);
  }

  getCode(className) {
    return Array.from(document.querySelectorAll("." + className))
      .map((input) => input.value)
      .join("");
  }

  clearInputStyles(className) {
    document.querySelectorAll("." + className).forEach((input) => input.classList.remove("correct", "wrong"));
  }

  showCustomAlert(msg, isVictory = false) {
    const modal = document.getElementById("customModal");
    const modalContent = document.getElementById("modalContent");
    document.getElementById("modalMessage").textContent = msg;
    modalContent.classList.toggle("victory", isVictory);
    modal.style.display = "flex";
  }

  playSound(type) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);

      switch (type) {
        case "success":
          oscillator.type = "sine";
          oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
          oscillator.frequency.linearRampToValueAtTime(1200, audioCtx.currentTime + 0.2);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
          oscillator.stop(audioCtx.currentTime + 0.5);
          break;
        case "error":
          oscillator.type = "sawtooth";
          oscillator.frequency.value = 200;
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
          oscillator.stop(audioCtx.currentTime + 0.3);
          break;
        case "timeout":
          oscillator.type = "square";
          oscillator.frequency.value = 100;
          gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);
          oscillator.stop(audioCtx.currentTime + 2);
          break;
      }
      oscillator.start();
    } catch (e) {}
  }

  playSuccessSound() {
    this.playSound("success");
  }

  playErrorSound() {
    this.playSound("error");
  }

  playTimerEndSound() {
    this.playSound("timeout");
  }

  attachEventListeners() {
    document.getElementById("startBtn").addEventListener("click", () => this.startGame());

    document.getElementById("helpBtn").addEventListener("click", () => {
      const warningText = document.getElementById("warningText");
      const confirmBtn = document.getElementById("confirmHint");
      warningText.innerHTML = `<strong>WARNUNG:</strong> Hinweis kostet <strong>${this.config.penalties.hint} Sekunden</strong>!`;
      confirmBtn.textContent = `Hinweis (-${this.config.penalties.hint}s)`;
      document.getElementById("warning").style.display = "block";
      document.getElementById("helpBtn").style.display = "none";
    });

    document.getElementById("confirmHint").addEventListener("click", () => {
      this.applyPenalty(this.config.penalties.hint);
      this.showHint(this.state.currentPhase, this.state.currentHint, true);
      document.getElementById("warning").style.display = "none";
      this.saveGame();
    });

    document.getElementById("cancelHint").addEventListener("click", () => this.resetHints());

    document.getElementById("modalOkBtn").addEventListener("click", () => {
      document.getElementById("customModal").style.display = "none";
    });

    document.getElementById("fullscreenBtn").addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    // GM Shortcut (Reset)
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "R" || e.key === "r")) {
        e.preventDefault();
        localStorage.removeItem(this.config.storageKey);
        location.reload();
      }
    });
  }
}

// ================================================================
// HELPER - Missions-Daten aus missions-data.json laden
// ================================================================
async function loadMissionConfig(missionId) {
  try {
    const response = await fetch('missions-data.json');
    const data = await response.json();
    const config = data.missions[missionId];
    
    if (!config) {
      console.error(`Mission ${missionId} nicht gefunden!`);
      return null;
    }

    // RegExp-Pattern rekonstruieren
    config.validation.forbiddenChars = new RegExp(config.validation.forbiddenChars, 'g');
    config.totalPhases = Object.keys(config.codes).length;
    
    return config;
  } catch (error) {
    console.error('Fehler beim Laden der Mission-Daten:', error);
    return null;
  }
}

// Startfunktion für Mission
async function initializeMission(missionId) {
  const config = await loadMissionConfig(missionId);
  if (config) {
    window.missionEngine = new MissionEngine(config);
  } else {
    console.error('Mission konnte nicht initialisiert werden');
  }
}

