var myComponents=[];
var componentNames=["Glass","Fabric","Metal","Wood","Petroleum","Animal","Rope","Saw","Disguise","Mirror","Padlock","Cog"];
var trickComponents=[];
trickComponents[0]=[0,0,2,0,0,0,0,0,0,0,0,0];//Linking Rings
trickComponents[1]=[1,0,0,1,0,1,0,0,0,0,0,0];//Living Piano
trickComponents[2]=[0,0,0,2,0,0,2,0,0,0,0,0];//Chinese Sticks
trickComponents[3]=[3,0,0,0,2,0,1,0,0,0,0,0];//Levitation
trickComponents[4]=[2,0,0,0,0,0,0,0,0,0,0,0];//Mind Reading
trickComponents[5]=[0,2,1,0,0,0,0,1,0,0,0,0];//Breath of Life
trickComponents[6]=[0,3,0,0,0,1,1,0,0,0,0,0];//Spirit Hand
trickComponents[7]=[0,0,2,0,1,0,0,0,0,1,0,0];//Window to the Otherworld
trickComponents[8]=[0,0,0,2,0,0,0,0,0,0,0,0];//Barricaded Barrels
trickComponents[9]=[0,0,2,2,0,0,0,0,0,0,0,0];//Stocks Escape
trickComponents[10]=[0,3,0,0,1,0,0,0,0,0,0,0];//Burning Mummy
trickComponents[11]=[2,0,2,0,0,0,1,0,0,0,0,0];//Water Tank Escape
trickComponents[12]=[0,2,0,0,0,0,0,0,0,0,0,0];//Enchanted Butterflies
trickComponents[13]=[0,1,1,0,0,1,0,0,0,0,0,0];//Rabbit from the Top Hat
trickComponents[14]=[3,0,0,0,0,0,1,1,0,0,0,0];//Pub-In-A-Bottle
trickComponents[15]=[0,3,0,3,0,0,0,0,0,0,0,0];//Card Manipulation
trickComponents[16]=[0,0,3,0,1,0,0,0,0,0,0,1];//Mechanical Hornet
trickComponents[17]=[0,0,0,3,0,0,0,3,0,0,0,0];//Sawing the Assistant in Half
trickComponents[18]=[0,2,0,0,0,2,0,0,0,0,0,1];//Vanishing Bird Cage
trickComponents[19]=[0,0,2,0,2,0,2,0,0,0,0,0];//Bullet Catch
trickComponents[20]=[0,3,0,3,1,0,3,0,0,0,0,0];//Floating Table
trickComponents[21]=[0,2,2,0,0,0,0,0,0,1,0,0];//Future Sight
trickComponents[22]=[2,0,0,0,0,0,0,2,2,0,0,0];//Pepper's Ghost
trickComponents[23]=[3,3,0,3,0,3,0,0,0,0,0,0];//Ghost Trap
trickComponents[24]=[0,0,3,0,0,0,0,0,2,0,0,0];//Prison Break
trickComponents[25]=[0,1,0,3,1,0,0,0,0,0,0,0];//Zig Zag Lady
trickComponents[26]=[0,0,3,3,0,0,0,0,0,0,1,0];//Walled
trickComponents[27]=[0,0,2,0,1,2,0,0,0,0,0,0];//Wolf Cage
trickComponents[28]=[0,0,3,0,0,0,0,1,1,0,0,0];//Self Decapitation
trickComponents[29]=[0,3,0,0,0,0,0,2,0,1,0,0];//Paper Shred
trickComponents[30]=[3,0,0,3,0,0,0,0,0,2,0,0];//Shattered Mirror
trickComponents[31]=[0,0,0,3,0,3,2,0,0,0,0,0];//Fishing in the Air
trickComponents[32]=[2,0,0,0,0,0,0,1,0,0,1,2];//Aztec Lady
trickComponents[33]=[0,0,0,3,0,0,0,2,0,0,0,2];//Horror Saws
trickComponents[34]=[0,0,3,0,3,0,0,0,0,0,0,3];//Automaton
trickComponents[35]=[0,3,0,0,1,2,0,0,0,0,2,0];//Hellhound
trickComponents[36]=[0,0,3,0,0,0,2,0,0,0,1,0];//Balsamo's Skull
trickComponents[37]=[2,0,0,3,2,0,0,0,0,2,0,0];//Séance
trickComponents[38]=[3,0,0,0,0,0,2,0,0,0,0,2];//Skeleton Dance
trickComponents[39]=[3,3,0,0,0,0,3,0,3,0,0,0];//Metamorphosis
trickComponents[40]=[0,0,0,3,0,0,0,0,0,0,3,0];//Buried Alive
trickComponents[41]=[3,0,0,0,0,0,0,2,0,2,0,0];//Assistant's Revenge
trickComponents[42]=[0,0,3,0,0,0,0,3,0,0,2,0];//Iron Maiden
trickComponents[43]=[0,3,0,0,2,0,0,0,2,0,0,0];//Transported Man
trickComponents[44]=[2,3,0,0,0,0,0,2,1,0,0,0];//Mutilation
trickComponents[45]=[3,0,0,0,2,0,0,0,0,1,0,1];//Stairs of Water
trickComponents[46]=[0,0,3,0,0,3,0,0,1,1,0,0];//Beast Within
trickComponents[47]=[3,0,0,0,0,2,0,0,0,1,2,0];//Vanishing Elephant

function update(){
	//update component stock
	for(i=0; i<12; ++i){
		myComponents[i]=document.getElementById("ComponentStock").getElementsByTagName("input")[i].value;
		if(myComponents[i]<0) myComponents[i]=0;
	}
	//Check each trick
	for(var i=0; i<48; ++i){
		//compare each component
		var missingComponents = 0;
		var cost = 0;
		var requiredComponents="";
		for(var n=0; n<12;++n){
			var comp = trickComponents[i][n];
			comp -= myComponents[n];
			if( comp > 0){
				missingComponents++;
				cost += comp * (Math.floor(n/4) + 1);
				requiredComponents += "<span class='componentGroup'>"
				for(var m=0; m<comp;++m)
					requiredComponents += "<img src='Images/"+componentNames[n]+".png' alt='"+componentNames[n]+"' />";
				requiredComponents += "</span>"; //close componentGroup span
			}
		}
		if(missingComponents==0)
			document.getElementsByClassName('requiredComponents')[i].innerHTML="<img src='Images/perform.png' alt='Own all req comps.' />";
		else{
			document.getElementsByClassName('requiredComponents')[i].innerHTML= "Cost:"+cost+" "+requiredComponents;//+" Components:"+missingComponents;
		}
	}
	
}