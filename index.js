const navCol=document.querySelector('.nav_col.prueba')
const masSel=document.getElementById('claro_sel')
const navBtm=document.querySelector('.navitm')

const menuT=()=>{
    fetch('http://localhost:3000/link')
	.then(r=>r.json())
    .then(data=>{
        console.log(data)
        let navItems=''
        data.map((item)=>{
        navItems+=`
        <li><a href="#">${item.texto}</a></li>`
    })
    navCol.innerHTML=navItems
    })
    .catch((e)=>{console.log(e)})
}

const masC=()=>{
    fetch('http://localhost:3000/masClaro')
    .then(r=>r.json())
    .then(data=>{
        let selectI=''
        data.map((i)=>{
            selectI+=`<option value="uno">${i.texto}</option>`
        })
        masSel.innerHTML=selectI
    })
    .catch((e)=>console.log(e))
}

const menuTwo=()=>{
    fetch('http://localhost:3000/nav-btm')
    .then(r=>r.json())
    .then(d=>{
        console.log(d)
        let navT=''
        d.map((a)=>{
            navT+=`<span>${a.texto}</span>`
        })
        navBtm.innerHTML=navT
    })
    .catch((e)=>console.log(e))
}


const renderHTML=()=>{
    menuT()
    masC()
    menuTwo()
}

renderHTML()
