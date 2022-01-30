document.addEventListener("DOMContentLoaded", ()=> {
    let share = document.querySelector(".share");
    let shareIcon = document.querySelector(".share__btn");
    let shareLinksDiv = document.querySelector(".share__links");
    let clickId = false;

    shareIcon.addEventListener("click", () => {
        if (screen.width < 1024) {
            if (clickId == false) {
                shareIcon.classList.add("share__btn--over");
                shareLinksDiv.classList.add("share__links--opened");
                clickId = true;
            } else {
                shareIcon.classList.remove("share__btn--over");
                shareLinksDiv.classList.remove("share__links--opened");
                clickId = false;
            }
        }
    });
    window.addEventListener("resize", closeF);
    function closeF () {
        if (screen.width >= 1024) {
            if (clickId == true) {
                shareIcon.classList.remove("share__btn--over");
                shareLinksDiv.classList.remove("share__links--opened");
                clickId = false;
            }
        }
    }
    closeF();
});



















































// window.addEventListener("resize", changeShareContent);

// function changeShareContent() {
//     if (screen.width < 1024) {
//         share.innerHTML = `<div class="share__links">
//                                 <span class="share__span">Share</span>
//                                 <a href="#"><img class="share__icon" src="images/icon-facebook.svg" alt=""></a>
//                                 <a href="#"><img class="share__icon" src="images/icon-twitter.svg" alt=""></a>
//                                 <a href="#"><img class="share__icon" src="images/icon-pinterest.svg" alt=""></a>
//                                 <svg class="share__btn" xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
//                            </div>`
//     }
// }
// changeShareContent();