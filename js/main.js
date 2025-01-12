

if ($(".table-contents")) {
    let html = ""
    $("h2").each((idx, h2) => {
        $(h2).prop("id", $(h2).text())
        html += `<a href="#${$(h2).text()}">${$(h2).text()}</a>`
    })
    $(".table-contents").html(html)
}