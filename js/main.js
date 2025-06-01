document.getElementById( "submitBtn" ).addEventListener( "click", function(e){
    e.preventDefault();

    let selectedRating = document.querySelector( 'button[name="rating"].selected' );

    if( !selectedRating ){
        document.querySelector( '.button-grp' ).classList.add( "no-rating-selected" );
    } else {
        document.getElementById( "customerRating" ).innerHTML = selectedRating.value;
        document.getElementById( "ratingStateContainer" ).style.display = "none";
        document.getElementById( "thankYouStateContainer" ).style.display = "block";
    }

    return false;
});

const ratingButtons = document.getElementsByName( "rating" );
// console.log(`ratingButtons`, ratingButtons)

for( let i=0; i < ratingButtons.length; i++ ){
    let elem = ratingButtons[i];

    // console.log(`elem ${i}`, elem)

    elem.addEventListener( "click", function(e){ 
        clearSelectedRating();

        e.target.classList.add( "selected" );
    });
}

function clearSelectedRating(){
    document.querySelector( '.button-grp' ).classList.remove( "no-rating-selected" );

    for( let i=0; i < ratingButtons.length; i++ ){
        let elem = ratingButtons[i];

        elem.classList.remove( "selected" );
    };
}