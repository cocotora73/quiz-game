const quiz = [
    {
        question:  '世界三大珍味は「キャビア」「トリュフ」ともう一つはなんでしょうか？',
        answers: [
            'アンチョビ',
            'マツタケ',
            'フォアグラ',
        ],
        correct: 'フォアグラ',
       
    }, {
        question:  '初夢に出てくると縁起が良いと言われている食べ物はなんでしょうか？',
        answers: [
            '胡瓜',
            '茄子',
            '蓮根',
        ],
        correct: '茄子',
    }, {
        question:  '次のうち「乳製品」ではないものはどれでしょうか？',
        answers: [
            'マーガリン',
            'バター',
            'ヨーグルト'
        ],
        correct: 'マーガリン',
    }, {
        question:  'ドライアイスとはなにが固まってできたものでしょうか？',
        answers: [
            '二酸化炭素',
            '酸素',
            'アンモニア',
        ],
        correct: '二酸化炭素',
    }, {
        question:  'スマートフォンの「スマート」とはどういう意味でしょうか？',
        answers: [
            '賢い',
            '痩せている',
            '近未来',
        ],
        correct: '賢い',
    }
];

const $question = document.getElementById('js-question');
const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//クイズの問題文、答えの選択肢のテキスト挿入
const setupQuiz = () => {
    $question.textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
   
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了です！あなたの正解数は' + quizLength + '問中' + score +  '問です！');
    }
}

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
     });
    handleIndex++;
}
