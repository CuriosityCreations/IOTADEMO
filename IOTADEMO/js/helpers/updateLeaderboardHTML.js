//
//  Updates the leaderboard list HTML
//
function updateLeaderboardHTML(rankedList) {

    // Now we actually sort the rankedList
    rankedList.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });

    var html = '';

    for (var i = 0; i < rankedList.length; i++) {

        var message = JSON.stringify(rankedList[i].message);
        var name = rankedList[i].name;
        var value = rankedList[i].value;
        var credit = rankedList[i].credit;
        var time   = rankedList[i].time;
        var rank = i + 1;

        var listElement = '<tr><td class="iota__rank">#' + rank + '</td><td class="iota__name">' + name + '</td><td class="iota__message">' + message + '</td><td class="iota__value">' + value + '</td><td class="iota__credit">'+ credit + '</td><td class="iota__time">'+ time + '</td></tr>'
        html = listElement + html;
    }

    $("#leaderboard").html(html);
}
