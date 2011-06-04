function tampilkankomentar(json) {
    var entry, urlkomentar, isikomentar, lihatkomentar;
    for (var i = 0; i < jmlkomentar; i++) {
        entry = json.feed.entry[i];
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                urlkomentar = entry.link[k].href;
                break
            }
        }
        urlkomentar = urlkomentar.replace("#", "#comment-");
        if ("content" in entry) {
            isikomentar = entry.content.$t
        } else if ("summary" in entry) {
            isikomentar = entry.summary.$t
        } else {
            isikomentar = ""
        }
        var re = /<\S[^>]*>/g;
        isikomentar = isikomentar.replace(re, "");
        if (isikomentar.length > jmlkarakter) {
            isikomentar = isikomentar.substring(0, jmlkarakter) + " …"
        }
        lihatkomentar = "<li>";
        lihatkomentar += "<span class='komen'></span><b>" + entry.author[0].name.$t + "</b>";
        lihatkomentar += "<a rel='nofollow' href='" + urlkomentar + "'>" + isikomentar + "</a>";
        lihatkomentar += "</li>";
        document.write(lihatkomentar)
    }
}