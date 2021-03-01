score=0;
function check(){
    var alphab=/^[A-Za-z]+$/
    var nums=/^[0-9]+$/
    var age = document.getElementById("age").value;
    var nom= document.getElementById("nom").value;
    var prenom= document.getElementById("prenom").value;
    var adresse= document.getElementById("adresse").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    if (nom.length < 3){                            //nom cds
        alert("Nom est inférieure à 3 caractéres!");
        return false
    }
    for(let i=0;i<nom.length;i++){
        if(!(nom[i].match(alphab))){
            alert("Nom est non alphabetique!");
            return false;
        }
    }                                          //
    if (prenom.length < 3){                            //prenom cds
        alert("Prénom est inférieure à 3 caractéres!");
        return false
        }
    for(let i=0;i<prenom.length;i++){
        if(!(prenom[i].match(alphab))){
            alert("Prénom est non alphabetique!");
            return false;
        }
    }                                          //
    var ledate = new Date(age);
    var ledate= ledate.getFullYear()
    var mondate = new Date();
    var mondate= mondate.getFullYear()
    if (ledate.isNaN){
    alert("Entrez une date de naissance!");
    return false;
    }
    if (ledate>mondate){
        alert("Date invalide!");
        return false;
    }
    var ageE = mondate - ledate
    if (adresse.length < 10){
        alert("La taille minimale de l'adresse est inférieure à 10 caractéres!");
        return false
        }
    
    if(tel.length != 8){
        alert("Le nombre de telephone n'est pas composé de 8 chiffres!");
        return false;
    }
    if(tel.charAt(0)<=1){
        alert("Le nombre de telephone est inférieure ou égale à 1");
        return false;
        }
    var ch1= email.substring(0,email.lastIndexOf("@"));
    var ch2= email.substring(email.lastIndexOf("@")+1,email.lastIndexOf("."));
    var ch3= email.substring(email.lastIndexOf("."));
    ch1=ch1.toLowerCase()
    ch2=ch2.toLowerCase()
    if (ch1.length < 3){
        alert("email invalide");
        return false
        }
    for(let i=0;i<ch1.length;i++){
        if(!(ch1[i].match(alphab) || ch1[i].match(nums))){
            alert("L'email n'est pas alphanumérique!");
            return false;
        }
    }
    if (ch2.length < 3){
            alert("email invalide");
            return false
        }
    for(let i=0;i<ch2.length;i++){
        if(!(ch2[i].match(alphab) || ch2[i].match(nums))){
            alert("L'email n'est pas alphanumérique!");
            return false;
        }
    }
    if (ch3.length <2 || ch3.length > 4){
        alert("email invalide");
        return false 
        }
        var mauxtete = document.getElementById("mauxTeteOui");//1
        var threePts = document.querySelectorAll(".threepts");
        var twoPts = document.querySelectorAll(".twopts");
        var fivePts = document.querySelectorAll(".fivepts");
        var chronique = document.getElementById("chronique")
        for (i=0;i<threePts.length;i++){
            if (threePts[i].checked)
            score += 3
        }
        for (i=0;i<twoPts.length;i++){
            if (twoPts[i].checked)
            score += 2
        }
        for (i=0;i<fivePts.length;i++){
            if (fivePts[i].checked)
            score += 5
        }
        if(mauxtete.checked)
            score +=1
        var tempOui=document.getElementById("tempOui"); //msg
        var touxSeche=document.getElementById("touxSéche");
        var fatiOui=document.getElementById("fatiOui");
        var touxReguliere=document.getElementById("touxRéguliére");
        var goutOui=document.getElementById("goutOui");
        var mauxGorgeOui=document.getElementById("mauxGorgeOui");
        var diffRespireOui=document.getElementById("diffRespireOui");
        var douleursOui=document.getElementById("douleursOui");
        var perteOui=document.getElementById("perteOui");
        msg= ""
        if (tempOui.checked)
        msg += "Est-ce que votre température corporelle a dépassée 38° ?: Oui<br>";
        if(fatiOui.checked)
        msg +="Est-ce que vous vous sentez plus ou moins fatigué récemment ?: Oui<br>";
        if(touxSeche.checked)
        msg +=" Avez-vous de la toux ? Quelle sorte ?: Toux Séche<br>";
        if(touxReguliere.checked)
        msg +=" Avez-vous de la toux ? Quelle sorte ?: Toux Réguliére<br>";
        if(diffRespireOui.checked)
        msg +="Avez-vous eu des difficultés à respirer ou un essoufflement ?: Oui<br>";
        if(douleursOui.checked)
        msg +="Avez-vous eu des douleurs ou pressions thoraciques ?: Oui<br>";
        if(perteOui.checked)
        msg +="Avez-vous eu perte de la parole ou du mouvement ?: Oui<br>";
        if(goutOui.checked)
        msg +="Avez-vous eu une perte du goût de l’odorat ?: Oui<br>";
        if(mauxGorgeOui.checked)
        msg +="Avez-vous des maux de gorge ?: Oui<br> ";
        if(mauxtete.checked)
        msg +="Avez-vous des maux de tête ?: Oui<br> ";
        ls= window.localStorage
        ls.setItem("score",score);
        ls.setItem("msg",msg);
        ls.setItem("chronique",chronique)
        ls.setItem("age",ageE)
        window.open("results.html","_self")
}
