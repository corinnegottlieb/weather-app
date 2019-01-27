
class TempManager {

    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let db = await $.get(`/cities`)
        this.cityData = db
        // this.cityData = db || []
        // these are all the same but don't need emty array because find function always returns array
        // if (db) {
        //     this.cityData = db
        // }
    }


    async getCityData(cityName) {
        let data = await $.get(`/city/${cityName}`)
        let city = {
            name: data.location.name,
            temperature: data.current.temp_f,
            condition: data.current.condition.text,
            conditionPic: data.current.condition.icon,
            updatedAt: data.current.last_updated
        }
        this.cityData.push(city)
    }

    saveCity(cityName) {
        let city = this.cityData.find(c => c.name === cityName)
        console.log(city)
        $.post(`/city`, city, function (response) {
            console.log(`Saved city`)
        })
    }

    removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            method: `delete`,
            success: function (response) {
            console.log(response)
        }})
    }

    // updateCity(cityName) {
    //     $.ajax({
    //         url: `/city/${cityName}`,
    //         method: `put`,
    //         success: function(response){
    //             console.log(response)

    //         }
    //     })
    // }

}


