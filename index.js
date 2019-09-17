
let btn = document.getElementById('addList');
 
btn.onclick = function(){
let inp = document.querySelector('.listfeaid');
let ul = document.querySelector('#ul')
   
if(inp.value ===''){
           alert("You must write something!")
        }else{
            let li = document.createElement('li');            
            li.setAttribute('class', 'liElem')
            ul.append(li);
            let text = document.createElement("span");
            text.append(inp.value)
           li.append(text);
          let closeButton = document.createElement('button')
            li.appendChild(closeButton);
            closeButton.classList = 'closer';
           closeButton.innerHTML = 'x';
             inp.value = "";
        closeButton.onclick = function(){
            closeButton.parentElement.remove();
            }
        } 
}
    //  click to check li element             
   let list = document.querySelector('UL')
    list.addEventListener('click', function(event){
   if(event.target.tagName === 'LI'){
       let that = event.target;
    event.target.classList.toggle('checked');
    that.firstChild.classList.toggle("line");
      } 
}, false);



















