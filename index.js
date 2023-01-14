const express = require("express");

const app = express();

// OWNED BY DAYLN API!!
// ALL RIGHTS OWN TO THE CODE!
// MUST GIVE CREDITS
 

//To change Api link change the > app.get("/api/NAME") Part below.

app.get("/owner", (req, res) => {
	const items = [
"Helllo! my own is Dayln!"
	]

	const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/dog", (req, res) => {
  
const items = [
"https://cdn.discordapp.com/attachments/688444764772892692/956160378704916521/IMG_7169.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160378465816606/IMG_7170.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160378222559272/IMG_7167.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160377966698596/IMG_7168.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160377698283530/IMG_7165.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160377312411698/IMG_7166.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160377043968090/IMG_7163.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160376779710464/IMG_7164.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160334664720394/IMG_7162.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160334396268574/IMG_7161.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160333901332480/IMG_7160.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160333666484294/IMG_7158.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160333456744478/IMG_7157.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160130901246002/IMG_7149.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160130708303962/IMG_7150.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160106716868618/IMG_7153.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160106511360041/IMG_7154.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956160106180014090/IMG_7155.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956159855645823026/IMG_7184.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956159886885003274/IMG_7178.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956159855947841546/IMG_7183.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956159856224645160/IMG_7182.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956159856874750002/IMG_7180.jpg","https://cdn.discordapp.com/attachments/688444764772892692/956159886885003274/IMG_7178.jpg",
 ];

const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/questions", (req, res) => {
  
const items = [
"What is your favourite Food?","What is your favourite Color?","What is your favourite Past Time?","What is your Book?","What is your favourite Game?","What is your favourite Time?","What is your favourite Summer Fun Event?","What is your favourite Icecream?","What is your favourite Store?","What is your favourite Music?","What is your favourite Candy?","What is your favourite Thing to Do?","Do you have any pets?","What do you like about this server?","Your Favourite Activity","Coffee or tea?","What joke you found the funniest?","Whats your favorite dessert?","Would you rather live in Europe or America?","If 5 + 5 = 15 then what is 4 + 5 = ?","What kind of band never plays music?"," Would you rather eat poop sized chocolate or eat chocolate sized poop?"," What is the end of everything?","Spelled forwards I'm what you do every day, spelled backward I'm something you hate. What am I?","Which which would you rather do fishing or swimming?","What's your favorite song?","What's your favorite movie?"
 ];

const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});



- app.get("/dick", (req, res) => {
  
 const items = [ "https://cdn.discordapp.com/attachments/960211742552633364/960211990532489299/IMG_7502.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214692184346634/IMG_7551.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214691802652752/IMG_7552.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214691550986310/IMG_7553.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214672492093500/IMG_7554.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214672219447306/IMG_7555.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214671971987486/IMG_7556.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214671783251968/IMG_7557.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214671565131826/IMG_7558.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214671355445368/IMG_7559.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214671145709679/IMG_7560.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214643492679720/IMG_7561.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214643295551558/IMG_7562.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214643094200320/IMG_7563.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214642863505548/IMG_7564.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214642637037568/IMG_7565.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214642397970492/IMG_7566.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214611175551036/IMG_7567.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214610881945600/IMG_7568.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214610684829816/IMG_7570.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214610076651550/IMG_7572.gif","https://cdn.discordapp.com/attachments/960211742552633364/960214609829183508/IMG_7569.webp","https://cdn.discordapp.com/attachments/960211742552633364/960214572348899389/IMG_7573.gif","https://cdn.discordapp.com/attachments/960211742552633364/960214572109811732/IMG_7574.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214571879108638/IMG_7575.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214571585531954/IMG_7576.gif","https://cdn.discordapp.com/attachments/960211742552633364/960214571354841138/IMG_7577.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960214570251714660/IMG_7580.gif","https://cdn.discordapp.com/attachments/960211742552633364/960214569807151214/IMG_7579.webp"
 ];
 
 const item = Math.floor(Math.random() * items.length);

 res.json({result: items[item] });
 });

