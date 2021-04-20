window.addEventListener("load", function (event) {
    var myapp = new Vue({
        el:"#myapp",
        data:{
            marvelheroes:[]
        },

        methods:{
            getAllHeroes(){

                let publicKey = "334f6995083e6612faa5f43a043880bf";
                let privateKey = "51208b8e615727f017de9314ba2e455e0e4d5b57";
                let time =  new Date().getTime();
                let hash = CryptoJS.MD5(time + privateKey + publicKey);
                let url = "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=" + time + "&apikey=" + publicKey + "&hash=" + hash;

                //alert(url);

                fetch(url)
                .then(response=>response.json())
                .then(data=>{
                    this.marvelheroes=data;
                })
            }
        }
    });
});