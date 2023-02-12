namespace Feuerwerksimulator {

    export interface Rocket {

        //JSON Datenstruktur
        [name: string]: {
            particleAmount: number;
            color: string;
            size: number;
            lifetime: number;
        };

    }

    let url: string = "https://webuser.hs-furtwangen.de/~pilshenn/Database/index.php";

    export async function handleLoad(): Promise<Rocket[]> {
        let response: Response = await fetch("?command=find&collection=dataList");
        let item: string = await response.text();
       //Any wird verwendet, da die Datenstruktur nicht bekannt ist
        let serverData: any = JSON.parse(item);
        let serverRockets: Rocket[] = [];
        console.log("Promise wird ausgeführt");

        for (let key in serverData["data"]) {
            console.log(key);
            serverRockets.push(serverData["data"][key]);
        }
        return serverRockets;
    }

    // Raketendaten werden in die Datenbank gespeichert

    export async function SaveRocket(_rocket: Rocket): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>_rocket);
        query.append("command", "insert");
        query.append("collection", "dataList");
        query.set("data", JSON.stringify(_rocket));
        //JavaScript Objekt wird in einen String umgewandelt
        console.log("async function Save ");
        let response: Response = await fetch(url + "?" + query.toString());
        //URl wird erstellt und an den Server geschickt
        let responseText: string = await response.text();


        if (responseText.includes("success")) {
            alert("Daten wurden gespeichert");
        }
        else {
            alert("Daten konnten nicht gespeichert werden");
        }
    }


}


