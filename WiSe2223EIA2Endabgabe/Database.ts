namespace Feuerwerksimulator {

    export interface Database {

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
       
        let serverData: any = JSON.parse(item);
        let serverRockets: Rocket[] = [];
        console.log("async function Server ");

        for (let key in serverData["data"]) {
            console.log(key);
            let rocket: Rocket = new Rocket(serverData[key].name, serverData[key].particleAmount, serverData[key].color, serverData[key].size, serverData[key].lifetime);
            serverRockets.push(rocket);
        }
        return serverRockets;
    }

    // Raketendaten werden in die Datenbank gespeichert

    export async function handleSave(_rocket: Rocket): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>_rocket);
        query.append("command", "insert");
        query.append("collection", "dataList");
        query.set("data", JSON.stringify(_rocket));
        console.log("async function Save ");
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();


        if (responseText.includes("success")) {
            alert("Daten wurden gespeichert");
        }
        else {
            alert("Daten konnten nicht gespeichert werden");
        }
    }


}


