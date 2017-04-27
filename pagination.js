function addNextPrevButtons() {
    var selector = ".pagination-bs table tbody tr td span";

    //first string
    if ($(selector).parent().prev().length == 0) {
        lnkNext = $(selector).parent().next().children("a").attr("href");
        $(".pagination-bs table tbody tr").prepend("<td><span>prev</span></td>");
        $(".pagination-bs table tbody tr:last").append('<td><a href="' + lnkNext + '">next</a></td>');
    //last string
    } else if ($(selector).parent().next().length == 0) {
        lnkPrev = $(selector).parent().prev().children("a").attr("href");
        $(".pagination-bs table tbody tr").prepend('<td><a href="' + lnkPrev + '">prev</a></td>');
        $(".pagination-bs table tbody tr:last").append('<td><span>next</span></td>');
    } else {
        lnkNext = $(selector).parent().next().children("a").attr("href");
        lnkPrev = $(selector).parent().prev().children("a").attr("href");
        $(".pagination-bs table tbody tr").prepend('<td><a href="' + lnkPrev + '">prev</a></td>');
        $(".pagination-bs table tbody tr:last").append('<td><a href="' + lnkNext + '">next</span></td>');
    }
}