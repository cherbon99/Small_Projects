const x = 2

try{
   x.toUpperCase();

} catch (err){
   console.log("oof" , err.messagem, err.name);
} finally{
   console.log("jeez you finally ended");
}