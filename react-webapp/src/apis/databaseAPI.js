const baseUrl = "https://dotnetbackendproject.azurewebsites.net/api";

class DbAPI {
    static async getAccount(id) {
        let data = await fetch(baseUrl + "/fieldOwner/" + id)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }

    static async getDataByYear(fieldOwnerId, year) {
        let data = await fetch(baseUrl + "/photoData/fieldOwner/" + fieldOwnerId + "/year/" + year)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }

    static async adminGetFieldOwners() {
        let data = await fetch(baseUrl + "/FieldOwner")
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }
    
    static async adminGetFieldOwnerById(id) {
        let data = await fetch(baseUrl + "/FieldOwner/" + id)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }

    static async farmsByFieldOwnerId(id) {
        let data = await fetch(baseUrl + "/Farm/fieldOwner/" + id)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }

    static async getFarmById(id) {
        let data = await fetch(baseUrl + "/Farm/" + id)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }

    static async getWorkersByFarmId(id) {
        let data = await fetch(baseUrl + "/Worker/farm/" + id)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }

    static async getWorkerById(id) {
        let data = await fetch(baseUrl + "/Worker/" + id)
            .then((res) => res.json())
            .then((data) => data)
        return data;
    }
    
}

export default DbAPI;
