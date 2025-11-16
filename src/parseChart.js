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
        // Skip empty lines early
        if (!element || element.length === 0) {
            continue;
        }
        
        if (element[0] === "[") { // is a field
            // More efficient: slice instead of chained replace
            field = element.slice(1, -1);
            if (field === "SyncTrack") {
                obj[field] = {};
            }
            else {
                obj[field] = [];
            }
            continue
        }
        if (element[0] !== "{") {
            element = element.trim();

            if (field === "SyncTrack") {
                // Parse the line more efficiently
                const parts = element.split(" ");
                /* at this point we have 4 fields:
                0: tick number
                1: equal sign (irrelevant)
                2: event type
                3: event value
                */
                const tick_number = parseInt(parts[0], 10);
                const event_type = parts[2];
                const event_value = parseInt(parts[3], 10);
                
                // Initialize object only if needed
                if (!obj[field][tick_number]) {
                    obj[field][tick_number] = {};
                }
                obj[field][tick_number][event_type] = event_value;
            }
            else {
                obj[field].push(element);
            }
        }

    }
    return obj;
}