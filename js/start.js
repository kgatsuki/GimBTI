const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer() {
    
}

function goNext(qIdx) {
    const q = document.querySelector(".qBox")
    q.innerHTML = `${qnaList[qIdx][0].q} VS. ${qnaList[0][1].q}`;

    // const a = document.querySelector(".answerBox")
    for (let i in qnaList[qIdx][i].a) {
        addAnswer();
    }
}

function begin() {
    console.log("inside begin()");
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);

        let qIdx = 0;
        goNext(qIdx)
    }, 450);
}

// 애츠키/매츠키/애츠끼/매츠끼 types
// 1. (매)공포겜ㅋㅋ 오늘도 우는거 볼 수 있나?ㅋㅋ vs (애)오니가 싫어한다면.. 하지마..
// 2. (매)오이핫도그.. 먹어줘.. 괴로운 오니..귀해 vs (애)맛있는것만 먹여도 모자르다 노 오이핫도그
// 3. (매)괴랄한 케이크를 보고 어이없지만 대 폭소하다가 먹어야 한다는 생각에 울적해지는 오니 vs (애)예쁘고 맛있는 케이크를 보고 행복해서 눈물 흘리는 오니

// 1. (키) 생방을 꼭 챙겨본다. / (끼) 뎁혀먹자! 먹을수 있는게 어디냐
// 2. (키) 프로페셔널 오니 / (끼) =뜌뜌땨땨 오니
// 3. (키) 임시질문 1 / (끼) = 임시질문2