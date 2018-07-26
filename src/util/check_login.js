async function validate () {

    window.dev = {
        username: 'kenic',
        token: 'fggggggggggggg'
    }

    /*axios.post('http://localhost:8080/')
    .then(function(res){
        debugger;
        if (res.code == 0 ) {
          window.location="/home"  
        } else {
          console.log(res.msg)
        }
    })*/
}

export default function checkLogin () {
    validate();
}
