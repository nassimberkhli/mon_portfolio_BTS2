document.addEventListener
(
    'DOMContentLoaded', 
    function()
    {
        $(document).ready
        (
            function()
            {
                $('html, body').animate
                (
                    {scrollTop: '0px'},500
                );
            }
        )
    }
);

$(document).ready
(
    function ()
    {
        $(".header__lien").click
        (
            function()
            {
                $("html").css("scroll-behavior", "smooth"); 
            }
        )
        $(".a_propos_de_moi__contenu__mon_cv").click
        (
            function()
            {
                window.open("document/pdf/CV_Nassim_BERKHLI.pdf", "_blank");
            }
        )
        $(".mes_experiences__type__mission__liste--Aoip__info__voir_plus").click    
        (
            function()
            {
                window.open("document/pdf/stage_AOIP.pdf", "_blank");
            }
        )
        $(".mes_experiences__type__projet__liste--Application_vacance__info__voir_plus").click
        (
            function()
            {
                window.open("document/site/compte_vva.html", "_blank");
            }
        )
        $(".mes_experiences__type__projet__liste--Jeux__info__voir_plus").click
        (
            function()
            {
                window.open("document/site/jeux_videos.html", "_blank");
            }
        )
        $(".mes_experiences__type__projet__liste--Application_xml__info__voir_plus").click
        (
            function()
            {
                window.open("document/site/Application_xml.html", "_blank");
            }
        )
        $(".me_contacter__contenu__contacter__reseaux__logo--instagram").click
        (
            function()
            {
                window.open("https://www.instagram.com/nassim_berkhli/", "_blank");
            }
        )
        $(".me_contacter__contenu__contacter__reseaux__logo--linkedin").click
        (
            function()
            {
                window.open("https://fr.linkedin.com/in/nassim-berkhli-823727227", "_blank");
            }
        )
        $(".me_contacter__contenu__contacter__mail").click
        (
            function()
            {
                window.open("mailto:nassimberkhli02@gmail.com", "_blank");
            }
        )
        $(".me_contacter__contenu__contacter__mail").click
        (
            function()
            {
                window.open("mailto:nassimberkhli02@gmail.com", "_blank");
            }
        )
        $(".header__ligne").click
        (
            function()
            {
                const entete = document.getElementById("entete");
                entete.setAttribute("style", "transform: translateY(-110%)");
            }
        )
        $(".bouton__ouvrir_entete").click
        (
            function()
            {
                const entete = document.getElementById("entete");
                entete.setAttribute("style", "transform: translateY(0%)");
            }
        )
        $(".mes_experiences__type__mission__liste--Way__info__voir_plus").click
        (
            function()
            {
                const way_formation = document.getElementById("way_formation__expose");
                way_formation.setAttribute("style", "transform: translateX(0.35%)");
                const bouton_remonte = document.getElementById("bouton_remonte");
                bouton_remonte.setAttribute("style", "background-color: rgb(237, 42, 146);");
                
                $('html, body').animate
                (
                    {scrollTop: '0px'},500
                );
            }
        )
        $(".way_formation__bouton").click
        (
            function()
            {
                const way_formation = document.getElementById("way_formation__expose");
                way_formation.setAttribute("style", "transform: translateX(0.35%)");
                const bouton_remonte = document.getElementById("bouton_remonte");
                bouton_remonte.setAttribute("style", "background-color: rgb(237, 42, 146);");
                $('html, body').animate
                (
                    {scrollTop: '0px'},500
                );
            }
        )
        $('#bouton_remonte').click
        (
            function()
            {
                $('html, body').animate
                (
                    {scrollTop: '0px'},500
                );
            }
        )
    }
);

function fermer_way_formation__expose()
{
    const way_formation = document.getElementById("way_formation__expose");
    way_formation.setAttribute("style", "transform: translateX(110%)");
    const bouton_remonte = document.getElementById("bouton_remonte");
    bouton_remonte.setAttribute("style", "background-color: rgb(31, 3, 104);");

}

function ouvrir_cours_IA()
{
    const cours_IA = document.getElementById("cours_IA");
    cours_IA.setAttribute("style", "transform: scale(1)");
    window.location.href = "./index.html#veille_technologique";
    // console.log(cours_IA);
}

function fermer_cours_IA()
{
    const cours_IA = document.getElementById("cours_IA");
    cours_IA.setAttribute("style", "transform: scale(0)");
    // console.log(cours_IA);
}

// function check(){
//     let html = document.querySelector('html');
//     let styles = getComputedStyle(html);
//     let value = styles.getPropertyValue('--scale-value');
    
//     if(value == 1){
//         alert('Text is normal');
//     } else if(value == -1){
//         alert('Text is inversed');
//     }
//     }
    
//     function toggle(){
//     let html = document.querySelector('html');
//     let styles = getComputedStyle(html);
    
//     let value = 
//     parseInt(styles.getPropertyValue('--scale-value'));
    
//     html.style.setProperty('--scale-value', -value);
//     }

function affiche_apres()
{
    let html = document.querySelector('html');
    let styles = getComputedStyle(html);
    
    let publicite_translateX = parseInt(styles.getPropertyValue('--translatex-value'));
    if(publicite_translateX == -300)
    {
        publicite_translateX = 0;
    }
    else
    {
        publicite_translateX -= 100;
    }
    console.log(publicite_translateX);

    html.style.setProperty('--translatex-value', publicite_translateX + '%');
}
function affiche_avant()
{
    let html = document.querySelector('html');
    let styles = getComputedStyle(html);
    
    let publicite_translateX = parseInt(styles.getPropertyValue('--translatex-value'));
    if(publicite_translateX == 0)
    {
        publicite_translateX = -300;
    }
    else
    {
        publicite_translateX += 100;
    }
    console.log(publicite_translateX);

    html.style.setProperty('--translatex-value', publicite_translateX + '%');
}







