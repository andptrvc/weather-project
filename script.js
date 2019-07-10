var vue = new Vue({
    el: "#vue",
    data: {
        weather: [],
        search: '',
        description: [],
        lightRain: "lightRain",
        brokenClouds: "brokenClouds",
        sunny: "sunny",
        scattered: "scattered",
        sunnyDay: "sunnyDay",
        overcast: "overcast",

    },
    created: function () {
        this.getData();
    },
    methods: {
        getData() {
            var dataFetch = fetch("https://api.myjson.com/bins/i8run", {
                    method: "GET",
                })
                .then(response => response.json())
                .then(function (json) {
                    vue.weather = json.list;

                })
        },
        setBackground: function () {

            for (var i = 0; i < vue.weather.length; i++) {
                if (vue.weather[i].description = "light rain") {

                }
            }
        }

    },
    computed: {
        weatherFinder: function () {
            var self = this;
            return this.weather.filter(function (cust) {
                    return (cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0) || (cust.weather[0].description.toLowerCase().indexOf(self.search.toLowerCase()) >= 0);
                }

            )
        }
    }
});
