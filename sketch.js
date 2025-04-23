let questions = [
  { question: "1.   2 + 5 = ?", options: [5, 7, 9], answer: 7 },
  { question: "2.   5 x 6 = ?", options: [30, 25, 35], answer: 30 },
  { question: "3.   15 - 4 = ?", options: [11, 12, 13], answer: 11 }
];

let currentQuestion = 0;
let userAnswer = null;
const optionLabels = ['A', 'B', 'C']; // 選項標號

function setup() {
  createCanvas(windowWidth, windowHeight); // 使用整個視窗大小
}

function draw() {
  background('#ddbea9'); // 設定背景顏色為 #f08080
  textSize(40); // 設定文字大小為 40
  textAlign(CENTER, CENTER);
  fill('#432818'); // 設定文字顏色為 #c9ada7

  if (currentQuestion < questions.length) {
    let q = questions[currentQuestion];
    text(q.question, width / 2, height / 4);

    // 計算選項間的間距，讓它們平均分佈
    let spacing = 60; // 每個選項之間的間距
    let startY = height / 2 - (q.options.length - 1) * spacing / 2; // 起始位置

    for (let i = 0; i < q.options.length; i++) {
      let y = startY + i * spacing;
      text(`${optionLabels[i]}: ${q.options[i]}`, width / 2, y);
    }

    if (userAnswer !== null) {
      if (q.options[userAnswer] === q.answer) {
        text("Correct!", width / 2, height - 50);
        userAnswer = null; // 重置答案
        currentQuestion++; // 立即跳到下一題
      } else {
        text("Wrong!", width / 2, height - 50);
        userAnswer = null; // 重置答案
      }
    }
  } else {
    text("Quiz Complete!", width / 2, height / 2);
  }
}

function keyPressed() {
  if (currentQuestion < questions.length) {
    if (key.toUpperCase() === 'A' || key.toUpperCase() === 'B' || key.toUpperCase() === 'C') {
      userAnswer = optionLabels.indexOf(key.toUpperCase());
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
