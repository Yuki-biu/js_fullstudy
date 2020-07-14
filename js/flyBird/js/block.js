function Block() {
    this.upDivWrap = null
    this.downDivWrap = null
    this.downHeight = baseObj.randomNum(0,150)
    this.gapHeight = baseObj.randomNum(150,160)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    // 用生成div的方法来放管道
    this.createDiv = function(url, height, posistionType, left, top) {
        var newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height + 'px'
        newDiv.style.position = posistionType
        newDiv.style.left = left + 'px'
        newDiv.style.top = top + 'px'
        newDiv.style.backgroundImage = url
        return newDiv
    }

    this.createBlock = function() {
        var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight)
        var upDiv2 = this.createDiv('url(img/up_pipe.png)', 60)
        this.upDivWrap = this.createDiv(null, null, 'absolute', 450, 0)
        this.upDivWrap.appendChild(upDiv1)
        this.upDivWrap.appendChild(upDiv2)

        jsWrapBg.appendChild(this.upDivWrap)
    }
}