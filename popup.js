window.onload = function () {
  var tablecookie = document.cookie.split(";");
  var nomcookie = "user=";
  var valeurcookie = "";
  for (i = 0; i < tablecookie.length; i++) {
    if (tablecookie[i].indexOf(nomcookie) != -1) {
      valeurcookie = tablecookie[i].substring(
        nomcookie.length + tablecookie[i].indexOf(nomcookie),
        tablecookie[i].length
      );
    }
  }
  console.log(valeurcookie);

  let page = document.getElementById("mymodal");
  let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
  date = date.toUTCString();

  if (valeurcookie != "nonMerci") {
    Swal.fire({
      title: "<strong>HTML <u>POPUP EXEMPLE</u></strong>",
      icon: "question",
      html: "Vous souhaitez <b>jouer au jeu concours ITGA</b>",
      showDenyButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Oui biensûr!',
      denyButtonText: "Plus tard, merci",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> Non, merci',
      cancelButtonAriaLabel: "Non merci",
    }).then((result) => {
      if (result.isConfirmed) {
        document.cookie = "user=nonMerci; path=/; expires=" + date + "path=/";
        window.location =
          " https://www.formulaire-en-ligne.com/go/jeu-concours-itga-diaginbox-concours-dib/";
      } else if (result.isDenied) {
        Swal.fire("d'accord la prochaine fois ;)", "", "info");
      } else {
        console.log("j'ai cliqué sur le bouton annulé");
        document.cookie = "user=nonMerci;  expires=" + date;
      }
    });
  }
};
