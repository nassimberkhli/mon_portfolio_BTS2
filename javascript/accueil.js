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
