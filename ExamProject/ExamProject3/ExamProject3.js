let users = [
    {
        nameP: 'user1',
        password: 'user1',
        phone: '501-515-4555',
        computers: [
            {
                id: 1,
                name: 'name',
                mark: 'Asus',
                permanentMemory: 1,
                permamentMemoryType: 'HDD',
                ram: 16,
                cpu: 'intel core i7',
                gpu: 'rtx 2070',
                deepMemory: 160,
                description: 'tesviri',
                price: 721,
                new: 'no',
                videoCard: 4,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1TJ5BrBj0SgoUf9Jyhlm5WRE9QlrgtPmYw&usqp=CAU',
            }
        ],
    },
]


if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}


$('.place').on('input', function () {
    if (
        $('#name2').val().length >= 2 &&
        document.querySelector('#phone').checkValidity() &&
        $('#nameP').val().length >= 2 &&
        $('#password').val().length >= 2
    ) {
        $('#btn').attr('disabled', false)
    } else {
        $('#btn').attr('disabled', true)
    }
})


$('.alert').css('display', 'none')



$('#btn').click(function (event) {
    event.preventDefault()
    console.log(localStorage.getItem('users'))

    let localUsers = JSON.parse(localStorage.getItem('users'))

    let newUser = {
        nameP: $('#nameP').val(),
        password: $('#password').val(),
        phone: $('#phone'),
        computers: [],
    };


    let alreadyExcist = localUsers.some((user) => user.nameP === $('#nameP').val());


    if (alreadyExcist) {
        alert('This is user already registered');
    } else {
        users.push(newUser),
            localStorage.setItem('users', JSON.stringify(users)),
            $('.place').val(),
            $('.alert').show(),
            setTimeout(function () { $('.alert').hide(); }, 1000)
    }
})