const { $ } = require('@wdio/globals');

class ProductCategories{
    get headerMenu(){
        return $('div.header-menu ul');
    };
    get headerMenuComputers(){
        return $('div.header-menu ul.top-menu li a[href=\"/computers\"]');
    };
    get headerMenuCloth(){
        return $('div.header-menu ul.top-menu li a[href=\"/apparel-shoes\"]');
    };
    get sideMenu(){
        return $('div.block-category-navigation');
    };
    get sideMenuComputers(){
        return $('div.block-category-navigation ul.list a[href=\"/computers\"]');
    };
    get sideMenuComputersChilds(){
        return $('div.block-category-navigation ul.list li ul li');
    };
    get sideMenuCloth(){
        return $('div.block-category-navigation ul.list a[href="\/apparel-shoes\"]');
    };
}

module.exports = new ProductCategories();