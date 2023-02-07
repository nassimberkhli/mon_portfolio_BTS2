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
    }
);

function ouvrir_cours_IA()
{
    const cours_IA = document.getElementById("cours_IA");
    cours_IA.setAttribute("style", "transform: scale(1)");
    // console.log(cours_IA);
}

function fermer_cours_IA()
{
    const cours_IA = document.getElementById("cours_IA");
    cours_IA.setAttribute("style", "transform: scale(0)");
    // console.log(cours_IA);
}

