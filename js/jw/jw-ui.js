var jw_ui_elements = document.getElementsByClassName('jw_ui');
//console.log(ui_elements);

//var evt;

window.onload = function(){
//    console.log('onload triggered');
    for(i=0;i<jw_ui_elements.length;i++){    
//        jw_ui_elements[i].firstElementChild.addEventListener('transitionend', toggle_display);
//        console.log('jw_ui_elements['+i+'].firstElementChild');
//        console.log(jw_ui_elements[i].firstElementChild);
    }
}

for(i=0;i<jw_ui_elements.length;i++){
    jw_ui_elements[i].setAttribute('data-jwui-original-height',jw_ui_elements[i].offsetHeight);
    jw_ui_elements[i].setAttribute('data-jwui-index',i);
    jw_ui_elements[i].style.height = jw_ui_elements[i].offsetHeight+'px';
//    console.log('height = ' + jw_ui_elements[i].offsetHeight);
//    jw_ui_elements[i].addEventListener("click", heightChange); // this works
    jw_ui_elements[i].previousElementSibling.classList.add('jw_ui_controller'); // this works
    
    jw_ui_elements[i].previousElementSibling.addEventListener("click", dothingstonextSibling); // this works
    
    jw_ui_elements[i].previousElementSibling.insertAdjacentHTML('afterbegin', '<span class="arrow-right"></span>');
    
    jw_ui_elements[i].addEventListener("click", dothingstoParent);
    
//    jw_ui_elements[i].nextElementSibling.firstElementChild.addEventListener('transitionend', 
//     function( event ) { 
//         alert( "Finished transition!" ); 
//     }, false );
        
    if(i%2 == 0){
//        dashedLine();
//        console.log('jw_ui_elements[' + i + ']');
//        console.log(jw_ui_elements[i]);
//        console.log('jw_ui_elements[i].nextElementSibling');
//        console.log(jw_ui_elements[i].nextElementSibling);
//        console.log('jw_ui_elements[i].nextElementSibling.firstElementChild');
//        console.log(jw_ui_elements[i].nextElementSibling.firstElementChild);
//        console.log('jw_ui_elements[i].firstChild');
//        console.log(jw_ui_elements[i].firstChild);
//        console.log('jw_ui_elements[i].firstElementChild');
//        console.log(jw_ui_elements[i].firstElementChild);
        jw_ui_elements[i].classList.add('jw_ui_closed');
    }
}

for(i=0;i<jw_ui_elements.length;i++){
//    console.log('jw_ui_elements[' + i + '].previousElementSibling');
//    console.log(jw_ui_elements[i].previousElementSibling); // these are the things you click on
//    console.log(jw_ui_elements[i].previousElementSibling.firstChild); // these have the arrow
//    console.log(jw_ui_elements[0].previousElementSibling.firstChild.attributes); // NamedNodeMap [ class="arrow-right" ]
    if(jw_ui_elements[i].classList.contains('jw_ui_closed')){
//        console.log('jw_ui_elements ['+i+'] contains class of jw_ui_closed'); // these ARE the droids you're looking for
    }
    // below, it works
//    if(jw_ui_elements[i].previousElementSibling.firstChild.classList.contains('arrow-right')){
//        console.log('i found a firstChild with class arrow-right');
//    }
    
    if(!jw_ui_elements[i].classList.contains('jw_ui_closed')){
        jw_ui_elements[i].previousElementSibling.firstChild.classList.remove('arrow-right');
        jw_ui_elements[i].previousElementSibling.firstChild.classList.add('arrow-down');
    }
}

function toggle_display(evt){
    console.log('toggle_display function triggered');
//    evt.classList.toggle('display_none'); // undefined
    console.log(evt.target);
    evt.target.classList.toggle('display_none');
}

function heightChange(evt){
//    console.log('it worked');
    console.log(evt); // this does work now
//    console.log(evt.relatedTarget.clientHeight); // null
//    console.log(evt.relatedTarget); // null
//    console.log(evt.clientHeight); // undefined
    console.log(evt.target.clientHeight); // OMFG this works!
}

function dothingstonextSibling(evt){

//    evt.target.nextElementSibling.classList.toggle('jw_ui_display_none'); // this works
    var next_sib = evt.target.nextElementSibling;
//    var next_sib = evt.target.firstElementChild;  // nope
    var original_height;
    original_height = parseInt(next_sib.getAttribute('data-jwui-original-height')); // this works
//    console.log(original_height);
//    console.log("original_height.typeof = " + typeof original_height);
    // console.log(evt.target.childNodes[0]);
    evt.target.childNodes[0].classList.toggle('arrow-right');
    evt.target.childNodes[0].classList.toggle('arrow-down');
    // no matter how small the incrementer, it goes super fast
//    for(i = 0; i > -original_height; i -= 0.01){
//        next_sib.firstElementChild.style.top = i+'px';
//    }
//    next_sib.firstElementChild.style = "top: -100px";  // doesn't honor transition
//    next_sib.firstElementChild.addEventListener( 
//     'transitionend', 
//     function( event ) { 
//         alert( "Finished transition!" ); 
//     }, false );
//    next_sib.firstElementChild.classList.toggle('jw_ui_closed'); // targets the wrapper
    next_sib.classList.toggle('jw_ui_closed'); // targets jw_ui
//    next_sib.classList.toggle('jw_ui_closed'); // nope
}

function test_alert(){
    alert('Finished!');
}

// dothingstoParent was for testing & learning purposes
function dothingstoParent(evt){
//    console.log('parentElement = '+ evt.target.parentElement); // must use target.parentElement, not just parentElement
//    console.log(evt.target.parentElement); // must use target.parentElement, not just parentElement
//    console.log(evt.target.parentNode);
//    console.log('here is the previousElementSibling');
//    console.log(evt.target.previousElementSibling); // previousElementSibling is the one you want; it gives you all the node properties (node properties is my own made up term)
//    console.log('here is the previousSibling');
//    console.log(evt.target.previousSibling);  // gives you some of what you want, but its weird
}

