function click() {
    var gps = [
        [0, 4],
        [2, 2],
        [0, 1],
        [3, 1],
        [6, 1],
        [9, 1],
        [0, 3],
        [1, 3],
        [2, 3],
    ],
        clicks = ['freecell', 'win', 'clicked'],
        cells = this.pTable.getElementsByTagName('td'),
        wins = [];
    if (clicks.indexOf(this.className) > 0) {
        this.title = 'Click to mark cell';
        this.className = '';
    } else {
        this.title = 'Click to unmark cell';
        this.className = 'clicked';
    }
    for (var ol = 0;
        (g = gps[ol]); ol++) {
        var cnt = 0;
        for (var i = 0, cell; i < 3 && (cell = cells[g[0] + (i * g[1])]); i++) {
            id = clicks.indexOf(cell.className);
            if (id >= 0) {
                cnt++;
                if (id == 1) cell.className = 'clicked';
            }
        }
        if (cnt == 3) wins.push(g);
    }
    if (wins.length)
        for (var ol = 0;
            (g = wins[ol]); ol++)
            for (var i = 0; i < 3; i++) cells[g[0] + (i * g[1])].className = 'win';
}

function enable_clicks() {
    var tbls = document.getElementsByTagName('table');
    for (var t = 0, tbl;
        (tbl = tbls[t]); t++) {
        if (tbl.className = 'card') {
            var tds = tbl.getElementsByTagName('td');
            for (var i = 0, td;
                (td = tds[i]); i++) {
                td.pTable = tbl;
                if (td.className != 'freecell') {
                    td.title = 'Click to mark cell';
                    td.onclick = click;
                }
            }
        }
    }
}

function ext_targets() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0, a;
        (a = anchors[i]); i++) {
        if (a.getAttribute("href") && !a.href.match(/buzzwordbingogame.com/) && !a.href.match(/bullshitbingo.net/)) {
            a.target = "_blank";
        }
    }
}

function loader(func) {
    if (document.addEventListener) {
        window.addEventListener("load", func, false);
    } else if (document.attachEvent) {
        window.attachEvent("onload", func);
    } else {
        if (!window._onload_queue) {
            window._onload_queue = [];
            if (window.onload) window._onload_queue.push(window.onload);
        }
        window._onload_queue.push(func);
    }
}
loader(enable_clicks);
loader(ext_targets);
