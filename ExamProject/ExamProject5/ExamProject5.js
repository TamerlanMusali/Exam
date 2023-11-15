const users = JSON.parse(localStorage.getItem('users'))

let computers = []

for (let user of users) {
    computers.push(...user.computers)
}

const allTabPanes = document.querySelectorAll('.tab-pane')


for (let tabPane of allTabPanes) {
    for (let user2 of users) {
        for (let comp2 of computers) {
            if (tabPane.id === comp2.mark) {
                tabPane.innerHTML += `
            <div class="card w-25">
<img src="${comp2.img}" alt="">
<div class="card-body">
<p class="pp">name:${comp2.name}</p>
<p class="pp">description:${comp2.description}</p>
<p class="pp">price:${comp2.price}</p>
<p class="pp">new:${comp2.new}</p>
<p class="pp">phoneNumber:${user2.phone}</p>
<button id="${comp2.id}B" data-bs-toggle="modal" data-bs-target="#exampleModal3" type="button" id="detal" class="btn btn-primary">В деталях</button>
</div>
</div>        
`
            }
        }
    }
}

let id


$('.tab-content').click(function (e) {
    if (e.target.innerHTML === 'В деталях') {
        id = e.target.id
        const currentDetal = computers.find(comp2 => comp2.id + 'B' === id)
                
                    $('.modal-body').html('')
                    $('.modal-body').html($('.modal-body').html() + `
        <div class="card">
        <div class="img3">
        <img src="${currentDetal.img}" alt="">
</div>
<div class="card-body">
    <p class="ppp" id="name2">Name:${currentDetal.name}</p>
    <p class="ppp" id="description2">Description:${currentDetal.description}</p>
    <p class="ppp" id="price2">Price:${currentDetal.price + ' Azn'}</p>
    <p class="ppp" id="phone3">Phone:${currentDetal.Phone}</p>
    <p class="ppp" id="new2">New:${currentDetal.new}</p>
    <p class="ppp" id="ram2">Ram:${currentDetal.ram + ' GB'}</p>
    <p class="ppp" id="cpu2">CPU:${currentDetal.centralProcessor}</p>
    <p class="ppp" id="permanentMemory2">Permament memory:${currentDetal.permanentMemory + ' GB'}</p>
    <p class="ppp" id="permanentMemoryType2">Permament memory type:${currentDetal.permanentMemoryType}</p>
    <p class="ppp" id="operatingSystem2">Operating system:${currentDetal.operatingSystem}</p>
    <p class="ppp" id="videoCard2">Video card:${currentDetal.videoCard + ' GB'}</p>
</div>
        `
                    )
    }
})