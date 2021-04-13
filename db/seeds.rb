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
bob_paint = User.create({username: "Bob The Painter", email:"bob_paint@email.com", password:"bobross123"})


ahri_figure = Product.create({name: "KDA Ahri Figure", description: "The lead singer of K/DA is here to dazzle all of her fans as #07 Special Edition in the Series 3 figure line.", quantity: "20", sales: 534315, price: 27.50, discount: 0.00, seller_id: 2})
ryze_figure = Product.create({name: "Ryze Figure", description: "Ryze warps into the Series 3 line as #23.", quantity: 12, sales: 142321, price: 27.50, discount: 20.0, seller_id: 2})
seraphine_figure = Product.create({name: "KDA All Out Seraphine Figure", description: "K/DA Seraphine takes to the stage as Special Edition #2 in the Series 4 figure line.", quantity: "30", sales: 325289, price: 30.00, discount: 0.00, seller_id: 2})
battle_aca_figures = Product.create({name: "Battle Academia Team Minis Set", description: "The best of Durandal Academy are here! Battle Academia Ezreal, Jayce, Katarina and Lux, plus Battle Professor Graves is here to teach you a lesson as our newest set of Team Minis.", quantity: 12, price: 40.00, discount: 15.00, seller_id: 2})
ahri_tee = Product.create({name: "K/DA Ahri MORE Tee (Unisex)", description: "Emanating grace and charm, the leader of K/DA is back.", quantity: 5, price: 30.00, discount: 0.00, sales: 54235, seller_id: 2})
battle_aca_tee = Product.create({name: "Battle Academia Durandal Manga Tee (Unisex)", description: "Rep the class of Durandal God-Weapon ACademy in this manga tee.", quantity: 3, price: 30.00, discount: 0.00, sales: 42322, seller_id: 2})
whale_paint = Product.create({name: "Whale Painting \"Fathoms Below\"", description: "This is a fine art giclée print made from my original watercolor painting titled \"Fathoms Below\".", quantity: 2, price: 12.00, sales: 24, seller_id: 3})
marbel = Product.create({name: "Marble Wall Art, Modern Abstract Canvas Artwork", description: "Canvas Print Art for Home and Office Decor", quantity: 4, price: 69.99, discount: 10.00, sales: 538, seller_id: 3})
kda_art = Product.create({name: "K/DA POP/STARS Poster", description:"K/DA takes to the stage and takes the world by storm with their debut single \"POP/STARS\". This poster will probably make your other posters jealous.", quantity: 100, price: 22.00, sales: 231234, seller_id: 2})


ahri_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blted682763b702c597/5f59427759f25e396816b960/11-05-2018_2018_43_05_890_AHRI.png")
Product.find(1).image.attach(io: ahri_image, filename: 'KDA_Ahri_Fig.png')

ryze_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt4b20971b9beec4c7/5f596549d6449530d09f1521/09-02-2020231254225_Ecomm-Square-Ryze_Fig-2560x2560.png")
Product.find(2).image.attach(io: ryze_image, filename: 'Ryze_Fig.png')

seraphine_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltca6510978682e16f/5f90a65ba50ed742e7fce5db/Seraphine_04.png")
Product.find(3).image.attach(io: seraphine_image, filename: "KDA_AllOut_Seraphine_Fig.png")

battle_aca_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5c0c3d9d1dbfd696/604be458e122b53af5513785/BA_minis_00.png")
Product.find(4).image.attach(io: battle_aca_image, filename: "Battle_Aca_Mini_Figs.png")

ahri_tee_image = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt996b576b298ef412/5f90ae231529bb3239a21561/Ahri_tshirt_00.png");
Product.find(5).image.attach(io: ahri_tee_image, filename: "KDA_Ahri_More_Tee.png")

baTee = open("https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt78da6bbb6b649fa2/604be57f982f2a0bdaf5e7ac/BA_shirt_01.png")
Product.find(6).image.attach(io: baTee, filename: "Battle_Aca_Tee.png")

whale_image = open("https://i.etsystatic.com/8585009/r/il/18ea08/1207942531/il_794xN.1207942531_78qo.jpg");
Product.find(7).image.attach(io: whale_image, filename: "Fathom_Below.png")

marbel_img = open("https://i.etsystatic.com/25302440/r/il/162f14/2556620008/il_794xN.2556620008_8d0a.jpg");
Product.find(8).image.attach(io: marbel_img, filename: "Marbel_decor.png")

kda_img = open("http://lol-stats.net/uploads/cG86fgQqVM1tRBa9JbCVrH6AyxpsRBd0UrdiyzVh.jpeg")
Product.find(9).image.attach(io: kda_img, filename: "KDA_Pop/Stars_post.png")