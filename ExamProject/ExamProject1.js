const currentUser = localStorage.getItem('currentUser')

$('#alert').css('display', 'none')
$('#alert2').css('display', 'none')

if(currentUser){
    let prevText = $('h1').text()
    $('h1').text(prevText + currentUser)
    $('#but').css('display', 'none')
    $('#buy').attr('disabled', false)
    $('#logout').css('display', 'inline-block')
    $('#komputers').show()
    $('#alert').show(),
    setTimeout(function () { $('#alert').hide(); }, 1000)
} else{
    $('#but').show()
    $('#buy').attr('disabled', true)
    $('#logout').hide()
    $('#komputers').hide()
}

$('#logout').click(function(){
    $('h1').text('User: ')
    $('#alert2').show(),
    setTimeout(function () { $('#alert2').hide(); }, 1000)
    $('#logout').css('display', 'none')
    $('#komputers').hide()
    $('#but').css('display', 'inline-block')
    $('#buy').attr('disabled', true)
})