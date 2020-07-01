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

### DEMO USER ###
#------------------------------------------------------------------------------------------------------
demouser = User.create(
  username: 'demouser',
  password: 'password',
)
#------------------------------------------------------------------------------------------------------

### CYBERPUNK 2077 ###
#------------------------------------------------------------------------------------------------------
cp = Game.new(
  title: "Cyberpunk 2077",
  release_date: "November 19, 2020",
  esrb_rating: "Mature",
  developer: "CD Projekt Red",
  publisher: "CD Projekt Red",
  price: 59.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with
  power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind
  implant that is the key to immortality. You can customize your character'scyberware, skillset and
  playstyle, and explore a vast city where the choices you make shape the story and the world around you.
                
  Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and buildyour legend on
  the streets of Night City.
                
  Enter the massive open world of Night City, a place that sets new standards in terms of visuals,
  complexity and depth.
                
  Take the riskiest job of your life and go after a prototype implant that is the key to immortality.",
  video: "https://www.youtube.com/embed/qIcTM8WXFjk"
)

cp1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/Cyberpunk/cp-show-header.jpg?versionId=null")
cp.photos.attach(io: cp1, filename: 'cp-show-header.jpg')

cp2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/Cyberpunk/cp-show-description.jpg")
cp.photos.attach(io: cp2, filename: 'cp-show-description.jpg')

cp.save!
#------------------------------------------------------------------------------------------------------

### LIFE IS STRANGE ###
#------------------------------------------------------------------------------------------------------
lis = Game.new(
  title: "Life is Strange",
  release_date: "January 30, 2015",
  esrb_rating: "Mature",
  developer: "DONTNOD Entertainment",
  publisher: "Square Enix",
  price: 29.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  Life is Strange is an award-winning and critically acclaimed episodic adventure game that allows the
  player to rewind time and affect the past, present and future.

  Follow the story of Max Caulfield, a photography senior who discovers she can rewind time while saving
  her best friend Chloe Price.
  The pair soon find themselves investigating the mysterious disappearance of fellow student Rachel Amber,
  uncovering a dark side to life in Arcadia Bay. Meanwhile, Max must quickly learn that changing the past
  can sometimes lead to a devastating future.",
  video: "https://www.youtube.com/embed/6sT5n0yjoGo"
)

lis1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/lis/lis-show-header.jpg")
lis.photos.attach(io: lis1, filename: 'lis-show-header.jpg')

lis2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/lis/lis-show-description.jpeg?versionId=null")
lis.photos.attach(io: lis2, filename: 'lis-show-description.jpg')

lis.save!

#------------------------------------------------------------------------------------------------------

### DESPERADOS ###
#------------------------------------------------------------------------------------------------------
des = Game.new(
  title: "Desperados III",
  release_date: "June 16, 2020",
  esrb_rating: "Mature",
  developer: "Mimimi Games",
  publisher: "THQ Nordic GmbH",
  price: 49.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  Desperados III is a story-driven, hardcore tactical stealth game, set in a ruthless Wild West scenario.

  In this long-awaited prequel to the beloved classic Desperados: Wanted Dead or Alive, John Cooper will
  join forces with the runaway bride Kate, the shady hitman Doc McCoy, the giant trapper Hector, and
  Isabelle, a mysterious lady from New Orleans. On Cooper's quest for redemption, his adventures
  lead him and his gang from rural towns, over swamps and riverbanks, and finally to a dramatic showdown
  worthy of Wild West legends.

  Play smart if you want to succeed. A good plan can make the difference between survival and finding
  yourself at the business end of a pistol.

  Drifter, gunslinger, and natural leader Cooper can kill quietly with a knife, or take out multiple foes
  with his revolvers. Strongman Hector carries a giant bear trap and can slay the toughest opponents with
  his trusty axe. Cold blooded bounty hunter McCoy likes to be methodical, using lures, knockout gas,
  poison syringes and a custom long-range pistol. Kate can fool almost any man with the right outfit, and
  kills discreetly with her hidden gun. And then there is this mysterious woman from New Orleans, Isabelle…

  Combine your team's special skills to overcome each tough challenge in your own style.",
  video: "https://www.youtube.com/embed/Lowpue-0IPk"
)

des1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/desperados/des-show-header.jpg")
des.photos.attach(io: des1, filename: 'des-show-header.jpg')

des2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/desperados/des-show-description.png")
des.photos.attach(io: des2, filename: 'des-show-description.jpg')

des.save!
#------------------------------------------------------------------------------------------------------

### SPONGEBOB ###
#------------------------------------------------------------------------------------------------------
sb = Game.new(
  title: "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated",
  release_date: "June 23, 2020",
  esrb_rating: "Everyone 10+",
  developer: "Purple Lamp Studios",
  publisher: "THQ Nordic GmbH",
  price: 29.99,
  works_on: "Windows (10)",
  description:"
  SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated is remade in spongetastic splendor! Play
  as SpongeBob, Patrick and Sandy and show the evil Plankton that crime pays even less than Mr. Krabs.
  Want to save Bikini Bottom from lots of rampant robots with your mighty bubbles? Of course you do! Want
  to underpants bungee jump? Why wouldn't you! Want to join forces in a brand new multiplayer mode? The
  battle is on!",
  video: "https://www.youtube.com/embed/d3CFxzQkSLY"
)

sb1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/spongebob/sb-show-header.jpg")
sb.photos.attach(io: sb1, filename: 'sb-show-header.jpg')

sb2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/spongebob/sb-show-description.gif")
sb.photos.attach(io: sb2, filename: 'sb-show-description.gif')

sb.save!
#------------------------------------------------------------------------------------------------------

### STREETS OF RAGE 4 ###
#------------------------------------------------------------------------------------------------------
sor = Game.new(
  title: "Streets of Rage 4",
  release_date: "April 30, 2020",
  esrb_rating: "Teen",
  developer: "Lizardcube",
  publisher: "DotEmu",
  price: 24.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  The all-time classic Streets of Rage, known as Bare Knuckle (ベア・ナックル Bea Nakkuru) in Japan, is a
  trilogy of beat ‘em up known for this timeless gameplay and electronic dance influenced music. Streets
  of Rage 4 builds upon the classic trilogy’s gameplay with new mechanics, beautiful hand drawn visuals
  and a God tier soundtrack.
  
  An iconic series like Streets of Rage got its iconic characters: Axel, Blaze, Adam and other veterans
  reunited to clean up the streets. With some brand-new moves and kickass tracks to take a listen, our
  heroes are ready to dish out beatdowns to a fledgling group of ill-advised criminals in full force.
  
  Streets of Rage 4 will be the first entry to the core series in 25 years, standing as Axel, Adam and
  Blaze’s glorious return to serving up side-scrolling beatdowns. With lush hand-drawn animations, new
  combat abilities, and fresh tracks from an amazing team of composers, Streets of Rage 4 will be a
  masterful tribute to and revitalization of the classic action fans adore",
  video: "https://www.youtube.com/embed/yNaXV3a2oIs"
)

sor1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/sor4/sor-show-header.jpg")
sor.photos.attach(io: sor1, filename: 'sor-show-header.jpg')

sor2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/sor4/sor-show-description.gif")
sor.photos.attach(io: sor2, filename: 'sor-store-description.gif')

sor.save!
#------------------------------------------------------------------------------------------------------