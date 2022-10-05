function countDown(number) {
    if (number > 0) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (number) {
                    // console.log(number)
                    screen +=number + '<br>'
                    document.getElementById("result").innerHTML = screen
                    number--
                    if (number >= 0) {
                        return countDown(number)
                    } else resolve()
                } else reject()
            }, 1000)
        })
    } else if (number == 0) {
        setTimeout(() => {
            screen += 'Happy new year' + '<br>'
            document.getElementById("result").innerHTML = screen
        }, 1000)
    } else alert("Enter number")
}

let screen =''
function init(){
    let number = document.getElementById("input").value;
    screen = ''
    document.getElementById("result").innerHTML = screen
    // console.log(number)
    countDown(number)
        .then()
        .catch(() => {
            console.log('Found')
        })
}




