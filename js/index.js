// No images or JS were harmed in the making of this pen



function myFunction(str){
	//alert(str)
formulariolleno();
}










        
      //   alert(  firebase.database().ref().child("carrocuatro").child("nombre").once('value'));

var mi="888";

  firebase.database().ref().child("ingeniero").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
   // myFunction(mi);
  //  document.getElementById("idingeniero").innerHTML = snapshot.val();
  });


  firebase.database().ref().child("descripcion").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
  //  document.getElementById("iddescripcion").innerHTML = snapshot.val();
  });


  firebase.database().ref().child("cumplimiento").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
  //  document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });
  

    firebase.database().ref().child("observaciones").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
  //  document.getElementById("idobservaciones").innerHTML = snapshot.val();
  });

      firebase.database().ref().child("contrato").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
  //  document.getElementById("idcontratono").innerHTML = snapshot.val();
  });

         firebase.database().ref().child("foto").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
   // document.getElementById("idfoto").src = String(snapshot.val());
  });
       
         firebase.database().ref().child("mapauno").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
    //document.getElementById("idmapauno").src = String(snapshot.val());
  });
//child("carrouno").
                firebase.database().ref().child("tres").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    var cuenta=0;
 //   mi=JSON.stringify(snapshot.val());
 mi=snapshot.val();
    //document.getElementById("idmapauno").src = String(snapshot.val());
   for (var ru in mi){
    if(mi[ru].age===1 &&mi[ru].fname==="Johni" && true &&true){console.log("carr "+mi[ru].fname);}
    //console.log("carr "+mi[ru]);
     //console.log("carr "+mi.[ru].logitud);
  //    console.log("carr "+mi.[ru].nombre);
  //  console.log("carr "+String(mi.logitud));
   // console.log("carr "+String(mi.nombre));


 }
  });





         firebase.database().ref().child("rtvmnsuno").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
 insertartextoenandroid(mi,"idbtms1");
   // document.getElementById("idfoto").src = String(snapshot.val());
  });


                  firebase.database().ref().child("rtvmnsdos").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
 insertartextoenandroid(mi,"idbtms1");
   // document.getElementById("idfoto").src = String(snapshot.val());
  });

   //     firebase.database().ref().child("foto").on('change', function(dataSnapshot) {location.reload();alert(777777); });
    
        
      // firebase.database().ref().child("uno").set("acasubiendo");
        
        function hablarandroid(){
       //  carrohabla
var mensajeuno=document.getElementById("idmesauno").value;

firebase.database().ref().child("carrouno").child("carrohabla").set(String(mensajeuno));
//alert(String(mensageuno));

firebase.database().ref().child("rtvmnsuno").set(String(mensajedoso));
       console.log("mi boton");}


function mesados(){

 //hacer  el diario formulario datos
       //     var person = {fname:"John", lname:"Doe", age:25}; 
      //firebase.database().ref().child("tres").push(person);
var mensajedoso=document.getElementById("idmesados").value;
//firebase.database().ref().child("dos").set(String(mensajedoso));
firebase.database().ref().child("rhablaandroid").set(String(mensajedoso));
firebase.database().ref().child("rtvmnsdos").set(String(mensajedoso));
//alert(String(mensageuno));
       console.log(mensajedoso);}



 firebase.database().ref("tres").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val()
//    document.getElementById("idcumplimiento").innerHTML = snapshot.val();
    console.log(" avca  "+ mi);
    for(var k in mi) {
   console.log(k, mi[k].age);
}
  });

function  formulariolleno(){

	var fingeniero=document.getElementById("idingeniero").value;
	firebase.database().ref().child("ingeniero").set(String(fingeniero));

		var fidcontrato=document.getElementById("idcontrato").value;
	firebase.database().ref().child("contrato").set(String(fidcontrato));
		var fiddescripcion=document.getElementById("iddescripcion").value;
	firebase.database().ref().child("descripcion").set(String(fiddescripcion));
		var fidcumplimiento=document.getElementById("idcumplimiento").value;
	firebase.database().ref().child("cumplimiento").set(String(fidcumplimiento));
		var fidobservaciones=document.getElementById("idobservacion").value;
	firebase.database().ref().child("observaciones").set(String(fidobservaciones));
	//firebase.database().ref().child("ingeniero").set(String(mensajedoso));
//alert(fingeniero);
}


function insertartextoenandroid(ms,idm){
	document.getElementById(idm).innerHTML =String(ms);
}





    function llamar_android(){

    	 Android.showToast("-10");
    }


