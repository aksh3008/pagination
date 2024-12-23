const users = [{"id":1,"Full_Name":"Earle Lavender","Mobile_Number":"+86 786 567 5872","email":"elavender0@biblegateway.com","Sign_up_date":"2024-11-25"},
    {"id":2,"Full_Name":"Ollie Shillam","Mobile_Number":"+7 585 579 7511","email":"oshillam1@nature.com","Sign_up_date":"2024-05-03"},
    {"id":3,"Full_Name":"Alvie Besque","Mobile_Number":"+86 121 393 3396","email":"abesque2@canalblog.com","Sign_up_date":"2024-02-25"},
    {"id":4,"Full_Name":"Burr Gaiter","Mobile_Number":"+92 509 731 8231","email":"bgaiter3@reuters.com","Sign_up_date":"2024-01-31"},
    {"id":5,"Full_Name":"Brittney Mazey","Mobile_Number":"+62 575 290 0396","email":"bmazey4@twitpic.com","Sign_up_date":"2024-10-01"},
    {"id":6,"Full_Name":"Sherri Olfert","Mobile_Number":"+55 652 716 8937","email":"solfert5@google.pl","Sign_up_date":"2024-06-15"},
    {"id":7,"Full_Name":"Sarah Duffrie","Mobile_Number":"+86 625 363 3971","email":"sduffrie6@deliciousdays.com","Sign_up_date":"2024-10-07"},
    {"id":8,"Full_Name":"Roby Caughte","Mobile_Number":"+62 955 389 4342","email":"rcaughte7@photobucket.com","Sign_up_date":"2024-07-26"},
    {"id":9,"Full_Name":"Janean Cabbell","Mobile_Number":"+27 486 700 4863","email":"jcabbell8@tiny.cc","Sign_up_date":"2024-10-29"},
    {"id":10,"Full_Name":"Grethel Olenchenko","Mobile_Number":"+62 476 595 3411","email":"golenchenko9@feedburner.com","Sign_up_date":"2024-05-03"},
    {"id":11,"Full_Name":"Lark Faunt","Mobile_Number":"+967 870 897 1724","email":"lfaunta@answers.com","Sign_up_date":"2024-09-19"},
    {"id":12,"Full_Name":"Philipa Dunlop","Mobile_Number":"+351 836 479 6115","email":"pdunlopb@fotki.com","Sign_up_date":"2024-05-07"},
    {"id":13,"Full_Name":"Tanney Munro","Mobile_Number":"+7 606 287 6931","email":"tmunroc@dropbox.com","Sign_up_date":"2024-03-31"},
    {"id":14,"Full_Name":"Melanie Runcie","Mobile_Number":"+976 549 199 0605","email":"mruncied@purevolume.com","Sign_up_date":"2024-07-24"},
    {"id":15,"Full_Name":"Laverna Kringe","Mobile_Number":"+7 606 943 2787","email":"lkringee@nih.gov","Sign_up_date":"2024-02-24"},
    {"id":16,"Full_Name":"Felipa Bloan","Mobile_Number":"+86 733 878 7484","email":"fbloanf@gov.uk","Sign_up_date":"2024-07-17"},
    {"id":17,"Full_Name":"Theodosia Gale","Mobile_Number":"+351 431 162 0830","email":"tgaleg@vk.com","Sign_up_date":"2024-01-07"},
    {"id":18,"Full_Name":"Giordano Cousens","Mobile_Number":"+86 283 419 8352","email":"gcousensh@constantcontact.com","Sign_up_date":"2024-07-17"},
    {"id":19,"Full_Name":"Viviana Vaney","Mobile_Number":"+86 743 536 0595","email":"vvaneyi@biglobe.ne.jp","Sign_up_date":"2024-03-08"},
    {"id":20,"Full_Name":"Wesley Wixey","Mobile_Number":"+385 639 514 3275","email":"wwixeyj@google.pl","Sign_up_date":"2024-03-03"},
    {"id":21,"Full_Name":"Pearle Auchterlonie","Mobile_Number":"+51 296 853 2409","email":"pauchterloniek@furl.net","Sign_up_date":"2024-04-29"},
    {"id":22,"Full_Name":"Dru Cleyne","Mobile_Number":"+240 578 213 5276","email":"dcleynel@zimbio.com","Sign_up_date":"2023-12-07"},
    {"id":23,"Full_Name":"Harv Prestidge","Mobile_Number":"+976 946 800 9791","email":"hprestidgem@eepurl.com","Sign_up_date":"2024-10-15"},
    {"id":24,"Full_Name":"Raye Garthside","Mobile_Number":"+62 694 682 4900","email":"rgarthsiden@hatena.ne.jp","Sign_up_date":"2023-12-16"},
    {"id":25,"Full_Name":"Kelwin Eady","Mobile_Number":"+27 743 937 1890","email":"keadyo@wired.com","Sign_up_date":"2024-11-05"},
    {"id":26,"Full_Name":"Luella Kennicott","Mobile_Number":"+81 410 662 0622","email":"lkennicottp@about.me","Sign_up_date":"2024-06-29"},
    {"id":27,"Full_Name":"Lorianne Mandrake","Mobile_Number":"+86 254 252 0940","email":"lmandrakeq@dell.com","Sign_up_date":"2024-06-17"},
    {"id":28,"Full_Name":"Billie Organ","Mobile_Number":"+1 504 595 8815","email":"borganr@stumbleupon.com","Sign_up_date":"2024-08-15"},
    {"id":29,"Full_Name":"Nadiya Schott","Mobile_Number":"+380 269 952 0906","email":"nschotts@facebook.com","Sign_up_date":"2024-08-07"},
    {"id":30,"Full_Name":"Cassi Mallinder","Mobile_Number":"+389 283 280 3446","email":"cmallindert@yellowbook.com","Sign_up_date":"2024-11-10"},
    {"id":31,"Full_Name":"Agneta Scamel","Mobile_Number":"+234 580 346 4332","email":"ascamelu@ted.com","Sign_up_date":"2024-03-26"},
    {"id":32,"Full_Name":"Marcella Bukac","Mobile_Number":"+60 234 489 4932","email":"mbukacv@miibeian.gov.cn","Sign_up_date":"2024-10-15"},
    {"id":33,"Full_Name":"Nicko Hubbold","Mobile_Number":"+66 434 592 1962","email":"nhubboldw@nationalgeographic.com","Sign_up_date":"2024-11-05"},
    {"id":34,"Full_Name":"Timotheus Mowles","Mobile_Number":"+86 894 508 7652","email":"tmowlesx@google.co.uk","Sign_up_date":"2024-05-16"},
    {"id":35,"Full_Name":"Lacey Toffanini","Mobile_Number":"+86 885 752 9575","email":"ltoffaniniy@washingtonpost.com","Sign_up_date":"2024-03-22"},
    {"id":36,"Full_Name":"Elston Verdon","Mobile_Number":"+62 633 760 5265","email":"everdonz@tmall.com","Sign_up_date":"2024-03-17"},
    {"id":37,"Full_Name":"Beatrice Fortnum","Mobile_Number":"+420 131 341 2553","email":"bfortnum10@wikia.com","Sign_up_date":"2023-12-20"},
    {"id":38,"Full_Name":"Drusy Righy","Mobile_Number":"+86 631 397 7210","email":"drighy11@uiuc.edu","Sign_up_date":"2024-07-20"},
    {"id":39,"Full_Name":"Wilfred Houten","Mobile_Number":"+351 887 272 0111","email":"whouten12@thetimes.co.uk","Sign_up_date":"2024-07-25"},
    {"id":40,"Full_Name":"Gaspar Seed","Mobile_Number":"+86 700 845 2265","email":"gseed13@washingtonpost.com","Sign_up_date":"2024-06-09"},
    {"id":41,"Full_Name":"Job McCloy","Mobile_Number":"+62 611 803 2489","email":"jmccloy14@facebook.com","Sign_up_date":"2024-10-25"},
    {"id":42,"Full_Name":"Byron Ginger","Mobile_Number":"+351 811 102 4295","email":"bginger15@icio.us","Sign_up_date":"2024-06-03"},
    {"id":43,"Full_Name":"Georas Kells","Mobile_Number":"+86 474 158 6163","email":"gkells16@google.de","Sign_up_date":"2024-10-14"},
    {"id":44,"Full_Name":"Suki O' Faherty","Mobile_Number":"+1 750 676 0418","email":"so17@google.cn","Sign_up_date":"2024-01-04"},
    {"id":45,"Full_Name":"Nobe A'field","Mobile_Number":"+49 738 377 0912","email":"nafield18@amazon.com","Sign_up_date":"2024-04-03"},
    {"id":46,"Full_Name":"Celestia Flanigan","Mobile_Number":"+62 190 500 0231","email":"cflanigan19@creativecommons.org","Sign_up_date":"2024-03-10"},
    {"id":47,"Full_Name":"Daniel Gosson","Mobile_Number":"+86 692 319 3477","email":"dgosson1a@home.pl","Sign_up_date":"2024-04-20"},
    {"id":48,"Full_Name":"Barbabas Clemow","Mobile_Number":"+63 916 120 1254","email":"bclemow1b@unblog.fr","Sign_up_date":"2024-03-24"},
    {"id":49,"Full_Name":"Violetta McGhie","Mobile_Number":"+86 133 871 0946","email":"vmcghie1c@ehow.com","Sign_up_date":"2024-05-28"},
    {"id":50,"Full_Name":"Denis Bonifant","Mobile_Number":"+86 537 225 4728","email":"dbonifant1d@ucoz.ru","Sign_up_date":"2024-09-25"}]

    
    //if the page is 1 and limit is 5 then return value of users 0-4
    //if the page is 2 and limit is 5 the return value of users 5-9

    export const getUsers = function (page, limit) {
    let array = [];
        for (let i = (page - 1) * limit; i < (page*limit) &&users[i]; i++ ) {
            array.push(users[i]);   
        }
        return array;
    }

    export const getLength =function () {
        return users.length;
    }