export async function parseChart(chartText) {
    try {
        const response = await fetch(chartText);
        if (!response.ok) throw new Error("Network response was not ok");
        const chart = (await response.text()).split("\r\n");
        let obj = arrayToObject(chart)
        return obj;
    }
    catch (e) {
        console.error("Couldnt read song chart,", e);
        return null;
    }

}

function arrayToObject(arr) {
    const obj = {};
    let field;

    for (let element of arr) {
        if (element[0] == "[") { // is a field
            field = element.replace("[","").replace("]","");
            if (field == "SyncTrack") {
                obj[field] = {};
            }
            else {
                obj[field] = [];
            }
            continue
        }
        if (element[0] != "{") {
            element = element.trim();

            if (field == "SyncTrack") {
                element = element.split(" ");
                /* at this point we have 4 fields:
                0: tick number
                1: equal sign (irrelevant)
                2: event type
                3: event value
                */
                let tick_number = parseInt(element[0]);
                let event_type = element[2];
                let event_value = element[3];
                if (!obj[field][tick_number]) {
                    obj[field][tick_number] = {};
                }
                obj[field][tick_number][event_type] = parseInt(event_value);
            }
            else {
                obj[field].push(element.trim());
            }
        }

    }
    return obj;
}
