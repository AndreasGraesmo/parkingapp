let main = new Vue({
    el: "main",
    data:{
        dropdown: [],
        styleObject:  
            
            {color: 'green'}, 
        
        parking: [
            {   id: 1, 
                meterNum: 20, 
                meters: "m",
                streetName: "Hegdehausveien 30", 
                freeSpace:2, 
                totalSpace:"10",
                dropdown: [{id: 1, 
                    tid: "2 min",
                    type: "Elbil - P",
                    pris: "2 timer gratis"}] },
            
            {   id: 2, 
                meterNum: 110, 
                meters: "m",
                streetName: "Søndre Gate 6", 
                freeSpace:8, 
                totalSpace:"15"  ,
                dropdown: [{id: 2, 
                    tid: "2 min",
                    type: "Elbil - P",
                    pris: "2 timer gratis"}]},

            {   id: 3, 
                meterNum: 160, 
                meters: "m",
                streetName: "Brenneriveien 9",
                freeSpace:13, 
                totalSpace:"30" ,
                dropdown: [{id: 3, 
                    tid: "2 min",
                    type: "Elbil - P",
                    pris: "2 timer gratis"}] },

            {   id: 4, 
                meterNum: 360, 
                meters: "m",
                streetName: "Grønland 3", 
                freeSpace:20, 
                totalSpace:"20",
                dropdown: [{id: 4, 
                    tid: "2 min",
                    type: "Elbil - P",
                    pris: "2 timer gratis"}]  },

            {   id: 5, 
                meterNum: 420,
                 meters: "m",
                 streetName: "Seilduksgata 17", 
                 freeSpace:0,
                 totalSpace:"8",
                 dropdown: [{id: 5, 
                     tid: "2 min",
                     type: "Elbil - P",
                     pris: "2 timer gratis"}]  },

            {   id: 6, 
                meterNum: 800, 
                meters: "m",
                streetName: "Ullevålsveien 12",
                freeSpace:16, 
                totalSpace:"25" ,
                dropdown: [{id: 6, 
                    tid: "2 min",
                    type: "Elbil - P",
                    pris: "2 timer gratis"}] },

            {   id: 7,
                 meterNum: 1, 
                 meters: "km",
                 streetName: "Solligata 2", 
                 freeSpace:23, 
                 totalSpace:"40" ,
                 dropdown: [{id: 7, 
                     tid: "2 min",
                     type: "Elbil - P",
                     pris: "2 timer gratis"}]  },

            {   id: 8, 
                meterNum: 2, 
                meters: "km",
                streetName: "Niels Juels Gate 29", 
                freeSpace:0, 
                totalSpace:"20" ,
                dropdown: [{id: 8, 
                    tid: "2 min",
                    type: "Elbil - P",
                    pris: "2 timer gratis"}] },
        ]
       /* dropdown:
        [
            {id: 1, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},
            
            {id: 2, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},

            {id: 3, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},
            
            {id: 4, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},

            {id: 5, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},

            {id: 6, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},

            {id: 7, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},

            {id: 8, 
            tid: "2 min",
            type: "Elbil - P",
            pris: "2 timer gratis"},

        ],
*/
       
    

}

});



$(function(){
    

    $( ".show-dropdown" ).on("click", function(){
        
            $(".dropdown").show();
        
    })
    

})
