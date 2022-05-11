console.log(this);
conso1e.log(this === module.exports);

function a(){
    console.log(this === global);
}

a();