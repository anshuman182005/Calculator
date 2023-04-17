setInterval(dropdownCheck,10);
function insertTasks() {
    let c = $("#text-input").val();
    $("#tasks-container").append(`<hr><div class="tasks" onclick="strikeText(this)">${c.toUpperCase()}</div>`);
    $("#text-input").val("");
}
function strikeText(element) {
    if (element.style.textDecoration == "line-through") {
        element.style = "text-decoration: none;";
    }
    else {
        element.style = "text-decoration: line-through;";
    }
}
function showTasks() {
    if ($("#dropdown-icon").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
        $("#dropdown-icon").css("transform", "rotate(180deg)");
    }
    else {
        $("#dropdown-icon").css("transform", "rotate(0deg)");
    }
    $("#tasks-container").toggle("slow");
}
function dropdownCheck() {
    if (($("#tasks-container").css("display") == "block") && ($("#dropdown-icon").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
        $("#dropdown-icon").css("transform", "rotate(180deg)");
    }
}