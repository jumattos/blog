$(document).ready(() => {
    $.get("articles", data => {
        var articleList = $("#articleList");

        // Note about jQuery: "find" returns a jQuery object, not a regular JS array
        // To iterate over the results, use "each"
        $(data).find("td > a").each((index, article) => {
            // Ignore parent directory
            if (index > 0) {
                var path = "articles/" + $(article).attr("href");
                $.get(path, data => {
                    var date = $(article).parent().next().html().trim(" ");
                    var title = $(data).find("#title").html();
                    articleList.append(`
                        <li class="article">
                            <h2><a href="${path}">${title}</a></h2>
                            <p style="text-align: center;">Last modified: ${date}</p>
                        </li>
                    `);
                });
            }
        });
    });
});