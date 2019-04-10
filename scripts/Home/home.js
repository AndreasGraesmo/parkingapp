let main = new Vue({
    el: "main",
    data:{
        styleObjectRed:
            {color: 'red'}, 
        styleObjectGreen:  
            {color: 'green'}, 
            
        
        parking: [
            {   id: 1, 
                meterNum: 280, 
                meters: "m",
                streetName: "Breigata 3-5", 
                freeSpace:78, 
                totalSpace:"207",
                tid: "6 min",
                anlegg: "P-hus",
                type: "Korttidsparkering mot avgift og langtidsleie",
                pris: "kr. 27,- pr. påbegynte 30 min",
                open: "Døgnåpent",
                El: "Ladepunkter for Elbil",
                    
                    
                    
                 },
            
            {   id: 2, 
                meterNum: 300, 
                meters: "m",
                streetName: "Chr. Krohgs gate 1", 
                freeSpace:289, 
                totalSpace:"395"  ,
                   tid: "7 min",
                    anlegg: "P-hus",
                    type: "Korttidsparkering mot avgift og langtidsleie",
                    pris: "kr. 64,- pr. time",
                    open: "Døgnåpent",
                    El: "Ladepunkter for Elbil" },

            {   id: 3, 
                meterNum: "1,7", 
                meters: "km",
                streetName: "Storgata 32",
                freeSpace:18, 
                totalSpace:"150" ,
                    tid: "8 min",
                    anlegg: "P-hus",
                    type: "Korttidsparkering mot avgift",
                    pris: "kr. 79,- pr. time",
                    open: "Døgnåpent",
                    El: "Ingen ladepunkter for Elbil", },

            {   id: 4, 
                meterNum: "1,8", 
                meters: "km",
                streetName: "Dronning Eufemias gate 6", 
                freeSpace:90, 
                totalSpace:"200",
                    tid: "8 min",
                    anlegg: "P-hus",
                    type: "Korttidsparkering mot avgift og langtidsleie",
                    pris: "kr. 35/pr. påbegynte time",
                    open: "Døgnåpent",
                    El: "Ladepunkter for Elbil", },

            {   id: 5, 
                meterNum: "2,2",
                 meters: "km",
                 streetName: "Pilestredet Park 31", 
                 freeSpace:0,
                 totalSpace:"18",
                     tid: "8 min",
                     anlegg: "P-plass ute",
                     type: "Korttidsparkering mot avgift",
                     pris: "kr. 34 pr. time",
                     open: "Døgnåpent",
                     El: "Ingen ladepunkter for Elbil", },

            {   id: 6, 
                meterNum: "2,4", 
                meters: "km",
                streetName: "Munkedamsveien 15",
                freeSpace:212, 
                totalSpace:"230" ,
                    tid: "11 min",
                    anlegg: "P-hus",
                    type: "Korttidsparkering mot avgift og langtidsleie",
                    pris: "kr. 45/pr. pågebynte time",
                    open: "Døgnåpent",
                    El: "Ladepunkter for Elbil", },

            {   id: 7,
                 meterNum: "2,6", 
                 meters: "km",
                 streetName: "Essendrops gate 5", 
                 freeSpace:23, 
                 totalSpace:"160" ,
                     tid: "16 min",
                     anlegg: "P-hus",
                     type: "Korttidsparkering mot avgift og langtidsleie",
                     pris: "kr. 40 pr. time",
                     open: "06:00-Midnatt",
                     El: "Ladepunkter for Elbil",},

            {   id: 8, 
                meterNum: "4,3", 
                meters: "km",
                streetName: "Fridtjof Nansens vei 17-19", 
                freeSpace:0, 
                totalSpace:"30" ,
                    tid: "16 min",
                    anlegg: "P-plass ute",
                    type: "Korttidsparkering mot avgift",
                    pris: "kr. 30 pr. time",
                    open: "Døgnåpent",
                    El: "Ingen ladepunkter for Elbil", },
        ]
   
    },

    
});

$( document ).ready(function(){

    $(function(){
            $(".dropdown-list").hide();

            $('.info-img-fill').toggle();

        $( ".show-dropdown" ).on("click", function(){
           
            $(this).parent().next(".dropdown-list").toggle().css({borderTop: "1px dotted rgba(0, 0, 0, 0.295)"})
            $(this).children().closest('.info-img-fill').toggle('.info-img');
            $(this).children().closest('.info-img').toggle('.info-img-fill');
            
            
            
        })
        

    });

    $('.fav-img-fill').toggle();

    $('.favoritter').on("click", function() {
        $(this).children().closest('.fav-img-fill').toggle('.fav-img');
        $(this).children().closest('.fav-img').toggle('.fav-img-fill')
        
    });

});
