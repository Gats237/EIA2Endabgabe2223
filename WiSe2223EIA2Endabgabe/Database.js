"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    let url = "https://webuser.hs-furtwangen.de/~pilshenn/Database/index.php";
    async function handleLoad() {
        let response = await fetch("?command=find&collection=dataList");
        let item = await response.text();
        //Any wird verwendet, da die Datenstruktur nicht bekannt ist
        let serverData = JSON.parse(item);
        let serverRockets = [];
        console.log("Promise wird ausgeführt");
        for (let key in serverData["data"]) {
            console.log(key);
            serverRockets.push(serverData["data"][key]);
        }
        return serverRockets;
    }
    Feuerwerksimulator.handleLoad = handleLoad;
    // Raketendaten werden in die Datenbank gespeichert
    async function SaveRocket(_rocket) {
        let query = new URLSearchParams(_rocket);
        query.append("command", "insert");
        query.append("collection", "dataList");
        query.set("data", JSON.stringify(_rocket));
        //JavaScript Objekt wird in einen String umgewandelt
        console.log("async function Save ");
        let response = await fetch(url + "?" + query.toString());
        //URl wird erstellt und an den Server geschickt
        let responseText = await response.text();
        if (responseText.includes("success")) {
            alert("Daten wurden gespeichert");
        }
        else {
            alert("Daten konnten nicht gespeichert werden");
        }
    }
    Feuerwerksimulator.SaveRocket = SaveRocket;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Database.js.map