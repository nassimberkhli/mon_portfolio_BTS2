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
                window.open("CV Nassim BERKHLI.pdf", "_blank");
            }
        )
    }
);

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
