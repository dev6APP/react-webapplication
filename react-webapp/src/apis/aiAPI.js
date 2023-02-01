const baseUrl = "https://project4dev6.loca.lt/";
const imagePlusStraberries = "api/data-strawberry?";

class AiAPI {
    static async getResultFromBase64(base64String) {
        let url = baseUrl + imagePlusStraberries;
        
        let data = await fetch(url, { method: 'POST', headers: { Accept: '*/*', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}, body: JSON.stringify({"image": base64String}),})
            .then((res) => res.json())
            .then((data) => data.result)
            .then((consolea) => console.log(consolea))
        return data;
    }
}

export default AiAPI;