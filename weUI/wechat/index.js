let send = document.getElementById('send')
let contentItems = document.getElementById('content-items')

send.addEventListener('click', function() {
    // console.log(111)
    let li = document.createElement('li')
    li.setAttribute('class', 'content-item')

    let divPic = document.createElement('div')
    divPic.setAttribute('class', 'pic')
    li.appendChild(divPic)

    let img = document.createElement('img')
    img.setAttribute('src', './images/user.jpg')
    divPic.appendChild(img)

    let divMessage = document.createElement('div')
    divMessage.setAttribute('class', 'message')
    li.appendChild(divMessage)

    let pName = document.createElement('p')
    pName.setAttribute('class', 'name')
    let pNameText = document.createTextNode('蜗牛')
    pName.appendChild(pNameText)
    divMessage.appendChild(pName)

    let pDetail = document.createElement('p')
    pDetail.setAttribute('class', 'detail')
    let pDetailText = document.createTextNode('被拍了拍')
    pDetail.appendChild(pDetailText)
    divMessage.appendChild(pDetail)

    contentItems.appendChild(li)
    
    console.log(li)
})