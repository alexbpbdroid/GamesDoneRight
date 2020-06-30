# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Game.destroy_all

demouser = User.create(
  username: 'demouser',
  password: 'password',
)

# :id, :title, :price, :description, :release_date, 
# :developer, :publisher, :esrb_rating

cyberpunk = Game.new(
  title: "Cyberpunk 2077",
  release_date: "November 19, 2020",
  esrb_rating: "Mature",
  developer: "CD Projekt Red",
  publisher: "CD Projekt Red",
  price: 59.99,
  works_on: "Windows (7, 8, 10)",
  description: "is an open-world, action-adventure story set in Night City, a megalopolis obsessed
                with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind 
                implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, 
                and explore a vast city where the choices you make shape the story and the world around you."
)

cyb1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/Cyberpunk/cyber-main-header.jpg")
cyberpunk.photos.attach(io: cyb1, filename: 'cyber-main-header.jpg')

cyb2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/Cyberpunk/cyber-large-logo.png")
cyberpunk.photos.attach(io: cyb2, filename: 'cyber-large-logo.png')

cyb3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/Cyberpunk/cyber-description.jpg")
cyberpunk.photos.attach(io: cyb3, filename: 'cyber-description.jpg')

cyberpunk.save!