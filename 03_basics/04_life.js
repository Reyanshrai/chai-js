(function chai (){
    console.log('DB connected');
})();

// iife usses for golbal varilble polluton 

( (name)=>{
    console.log('two connected ',name)
})('Reyanhs')