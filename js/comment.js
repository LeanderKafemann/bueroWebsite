/*
    Functions for sending comments.
*/
async function comment(contentHeader) {
    let likes_old = document.getElementById(contentHeader).textContent;
    document.getElementById(contentHeader).textContent = "Kommentar wird versendet...";
    let comment = document.getElementById(contentHeader + "CommentText").value;
    let name_ = getCookie("username", document.cookie);
    if (name_ != "NoNameGiven") {
        if (comment != "") {
            document.getElementById(contentHeader + "CommentText").value = "";
            let r_ = await fetch("https://lkunited.pythonanywhere.com/webResources/sendComment?contentHeader=" + contentHeader + "&username=" + name_ + "&code=" + getCookie("code", document.cookie) + "&comment=" + comment + "&time=" + getTimeString());
            let r_t = await r_.text();
            if (r_t == "") {
                formatComments(contentHeader);
            } else {
                alert("Kommentieren fehlgeschlagen:\n" + r_t);
            }
        }
    } else {
        alert("Loggen Sie sich ein, um Kommentare zu senden.");
    }
    document.getElementById(contentHeader).textContent = likes_old;
}
async function formatComments(contentHeader) {
    let response_ = await fetch("https://lkunited.pythonanywhere.com/webResources/getComments?contentHeader=" + contentHeader);
    let response_text = await response_.text();
    let comments = response_text.split("#**#");
    let subst = "";
    for (let i = 0; i < comments.length; i++) {
        if (comments[i] != "") {
            let comments_ = comments[i].split("#*#");
            let author = comments_[0];
            let comment = comments_[1];
            let time = comments_[2];
            let timeText = getTimeDiffString(time);
            subst += "<div class='commentText'><i>" + author + "</i> schrieb <i>" + timeText + "</i>:</div><div class='commentOval'>" + comment.replace("\n", "<br/>") + "</div>";
        }
    }
    document.getElementById(contentHeader + "Comments").innerHTML = subst;
}