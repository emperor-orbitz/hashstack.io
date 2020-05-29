//OTHER BLOG POSTS FEATURED HERE


//random interests
function interests(category) {
    $.ajax({
        type: "GET",
        url: '/user/blog/follow/other_interests',
        headers: {
            'Accept': 'application/json',

        },
        data: { category },

        success: function (result) {

            if(result.message== "Database is empty"){
                var interests ="";

                $(".random-interests")[0].innerHTML = `<p class="ml-3" style="text-align:center">Read interesting stories like this <a href="/stories" target="__blank" >here </a></p>`

            }
            else{
                var interests ="";
            
                result.message.forEach(element => {
                    
                    interests+= `
                    <div class="card">
                    <img src="${element.featured_image}" class="card-img-top" alt="${element.title}">
                    <div class="card-body">
                    <h5 class="card-title"><a target="__blank" href="${element.post_link}">${element.title}</a></h5>
                    <p class="card-text">${element.description==''?'No description':element.description}</p>
                    <p class="card-text"><small class="text-muted">${element.updatedAt}</small></p>
                    </div>
                    </div>`
                });
                
        
               $(".random-interests")[0].innerHTML = interests
                   
    
            }
         

        },


        error: function (err) {
            alert("error");
            console.log(err)
        }
    })


}

$(document).ready(function (ev) {
    //alert($("#interest-category").val())
    interests($("#interest-category").val())
})