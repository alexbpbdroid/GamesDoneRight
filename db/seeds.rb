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
Review.destroy_all

### USERS ###
#------------------------------------------------------------------------------------------------------
demouser = User.create(
  username: 'demouser',
  password: 'password',
)
leetgamer420 = User.create(
  username: 'leetgamer420',
  password: 'password',
)
daniel = User.create(
  username: 'daniel',
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

cp3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/cp-discover.jpg")
cp.photos.attach(io: cp3, filename: 'cp-thumbnail.jpg')

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
lis.photos.attach(io: lis2, filename: 'lis-show-description.jpeg')

lis3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/lis-discover.jpg")
lis.photos.attach(io: lis3, filename: 'lis-thumbnail.jpg')

lis4 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cards/lis-card.jpg")
lis.photos.attach(io: lis4, filename: 'lis-card.jpg')

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
des.photos.attach(io: des2, filename: 'des-show-description.png')

des3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/ds3-discover.jpg")
des.photos.attach(io: des3, filename: 'des-thumbnail.jpg')

des.save!
#------------------------------------------------------------------------------------------------------

### SPONGEBOB ###
#------------------------------------------------------------------------------------------------------
sb = Game.new(
  title: "SpongeBob: Battle for Bikini Bottom - Rehydrated",
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

sb3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/sb-discover.jpg")
sb.photos.attach(io: sb3, filename: 'sb-thumbnail.jpg')

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
sor.photos.attach(io: sor2, filename: 'sor-show-description.gif')

sor3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/sor-discover.jpg")
sor.photos.attach(io: sor3, filename: 'sor-thumbnail.jpg')

sor4 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cards/sor-card.jpg")
sor.photos.attach(io: sor4, filename: 'sor-card.jpg')

sor.save!
#------------------------------------------------------------------------------------------------------

### Summer in Mara ###
#------------------------------------------------------------------------------------------------------
sim = Game.new(
  title: "Summer in Mara",
  release_date: "June 16, 2020",
  esrb_rating: "Everyone 10+",
  developer: "Chibig",
  publisher: "Chibig",
  price: 24.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  Summer in Mara is a summer adventure with farming, crafting, and exploring mechanics set in a tropical
  archipelago.
  
  Summer in Mara is a single-player experience in a calm, relaxing environment, with a handmade look and
  an exciting narrative. You will be Koa, a little adventurer girl who wants to explore the world that
  surrounds her.
  
  In ‘Summer in Mara’ you’ll have to take care of your own island, harvest your crops, create new tools
  and buildings, and sail with your boat to discover new islands and secrets",
  video: "https://www.youtube.com/embed/2DsnX4a0gK4"
)

sim1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/sim/sim-show-header.jpg")
sim.photos.attach(io: sim1, filename: 'sim-show-header.jpg')

sim2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/sim/sim-show-description.jpg")
sim.photos.attach(io: sim2, filename: 'sim-show-description.jpg')

sim3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/sim-discover.jpg")
sim.photos.attach(io: sim3, filename: 'sim-thumbnail.jpg')

sim4 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cards/sim-card.jpg")
sim.photos.attach(io: sim4, filename: 'sim-card.jpg')

sim.save!
#------------------------------------------------------------------------------------------------------

### Witcher 3 ###
#------------------------------------------------------------------------------------------------------
w3 = Game.new(
  title: "Witcher 3: GOTY Edition",
  release_date: "August 30, 2016",
  esrb_rating: "Mature",
  developer: "CD PROJEKT RED",
  publisher: "CD PROJEKT RED",
  price: 14.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  Play the most polished and complete version of the most awarded game of 2015 - The Witcher 3: Wild
  Hunt – Game of the Year Edition. Now available with all expansions and additional content.
  
  Become a professional monster slayer and embark on an adventure of epic proportions! Upon its release,
  The Witcher 3: Wild Hunt became an instant classic, claiming over 250 Game of the Year awards. Now you
  can enjoy this huge, over 100-hour long, open-world adventure along with both its story-driven
  expansions worth an extra 50 hours of gameplay. This edition includes all additional content - new
  weapons, armor, companion outfits, new game mode and side quests.",
  video: "https://www.youtube.com/embed/Aduurw9s7GI"
)

witch1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/w3/w3-show-header.jpg")
w3.photos.attach(io: witch1, filename: 'w3-show-header.jpg')

witch2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/w3/w3-show-description.jpg")
w3.photos.attach(io: witch2, filename: 'w3-show-description.jpg')

witch3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/w3-discover.jpg")
w3.photos.attach(io: witch3, filename: 'w3-thumbnail.jpg')

witch4 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cards/witcher-card.jpg")
w3.photos.attach(io: witch4, filename: 'witcher-card.jpg')

w3.save!
#------------------------------------------------------------------------------------------------------

### Trails of Cold Steel 3 ###
#------------------------------------------------------------------------------------------------------
cs = Game.new(
  title: "Legend of Heroes: Trails of Cold Steel III",
  release_date: "March 23, 2020",
  esrb_rating: "Teen",
  developer: "Nihon Falom",
  publisher: "NIS America, inc.",
  price: 59.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  Rean Schwarzer uncovers a dark plot that threatens his homeland. To face their enemies, he must prepare
  a new generation of heroes as an instructor at a new branch campus and guide them towards victory.

  Nearly a year and a half has passed since the Erebonian civil war, and much has changed since then. From
  the shifting stances of countries to the internal politics of the Empire, and even the life of Rean
  Schwarzer, the shadows of the past have given way to the embers of a new chapter. Now graduated from
  Thors Military Academy, Rean has become an instructor at the Thors Branch Campus, a newly-opened academy
  that quickly finds itself thrust onto the national stage. It is here that he takes the lead of a brand
  new Class VII, and must guide a new generation of heroes into an unknown future. Though all is calm now,
  the nefarious Ouroboros organization continues to weave a dark plot that could engulf the entire continent
  in war...or perhaps something even more sinister.

  Trails of Cold Steel III invites players into a world full of intrigue and excitement that is years in
  the making. They will embark on a whirlwind tour through the never-before-seen lands of the recently
  expanded Erebonian countryside, and encounter fresh faces as well as old friends familiar to fans of
  the series. In true Trails fashion, the deep, engaging story pairs with an incredible cast of characters
  and a combat system refined over decades of innovative RPG worldbuilding.",
  video: "https://www.youtube.com/embed/TCJQMpVpbRg"
)

cs1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cs/cs-show-header.jpg")
cs.photos.attach(io: cs1, filename: 'cs-show-header.jpg')

cs2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cs/cs-show-description.gif")
cs.photos.attach(io: cs2, filename: 'cs-show-description.gif')

cs3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/cs3-discover.jpg")
cs.photos.attach(io: cs3, filename: 'cs-thumbnail.jpg')

cs4 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cards/cs.jpg")
cs.photos.attach(io: cs4, filename: 'cs-card.jpg')

cs.save!
#------------------------------------------------------------------------------------------------------

### Darksiders Genesis ###
#------------------------------------------------------------------------------------------------------
dsg = Game.new(
  title: "Darksiders Genesis",
  release_date: "December 5, 2019",
  esrb_rating: "Teen",
  developer: "Airship Syndicate",
  publisher: "THQ Nordic GmbH",
  price: 29.99,
  works_on: "Windows (7, 8, 10)",
  description:"
  From the dawn of creation, THE COUNCIL has maintained the Balance across existence. Carrying out their
  orders are THE HORSEMEN, Nephilim (powerful beings spawned from the unnatural union of angels and demons)
  who have pledged themselves to the Council and been granted immense power. However, this power came at
  a tragic cost: the Horsemen were ordered to use their newfound strength to wipe out the rest of their
  kind. What followed was a bloody battle on Eden where the Horsemen, obeying the will of the Council,
  annihilated the Nephilim.
  
  DARKSIDERS: GENESIS is an action/adventure game that tears its way through hordes of demons, angels, and
  everything in-between on its way to Hell and back with guns blazing and swords swinging. Genesis gives
  players their first look at the world of DARKSIDERS before the events of the original game, as well as
  introduces the horseman STRIFE.",
  video: "https://www.youtube.com/embed/5_bro_sLnGc"
  
)

dsg1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/dsg/dsg-show-header.jpg")
dsg.photos.attach(io: dsg1, filename: 'dsg-show-header.jpg')

dsg2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/dsg/dsg-show-description.gif")
dsg.photos.attach(io: dsg2, filename: 'dsg-show-description.gif')

dsg3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/dsg-discover.jpg")
dsg.photos.attach(io: dsg3, filename: 'dsg-thumbnail.jpg')

dsg.save!
#------------------------------------------------------------------------------------------------------

### Stardew Valley ###
#------------------------------------------------------------------------------------------------------
sv = Game.new(
  title: "Stardew Valley",
  release_date: "February 26, 2016",
  esrb_rating: "Everyone",
  developer: "ConcernedApe",
  publisher: "ConcernedApe",
  price: 29.99,
  works_on: "Windows (7, 8, 10), Mac OS X (10.10+)",
  description:"
  You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and
  a few coins, you set out to begin your new life. Can you learn to live off the land and turn these
  overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the
  old ways of life have all but disappeared. The community center, once the town's most vibrant hub of
  activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you
  might just be the one to restore Stardew Valley to greatness!",
  video: "https://www.youtube.com/embed/_xs_qXACMuA"
  
)

sv1 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/sv/sv-show-header.jpg")
sv.photos.attach(io: sv1, filename: 'sv-show-header.jpg')

sv2 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/sv/sv-show-description.png")
sv.photos.attach(io: sv2, filename: 'sv-show-description.png')

sv3 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/discover-images/sv-discover.jpg")
sv.photos.attach(io: sv3, filename: 'sv-thumbnail.jpg')

sv4 = open("https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/cards/sv.jpg")
sv.photos.attach(io: sv4, filename: 'sv-card.jpg')

sv.save!
#------------------------------------------------------------------------------------------------------