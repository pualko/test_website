// 切換QA種類按鈕
function showContent(id, event) {
    // 隱藏所有內容
    var contents = document.querySelectorAll(".content");
    contents.forEach(content => content.classList.remove("active"));

    // 取消所有按鈕的 active 樣式
    var btn2s = document.querySelectorAll(".btn2");
    btn2s.forEach(btn2 => btn2.classList.remove("active"));

    // 顯示對應內容並加上 active 樣式
    document.getElementById(id).classList.add("active");

    // 讓被點擊的按鈕變成 active
    event.currentTarget.classList.add("active");
}

//step按鈕
let currentStep = 1; // 目前步驟 (從 1 開始)
const totalSteps = 4; // 總步驟數

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const steps = document.querySelectorAll(".stepContent");

// 更新顯示步驟
function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep - 1);
    });
}

// 點擊左箭頭
prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateSteps();
    }
});

// 點擊右箭頭
nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
        currentStep++;
        updateSteps();
    }
});

// 初始化 (確保 Step 1 顯示)
updateSteps();

// QA按鈕
function toggleContent(button) {
    var answerDiv = button.closest('.QA').querySelector('.answer');
    var img = button.querySelector('img');  // 找到按鈕內的圖片
    
    // 切換顯示/隱藏的狀態
    if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
        answerDiv.style.display = 'block';  // 顯示更多文字
        img.src = "../static/image/frontpage_image/首頁素材_E-icon-合起-一般.png";  // 更換圖片
        button.classList.add('open');
    } else {
        answerDiv.style.display = 'none';  // 隱藏文字
        img.src = "../static/image/frontpage_image/首頁素材_E-icon-展開-一般.png";
        button.classList.remove('open');
    }
}