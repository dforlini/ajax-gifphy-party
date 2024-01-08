$(document).ready(function (){
    console.log("Let's get this party started!");
function addGifToPage(gifUrl){
    $('#gif-container').append('<img src="' + gifUrl + '" alt=GIF"/>');
}
 $('form').submit(function(event){
    event.preventDefault();
        const searchTerm = $('#search-term').val();
        axios.get('https://api.giphy.com/v1/gifs/search',{
            params: {
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',
                q: searchTerm,
                limit: 1
            }
        }).then(function(response){
             console.log("API Response:", response);
             if(response.data.data.length === 0){
                alert("Please try again! \u{1F642}");
             }else{
            const gifUrl = response.data.data[0].images.original.url;
            addGifToPage(gifUrl);
             }
        }).catch(function(erorr){
            console.log(erorr);
        });
    });
    $('#clear-button').click(function(){
        $('#gif-container').empty();
    });
});

