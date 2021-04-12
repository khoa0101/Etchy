# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo_1 = User.create({username:"demo_1", email:"demo@demo.com", password: "demo123"})
lol_merch = User.create({username: "LolMerch", email:"lol_merch@lol.com", password: "lolmerch"})

# ahri_figure = Product.create({name: "KDA Ahri Figure", description: "The lead singer of K/DA is here to dazzle all of her fans as #07 Special Edition in the Series 3 figure line.", quantity: "20", sales: 534315, price: 27.50, discount: 0.00, seller_id: 2})
# ryze_figure = Product.create({name: "Ryze Figure", description: "Ryze warps into the Series 3 line as #23.", quantity: 12, sales: 142321, price: 27.50, discount: 20.0, seller_id: 2})
# seraphine_figure = Product.create({name: "KDA All Out Seraphine Figure", description: "K/DA Seraphine takes to the stage as Special Edition #2 in the Series 4 figure line.", quantity: "30", sales: 325289, price: 30.00, discount: 0.00, seller_id: 2})
# battle_aca_figures = Product.create({name: "Battle Academia Team Minis Set", description: "The best of Durandal Academy are here! Battle Academia Ezreal, Jayce, Katarina and Lux, plus Battle Professor Graves is here to teach you a lesson as our newest set of Team Minis.", quantity: 12, price: 40.00, discount: 15.00, seller_id: 2})
# ahri_tee = Product.create({name: "K/DA Ahri MORE Tee (Unisex)", description: "Emanating grace and charm, the leader of K/DA is back.", quantity: 5, price: 30.00, discount: 0.00, sales: 54235, seller_id: 2})
# battle_aca_tee = Product.create({name: "Battle Academia Durandal Manga Tee (Unisex)", description: "Rep the class of Durandal God-Weapon ACademy in this manga tee.", quantity: 3, price: 30.00, discount: 0.00, sales: 42322, seller_id: 2});

# ahri_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blted682763b702c597/5f59427759f25e396816b960/11-05-2018_2018_43_05_890_AHRI.png")
# Product.find(1).image.attach(io: ahri_image, filename: 'KDA_Ahri_Fig.png')

# ryze_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt4b20971b9beec4c7/5f596549d6449530d09f1521/09-02-2020231254225_Ecomm-Square-Ryze_Fig-2560x2560.png")
# Product.find(2).image.attach(io: ryze_image, filename: 'Ryze_Fig.png')

# seraphine_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltca6510978682e16f/5f90a65ba50ed742e7fce5db/Seraphine_04.png")
# Product.find(3).image.attach(io: seraphine_image, filename: "KDA_AllOut_Seraphine_Fig.png")

# battle_aca_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5c0c3d9d1dbfd696/604be458e122b53af5513785/BA_minis_00.png")
# Product.find(4).image.attach(io: battle_aca_image, filename: "Battle_Aca_Mini_Figs.png")

# ahri_tee_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt996b576b298ef412/5f90ae231529bb3239a21561/Ahri_tshirt_00.png");
# Product.find(5).image.attach(io: ahri_tee_image, filename: "KDA_Ahri_More_Tee.png")

baTee = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt78da6bbb6b649fa2/604be57f982f2a0bdaf5e7ac/BA_shirt_01.png")
Product.find(6).image.attach(io: baTee, filename: "Battle_Aca_Tee.png")