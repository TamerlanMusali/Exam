users = JSON.parse(localStorage.getItem('users'))

$('.alert').css('display', 'none')


$('form').on('submit', function (event) {
    event.preventDefault()


    let userExist = users.some(
        (user) =>
            user.nameP === $('#nameP').val() && user.password === $('#password').val()
    )


    if (userExist) {
        localStorage.setItem('currentUser', $('#nameP').val())
        $('.place').val()
        $('.alert').show(),
            setTimeout(function () {location.href="../ExamProject1.html", $('.alert').hide(); }, 1000 )
    } else {
        alert('Your password or Name is incorrect')
    }
})