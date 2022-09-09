const QuizGame = () => {
  const questionBanks = [
    {
      title: "Thủ đô của Việt Nam là?",
      option: [
        { answer: "Hồ Chí Minh", correct: false },
        { answer: "Hải Phòng", correct: false },
        { answer: "Hà Nội", correct: true },
        { answer: "Đà Nẵng", correct: false },
      ],
    },
    {
      title: "1+2 = ?",
      option: [
        { answer: "2", correct: false },
        { answer: "4", correct: false },
        { answer: "3", correct: true },
        { answer: "5", correct: false },
      ],
    },
    {
      title: "Tỉnh có nhiều thành Phố nhất?",
      option: [
        { answer: "Quảng Ninh", correct: true },
        { answer: "Đà Nẵng", correct: false },
        { answer: "Thừa Thiên Huế", correct: false },
        { answer: "Cần Thơ", correct: false },
      ],
    },
    {
      title: "Mặt trời mọc hướng nào?",
      option: [
        { answer: "Bắc", correct: false },
        { answer: "Tây", correct: false },
        { answer: "Đông", correct: true },
        { answer: "Nam", correct: false },
      ],
    },
  ];

  const [questionDefault, setQuestionDefault] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [points, setPoints] = React.useState(0);

  const nextQuestion = (correct) => {
    if (correct == true) {
      setPoints(points + 1);
    }
    let goNext = questionDefault + 1;
    if (goNext < questionBanks.length) {
      setQuestionDefault(goNext);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="score-section">You scored {points} out of 4</div>
      ) : (
        <React.Fragment>
          <div className="question-section">
            <div className="question-count">
              <span>{questionDefault + 1}</span>/4
            </div>
            <div className="question-text">
              {questionBanks[questionDefault].title}
            </div>
          </div>
          <div className="answer-section">
            {questionBanks[questionDefault].option.map((i, index) => (
              <button key={index} onClick={() => nextQuestion(i.correct)}>
                {i.answer}
              </button>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render
root.render(<QuizGame />);
