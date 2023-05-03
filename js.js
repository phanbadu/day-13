var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e) {

    var file = upload.files[0]

    if(!file) {
        return
    }

    if(!file.name.endsWith('.jpg')) {
        error.innerHTML =  `Hình ảnh phải thuộc định dạng jpg`
        return
    }
    else {
       error.innerHTML = `` 
    }

    if(file.size / (1024 * 1024) > 5) {
        error.innerHTML =  `Chỉ được upload ảnh < 5 MB`
        return
    }
    else {
       error.innerHTML = `` 
    }

    var img = document.createElement('img')

    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadend = function(e) {
        img.src = e.target.result
    }

    preview.appendChild(img)
})