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
                window.open("document/pdf/CV Nassim BERKHLI.pdf", "_blank");
            }
        )
        $(".mes_experiences__type__mission__liste--Aoip__info__voir_plus").click    
        (
            function()
            {
                window.open("document/pdf/stage AOIP.pdf", "_blank");
            }
        )
    }
);

function ouvrir_cours_IA()
{
    const cours_IA = document.getElementById("cours_IA");
    cours_IA.setAttribute("style", "transform: scale(1)");
    console.log(cours_IA);
}

function fermer_cours_IA()
{
    const cours_IA = document.getElementById("cours_IA");
    cours_IA.setAttribute("style", "transform: scale(0)");
    console.log(cours_IA);
    // cours_IA.setAttribute("style", "transform: translateX(110%)");
    // cours_IA.setAttribute("style", "transform: scale(1)");
}