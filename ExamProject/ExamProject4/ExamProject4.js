const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')

let computers = users.find(user => user.nameP === currentUser).computers

let edit = false

function updateSite() {
    $('tbody').html('')

    for (let comp2 of computers) {
        $('tbody').html($('tbody').html() + `
        <tr class='tr'>
        <td>${comp2.id}</td>
        <td>${comp2.name}</td>
        <td><img data-bs-toggle="modal" data-bs-target="#exampleModal2" src='${comp2.img}' type="button" class="compImg"></td>
        <td>${comp2.price + ' Azn'}</td>
        <td>
<button id="${comp2.id}D" class="btn btn-danger">Delete</button>
<button data-bs-toggle="modal" data-bs-target="#exampleModal" id="${comp2.id}E" class="btn btn-primary">Edit</button>

</td>
        </tr>`)
    }
};







$('#6').on('input', function(){
    $('#modalImg').attr('src', $(this).val())
})

updateSite()


$('table').click(function(e){
    if(e.target.tagName === 'IMG'){
$('.img2').attr('src', e.target.src)
    }
})


$('#modal').click(function () {
    $('.modal').addClass('active')
})


$('#close').click(function () {
    $('.modal').removeClass('active')
})


$('#reset').click(function(e){
    $('#1').val(''),
            $('#2').val(''),
            $('#3').val(''),
            $('#4').val(''),
            $('#5').val(''),
            $('#6').val(''),
            $('#7').val(''),
            $('#8').val(''),
            $('#9').val(''),
            $('#10').val(''),
            $('#11').val(''),
            $('#12').val('')
})


$('#save').click(function () {
    if (!edit) {
        let newComp = {
            id: Date.now(),
            mark: $('#1').val(),
            name: $('#2').val(),
            price: $('#3').val(),
            description: $('#4').val(),
            new: $('#5').val(),
            img: $('#6').val(),
            ram: $('#7').val(),
            centralProcessor: $('#8').val(),
            permanentMemory: $('#9').val(),
            permanentMemoryType: $('#10').val(),
            operatingSystem: $('#11').val(),
            videoCard: $('#12').val(),
        }



            $('#1').val(),
            $('#2').val(''),
            $('#3').val(''),
            $('#4').val(''),
            $('#5').val(),
            $('#6').val(''),
            $('#7').val(''),
            $('#8').val(''),
            $('#9').val(''),
            $('#10').val(),
            $('#11').val(''),
            $('#12').val(''),


            computers.push(newComp)

        users.find(user => user.nameP === currentUser).computers = computers

        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
        $('.modal').removeClass('active')
    } else {
        edit = false
        const index = computers.findIndex(comp2 => comp2.id + 'E' === id)
        computers[index] = {
            id: computers[index].id,
            mark: $('#1').val(),
            name: $('#2').val(),
            price: $('#3').val(),
            description: $('#4').val(),
            new: $('#5').val(),
            img: $('#6').val(),
            ram: $('#7').val(),
            centralProcessor: $('#8').val(),
            permanentMemory: $('#9').val(),
            permanentMemoryType: $('#10').val(),
            operatingSystem: $('#11').val(),
            videoCard: $('#12').val(),
        }


        users.find(user => user.nameP === currentUser).computers = computers

        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
    }
})


let id

$('table').click(function (ivent) {
    if (ivent.target.innerHTML === 'Delete') {
        let a = confirm('Вы уверены стереть компьютер?')
        if(a){
            id = ivent.target.id
        computers = computers.filter(comp2 => comp2.id + 'D' !== id)


        users.find(user => user.nameP === currentUser).computers = computers
        localStorage.setItem('users', JSON.stringify(users))
        updateSite()
        } 
    } else if (ivent.target.innerHTML === 'Edit') {
        edit = true
        id = ivent.target.id
        const currentComp = computers.find(comp2 => comp2.id + 'E' === id)



        $('#1').val(currentComp.mark),
        $('#2').val(currentComp.name),
        $('#3').val(currentComp.price),
        $('#4').val(currentComp.description),
        $('#5').val(currentComp.new),
        $('#6').val(currentComp.img),
        $('#7').val(currentComp.ram),
        $('#8').val(currentComp.centralProcessor),
        $('#9').val(currentComp.permanentMemory),
        $('#10').val(currentComp.permanentMemoryType),
        $('#11').val(currentComp.operatingSystem),
        $('#12').val(currentComp.videoCard)
}
})