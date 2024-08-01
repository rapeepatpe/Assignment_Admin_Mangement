export const CallGetApi = async (apipath = "https://test-api-py77dwlbxa-df.a.run.app/data") => {
    let resp = await fetch(apipath, {
        "method": "GET",
    }).catch(error => {
            return {
                status: 2500,
                data: 'error',
                description: null
            }
    });

    if (resp.ok) {
        let result = await resp.json();

        return result;
    }

}