$(document).ready(function {}){
    $('.contact-submit').click(function (event){
        event.preventDefault()
        
        var name=$('.contact-name').val()
        var email=$('.contact-email').val()
        var message=$('.contact-message').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        if(name.length>=2){
            
        }else{
            statusElm.append('<div>Please Enter a valid Name</div>')
        }
        
        if(email.length>5&&email.includes('@')&&email.includes('.')){
            
        }
        else{
            statusElm.append('<div>Please Enter a valid Email Address</div>')
        }
        
        if(message.length>=2){
            
        }else{
            statusElm.append('<div>Please Enter a valid Message</div>')
        }
    })
}