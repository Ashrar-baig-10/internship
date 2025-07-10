let about_info=["Contact us","About us","Careers","press","flipkart stories","Corporate Information"];
let consumer_info=["Cancellation & Returns","Terms Of use","Security","Privacy","Sitemap"]
let group_info=["Myntra","Cleatrip","Shopsy"];
let help_info=["Payments","Shipping","Cancellation & Retuens","FAQ"]
let mail_info=["Flipkart Internet Private Limited,","Buildings Alyssa, Begonia,","Clove Embassy Tech Village,","Outer Ring Road, Devarabeesanahalli Village,","Bengaluru, 560103,","Karnataka, India"]
let add_info=["Flipkart Internet Private Limited,","Buildings Alyssa, Begonia,","Clove Embassy Tech Village,","Outer Ring Road, Devarabeesanahalli Village,","Bengaluru, 560103,","Karnataka, India","CIN : U51109KA2012PTC066107","044-45614700","044-67415800"]



let about=document.querySelector(".about");




function loadinfo(){
    let htmla=`<span>ABOUT</span>`;
    let htmlg=`<span>GROUP COMPANIES</span>`;
    let htmlh=`<span>HELP</span>`;
    let htmlc=`<span>CONSUMER POLICY</span>`;
    let htmlm=`<span>Mail us</span>`;
    let htmlad=`<span>Registered office address</span>`;

    about_info.forEach((info)=> {
        htmla+=` <a class="link" href="">${info}</a>`;
    });
    about.innerHTML=htmla;

    group_info.forEach((info)=> {
        htmlg+=` <a class="link" href="">${info}</a>`;
     });
    document.querySelector('.group').innerHTML=htmlg;

    help_info.forEach((info)=> {
        htmlh+=` <a class="link" href="">${info}</a>`;
    });
    document.querySelector('.help').innerHTML=htmlh;

    consumer_info.forEach((info)=> {
        htmlc+=` <a class="link" href="">${info}</a>`;
    });
    document.querySelector('.policy').innerHTML=htmlc;

    mail_info.forEach((info)=> {
        htmlm+=` <p class="link" >${info}</p>`;
    });
    document.querySelector('.mail').innerHTML=htmlm;

    consumer_info.forEach((info)=> {
        htmlad+=` <p class="link" >${info}</p>`;
    });
    document.querySelector('.address').innerHTML=htmlad;
}

loadinfo();