app.get("/ok", (req, res) => {
  
const items = [
"POPO","Are you sure?","AAA a sniper","just ok"
 ];

const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/typing", (req, res) => {
  
const items = [
"Hello i am HR  and i love to type and i am doing this asmr to annoy someone Lol! AMAR i think there annoyed now lol let type more YIP! weee i love typing! Hello monster how do you like my asmr"
 ];

const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/ben", (req, res) => {
  
const items = [
"Yes", "No", "Hohoho", "Aughh", "Hohoho,yes ", "Hohoho,no", "*Hangs Up*"
 ];

const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/joke", (req, res) => {
  
const items = [
'Did you hear about the first restaurant to open on the moon? It had great food, but no atmosphere.','What do dentists call their x-rays? Tooth pics!','Do you want to hear a construction joke? Sorry, I’m still working on it.','Did you hear about the fire at the circus?It was in tents!','Why do ducks have feathers? To cover their butt quacks!','Why should you never trust stairs? They’re always up to something.','Why did the bullet end up losing his job? He got fired.',' What kind of shorts do clouds wear? Thunderpants'
 ];

const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});
  
app.get("/dogfacts", (req, res) => {
  
const items = [
"Dogs Can Recognize Hundreds of Words","Dogs Are As Intelligent As a 2 Year Old Child","Service Dogs Are Trained to go Potty on Command","The Basenji Doesn’t Bark, He Yodels","Dogs Can Hear Four Times Better Than Us","Dogs Have Three Eyelids","30% of Dalmatians Are Deaf in One Ear","Over 30 Breeds of Dogs Have Spots on Their Tongue","The First Mammal to Orbit Earth Was a Stray Dog","About 30% of Dogs Surrendered to Shelters Are Purebred","The Nitrogen in Your Dogs Urine is What Kills Grass","Dogs Have Their Own Poop Compass","Your Dogs Pee Says A Lot About Him to Other Dogs","Dogs Can Smell 1000 Times Better Than Humans","Dogs Can Detect Seizures","Our Dogs Can Tell When We’re Lying","Greyhounds Can Run up to 45 MPH","Greyhounds Can Run up to 45 MPH","Dogs Are Being Used to Help Detect Cancer","Dogs Only Sweat From Their Paws","Dogs Are Known to Snore More Than Cats","Dogs Go Grey Early Due to Stress",
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/random", (req, res) => {
  
const items = ["https://cdn.discordapp.com/attachments/728634598422216704/939725404690874378/IMG_6142.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617266585660/IMG_6135.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617446944828/IMG_6136.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618168360970/IMG_6132.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618734575646/IMG_6130.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726215084908574/zchzpmugl6f61.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726214174752838/unnamed.png","https://cdn.discordapp.com/attachments/728634598422216704/939725295970316288/IMG_6151.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725295668322314/IMG_6152.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725295383101440/IMG_6153.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725294967861279/IMG_6155.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725295169183764/IMG_6154.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725294724599888/IMG_6156.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725292405157978/IMG_6157.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725292086362142/IMG_6159.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725291847290931/IMG_6158.jpg","https://cdn.discordapp.com/attachments/728634598422216704/877034807832502313/ezgif.com-gif-maker.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034092661702716/images_2.jpeg","https://cdn.discordapp.com/attachments/728634598422216704/939725403726151740/IMG_6138.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404070101012/IMG_6137.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404309164082/IMG_6140.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404485341214/IMG_6139.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404690874378/IMG_6142.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404887973908/IMG_6141.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725405080920094/IMG_6144.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725405491965962/IMG_6143.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725540594700418/IMG_6145.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725540888297552/IMG_6146.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541139951636/IMG_6148.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541324496996/IMG_6147.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541517430814/IMG_6150.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541710364672/IMG_6149.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617266585660/IMG_6135.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617446944828/IMG_6136.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617639862314/IMG_6134.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617878929428/IMG_6133.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618168360970/IMG_6132.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618487124038/IMG_6131.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618734575646/IMG_6130.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618944294962/IMG_6129.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725619133026334/IMG_6128.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725619422449684/IMG_6127.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726214522867712/d889561ddd605da12ef54c043dcea737.18.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726215084908574/zchzpmugl6f61.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726214850052107/988349-soft-pussy_880x660.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726215315591188/images_3.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726946294714408/b950989b7a09af2236e523bc2af0fa8024cc4.gif","https://cdn.discordapp.com/attachments/728634598422216704/939726945820741682/473f6b04d372b12766d838bf9b78c.gif","https://cdn.discordapp.com/attachments/728634598422216704/939726215575658537/massagingthatpussy-1560361146l4cp8.gif","https://cdn.discordapp.com/attachments/728634598422216704/939726214174752838/unnamed.png"

 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/ass", (req, res) => {
  
const items = [
"https://cdn.discordapp.com/attachments/728634598422216704/939725404690874378/IMG_6142.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617266585660/IMG_6135.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617446944828/IMG_6136.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618168360970/IMG_6132.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618734575646/IMG_6130.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726215084908574/zchzpmugl6f61.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726214174752838/unnamed.png","https://cdn.discordapp.com/attachments/728634598422216704/939725295970316288/IMG_6151.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725295668322314/IMG_6152.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725295383101440/IMG_6153.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725294967861279/IMG_6155.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725295169183764/IMG_6154.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725294724599888/IMG_6156.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725292405157978/IMG_6157.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725292086362142/IMG_6159.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725291847290931/IMG_6158.jpg","https://cdn.discordapp.com/attachments/728634598422216704/877034807832502313/ezgif.com-gif-maker.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034092661702716/images_2.jpeg","https://cdn.discordapp.com/attachments/728634598422216704/939715420838039563/IMG_6126.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715421077119046/IMG_6125.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715421400096838/IMG_6124.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715421773381692/IMG_6123.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422054387722/IMG_6122.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422339616878/IMG_6121.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422675173456/IMG_6120.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422972952616/IMG_6119.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715575670800434/IMG_6107.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715575507202058/IMG_6108.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461661204570/IMG_6109.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461434728448/IMG_6110.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461237588008/IMG_6111.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461044637777/IMG_6112.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460834951178/IMG_6113.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715459677298768/IMG_6118.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715459941535804/IMG_6117.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460134481920/IMG_6116.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460365180989/IMG_6115.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460600057926/IMG_6114.jpg","https://cdn.discordapp.com/attachments/728634598422216704/877034151075786802/634_1000.gif","https://cdn.discordapp.com/attachments/728634598422216704/874737736710516827/5.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737549300613130/mako-chan-kaihatsu-nikki-2-cv1.png","https://cdn.discordapp.com/attachments/728634598422216704/874732529423360000/tee.gif"
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});


app.get("/pussy", (req, res) => {
  
const items = [
"https://cdn.discordapp.com/attachments/728634598422216704/939725403726151740/IMG_6138.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404070101012/IMG_6137.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404309164082/IMG_6140.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404485341214/IMG_6139.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404690874378/IMG_6142.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725404887973908/IMG_6141.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725405080920094/IMG_6144.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725405491965962/IMG_6143.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725540594700418/IMG_6145.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725540888297552/IMG_6146.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541139951636/IMG_6148.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541324496996/IMG_6147.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541517430814/IMG_6150.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725541710364672/IMG_6149.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617266585660/IMG_6135.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617446944828/IMG_6136.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617639862314/IMG_6134.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725617878929428/IMG_6133.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618168360970/IMG_6132.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618487124038/IMG_6131.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618734575646/IMG_6130.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725618944294962/IMG_6129.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725619133026334/IMG_6128.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939725619422449684/IMG_6127.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726214522867712/d889561ddd605da12ef54c043dcea737.18.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726215084908574/zchzpmugl6f61.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726214850052107/988349-soft-pussy_880x660.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726215315591188/images_3.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939726946294714408/b950989b7a09af2236e523bc2af0fa8024cc4.gif","https://cdn.discordapp.com/attachments/728634598422216704/939726945820741682/473f6b04d372b12766d838bf9b78c.gif","https://cdn.discordapp.com/attachments/728634598422216704/939726215575658537/massagingthatpussy-1560361146l4cp8.gif","https://cdn.discordapp.com/attachments/728634598422216704/939726214174752838/unnamed.png","https://cdn.discordapp.com/attachments/960211742552633364/960211822198276147/IMG_7539.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211848655933531/IMG_7535.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211880150986792/IMG_7526.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211880461357067/IMG_7525.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211880687837224/IMG_7524.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211880939511889/IMG_7523.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211881174368296/IMG_7522.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211881392492614/IMG_7521.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211904645726229/IMG_7520.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211904947687424/IMG_7519.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211905266458644/IMG_7518.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211905467809802/IMG_7517.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211905723641937/IMG_7516.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211906017255444/IMG_7515.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211990062710885/IMG_7506.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211989806854314/IMG_7507.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211989366468608/IMG_7508.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211936404971530/IMG_7509.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211936132345896/IMG_7510.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211935838760970/IMG_7511.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211935532548096/IMG_7512.jpg"
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/tits", (req, res) => {
  
const items = [
"https://cdn.discordapp.com/attachments/960211742552633364/960211990532489299/IMG_7502.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211990289195118/IMG_7504.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715420838039563/IMG_6126.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715421077119046/IMG_6125.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715421400096838/IMG_6124.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715421773381692/IMG_6123.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422054387722/IMG_6122.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422339616878/IMG_6121.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422675173456/IMG_6120.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715422972952616/IMG_6119.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715575670800434/IMG_6107.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715575507202058/IMG_6108.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461661204570/IMG_6109.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461434728448/IMG_6110.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461237588008/IMG_6111.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715461044637777/IMG_6112.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460834951178/IMG_6113.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715459677298768/IMG_6118.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715459941535804/IMG_6117.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460134481920/IMG_6116.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460365180989/IMG_6115.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939715460600057926/IMG_6114.jpg","https://cdn.discordapp.com/attachments/728634598422216704/877034151075786802/634_1000.gif","https://cdn.discordapp.com/attachments/728634598422216704/874737736710516827/5.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737549300613130/mako-chan-kaihatsu-nikki-2-cv1.png","https://cdn.discordapp.com/attachments/728634598422216704/874732529423360000/tee.gif","https://cdn.discordapp.com/attachments/960211742552633364/960211798341091378/IMG_7550.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211798550798407/IMG_7549.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211798756323358/IMG_7548.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211798953431090/IMG_7547.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211799129587752/IMG_7546.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211799314169907/IMG_7545.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211799553237032/IMG_7544.gif","https://cdn.discordapp.com/attachments/960211742552633364/960211821711740988/IMG_7541.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211879769292830/IMG_7527.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211879496667156/IMG_7528.jpg","https://cdn.discordapp.com/attachments/96https://cdn.discordapp.com/attachments/960211742552633364/960211848655933531/IMG_7535.jpg0211742552633364/960211850111373332/IMG_7529.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211849905848320/IMG_7530.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211849641590784/IMG_7531.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211849452875826/IMG_7532.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211849264123914/IMG_7533.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211848924381245/IMG_7534.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211848374923294/IMG_7536.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211821900496976/IMG_7540.jpg","","https://cdn.discordapp.com/attachments/960211742552633364/960211822550605834/IMG_7538.jpg","https://cdn.discordapp.com/attachments/960211742552633364/960211822198276147/IMG_7539.jpg"
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/duck", (req, res) => {
  
const items = ["https://cdn.discordapp.com/attachments/728634598422216704/939299879241527346/IMG_6038.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299878964711455/IMG_6039.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299769921204265/IMG_6059.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299769682100256/IMG_6054.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299768847446036/IMG_6057.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299769141055568/IMG_6056.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299768432222230/IMG_6058.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299767849193472/IMG_6060.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299767433969714/IMG_6061.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299635707646012/IMG_6067.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299635430817834/IMG_6062.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299635057557624/IMG_6065.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299634185109504/IMG_6063.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299769443029092/IMG_6055.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299633883131904/IMG_6064.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939299633652441118/IMG_6066.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939304584285937744/IMG_6046.png","https://cdn.discordapp.com/attachments/728634598422216704/939299879669338162/IMG_6037.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939547796623724625/C8E0F9CE-1F38-4E13-9486-8516326BAC7D.png"
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/quote", (req, res) => {
  
const items = [`“Be yourself; everyone else is already taken.” ― Oscar Wilde`,`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,`
“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,`“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,`“Being Mad is Like Being a Dragon also try not to be a dragon” - Dayln`,`
“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,`“You only live once, but if you do it right, once is enough.”
― Mae West`,`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,`“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,`
“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire`,`“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus`,`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves`,`
“It is better to be hated for what you are than to be loved for what you are not.”
― Andre Gide, Autumn Leaves`,

 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/nfsw", (req, res) => {
  
const items = [
"https://cdn.discordapp.com/attachments/728634598422216704/877719590619205662/4.gif","https://cdn.discordapp.com/attachments/728634598422216704/877719582729715712/5.jpeg","https://cdn.discordapp.com/attachments/728634598422216704/877719530602922054/3.gif","https://cdn.discordapp.com/attachments/728634598422216704/877714966373875722/massagingthatpussy-1560361146l4cp8.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034807832502313/ezgif.com-gif-maker.gif",
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});


app.get("/randomnumber", (req, res) => {
  
const items = ["5","98","1531","234","7","25","11","56","34","43","67","66","354","57","88", 
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});



app.get("/hentai", (req, res) => {
  
const items = ["https://cdn.discordapp.com/attachments/728634598422216704/874726852143480882/ie.gif","https://cdn.discordapp.com/attachments/728634598422216704/874726885769224222/anime-hentai-gif-1.gif","https://cdn.discordapp.com/attachments/728634598422216704/874726925891956766/converted.gif","https://cdn.discordapp.com/attachments/728634598422216704/874732529423360000/tee.gif","https://cdn.discordapp.com/attachments/728634598422216704/874732584893026314/888.gif", "https://cdn.discordapp.com/attachments/728634598422216704/874732691596136478/22936534_min.gif","https://cdn.discordapp.com/attachments/728634598422216704/874733151199576114/1953271914.gif","https://cdn.discordapp.com/attachments/728634598422216704/874733469241049098/14840688-71.gif","https://cdn.discordapp.com/attachments/728634598422216704/874737362989641788/rrr.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737393150881822/89d5e814c2f1400ce4d54b96297ce05b.30.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737418832580649/preview.mp4.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737452378648645/preview.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737486272794634/mako-chan-kaihatsu-nikki-1-cv1.png","https://cdn.discordapp.com/attachments/728634598422216704/877034217782009876/unnamed.gif","https://cdn.discordapp.com/attachments/728634598422216704/874737584297881670/p.jpg","https://cdn.discordapp.com/attachments/728634598422216704/874737736710516827/5.jpg","https://cdn.discordapp.com/attachments/728634598422216704/877034807832502313/ezgif.com-gif-maker.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034247775469578/e.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034193039806515/17597840_min.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034193039806515/17597840_min.gif","https://cdn.discordapp.com/attachments/728634598422216704/877719530602922054/3.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034151075786802/634_1000.gif","https://cdn.discordapp.com/attachments/728634598422216704/877720584849588285/f3136e7a5f68a4fafcd9a5f24bb50b4a.gif","https://cdn.discordapp.com/attachments/728634598422216704/877034092661702716/images_2.jpeg","https://cdn.discordapp.com/attachments/728634598422216704/877719582729715712/5.jpeg"
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/ai-chatbot", (req, res) => {
  
const items = [`Hey! how are you?`,"Nice","","what your name?","This is a stand up","Money now","How old are you","Is icecream Creamy?","Wow","SCREAMING MONKEY","Ai is cool","Developer?","OOOO nice","Did you know that no one wants to know that (jk)","Old","Monkey","Yoo man",'Random question','AI chat is made by <@673011572225998856>','Depress','Tv yes.','Please email support@daylndev.me to add more ai replys!' , "UwU",'Yes furrys','u sure?',"your the master","sure",'Nice that wicked!',`OMG is it a bird is it a plane oh it you <3`,'Yes 100%','U kidding me?',"Ugh fine","AAAA a plane",'Maple trees','Web',"U cool",`Weeb`,`Ye ye`,`🤣`,`😌`,` 🥶`,`😏 `,`Your avatar looks fresh`,`Your cute- I MEAN COOL`,`According to my calculations, your dumber than a uncoded robot (jk)`,`Are you even smart enough for this? Like hello?`,`Yes queen.`,`Yes king.`,`No queen.`,`No king.`,`Like why`,`Niceee`,`12345678910`,
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/roast", (req, res) => {
  
const items = [ `That's dumb. Get a real life.`,`Your so cool, so I need to go. Bye nerd`,`Your so ugly, I want to power off my system.`,`I know that already.`,`Say that louder. Your face is ugly, I can't bare to hear your voice.`,`I want to leave the room.`,`Huh? Speak up i can not hear you`,`If I throw a stick, will you leave?`,` If your brain was dynamite, there wouldn’t be enough to blow your hat off.`,`You have so many gaps in your teeth it looks like your tongue is in jail.`,` I forgot the world revolves around you. My apologies! How silly of me.`,`I’ll never forget the first time we met. But I’ll keep trying.`,`Her teeth were so bad she could eat an apple through a fence.`,`I’m not insulting you; I’m describing you.`,`I’m not a nerd; I’m just smarter than you.`,'Cry about it... Ugly nerd'
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});


app.get("/randomemoji", (req, res) => {
  
const items = [`😆`,`😄`,`😂`,`😏`,`😝`,`🥵`,`🤫`,`🥴`,`🐼`,`🐶`,`🍆`,`🍌`,`🥔`,`💵`,`📱`,`🔐`,`🤍 `,`🤍 `,`⚠️`,`💔`,` 🔞 `,`☞`,`🏳️‍🌈 `,`🇨🇦`
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/", (req, res) => {
  

 
 res.send("For All Our Api's Visit https://apis.dayln.tk")
});



app.get("/sleepthoughts", (req, res) => {
  
const items = ["There are cute <3","I wish i am being cuddled while sleeping","There the best","a other day is boring",'I hate work',`UGH`,`I do not want to sleep`,'Money','can i just kiss them pls','Can i have a dog?','Hmm? who is near?','AAAAAAAAAA','I to tired for this' 
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/8ball", (req, res) => {
  
const items = [	'Certainly.',
			'It is decidedly so.',
			'Without a doubt.',
			'Yes definitely.',
			'Probably.',
			'As I see it, yes.',
			'Most likely.',
			'Outlook good.',
			'Yes.',
			'Signs point to yes.',
			"Yes'nt",
			"No'nt",
			'Maybe.',
			'My conscience says no.',
			'Yep.',
			'Nah.',
			'My reply is no.',
			'My sources say no.',
			'Outlook not so good.',
			'Very doubtful.',
			'No way.',
			'Maybe',
			'The answer is hiding inside you',
			'No.',
			'Nope.',
			'If it rains today, then yes.',
			"It's over",
			"It's just the beginning",
			'Probably not.'
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});


app.get("/gennick", (req, res) => {

const items = ["Bal","Tal","Duo","Jalm","Mik","Plee","Plur","Gro","Lram","Web","Tin","Drol","Dro" 
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/gennick2", (req, res) => {

const items = ["tarl","gle","trag","foil","plop","nex","prolo","klee","lorl","arl" 
 ];


 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/randombots", (req, res) => {

const items = ["https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=https%3A%2F%2Fmee6.xyz%2Fguild-oauth&permissions=1945627743&client_id=159985415099514880 - MEE6","https://discord.com/oauth2/authorize?client_id=161660517914509312&scope=bot%20identify%20guilds%20applications.commands&response_type=code&redirect_uri=https://dyno.gg/return&permissions=2134207679&state=ola_SqMTGG_y06COup3dH - DYNO","https://discord.com/oauth2/authorize?&client_id=235148962103951360&scope=applications.commands+bot&permissions=2088234230&response_type=code&redirect_uri=https://carl.gg/api/server_auth - CARL BOT","https://discord.com/oauth2/authorize?client_id=557628352828014614&scope=applications.commands+bot&permissions=805432400 - TICKET TOOL","https://discord.com/api/oauth2/authorize?client_id=745401642664460319&permissions=2617568510&scope=bot%20applications.commands - PARALLEL","https://discord.com/oauth2/authorize?client_id=830648806822379520&scope=bot&permissions=6709968721 - PENDRAGON" 
 ];



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

app.get("/meme", (req, res) => {
  
const items = ["https://cdn.discordapp.com/attachments/728634598422216704/939555080380743720/IMG_6069.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555080120709130/IMG_6070.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555079739035678/IMG_6071.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555059581190165/IMG_6074.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555059321163786/IMG_6072.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555059082100786/IMG_6075.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555058897534997/IMG_6076.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555058528419860/IMG_6077.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555058322927636/IMG_6078.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555058071273482/IMG_6079.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555057853145098/IMG_6081.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555057618259988/IMG_6080.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555057362403408/IMG_6073.webp","https://cdn.discordapp.com/attachments/728634598422216704/939555001125183579/IMG_6082.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555000915460146/IMG_6083.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555000688992307/IMG_6089.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939555000269557760/IMG_6084.webp","https://cdn.discordapp.com/attachments/728634598422216704/939555000466698350/IMG_6087.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939554999707500556/IMG_6086.webp","https://cdn.discordapp.com/attachments/728634598422216704/939555000005328966/IMG_6085.png","https://cdn.discordapp.com/attachments/728634598422216704/939554786271977482/IMG_6097.png","https://cdn.discordapp.com/attachments/728634598422216704/939554786502651924/IMG_6096.png","https://cdn.discordapp.com/attachments/728634598422216704/939554786783666217/IMG_6091.webp","https://cdn.discordapp.com/attachments/728634598422216704/939554787068874802/IMG_6090.webp","https://cdn.discordapp.com/attachments/728634598422216704/939554787303768094/IMG_6095.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939554787509297223/IMG_6094.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939554787723214919/IMG_6093.jpg","https://cdn.discordapp.com/attachments/728634598422216704/939554788037775400/IMG_6092.jpg","https://cdn.discordapp.com/attachments/931628537176281158/939558998707941487/6D45DC1C-570D-472C-AA07-BAE848FF831C.png"



 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});





const listener = app.listen(process.env.PORT, () => {
console.log("Your app is listening on port " + listener.address().port);
console.log("All apis are working");
});
