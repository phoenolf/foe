Items.EquiniumPlus = new TFItem("equin+", "Equinium+");
Items.EquiniumPlus.price = 100;
Items.EquiniumPlus.Short = function() { return "A bottle of Equinium+"; }
Items.EquiniumPlus.Long = function() { return "A bottle of Equinium, potent enough to significantly change your body. The fluid inside is creamy, smelling of male musk."; }
//Items.Equinium.Recipe = [{it: Items.Equinium, num: 3}, {it: Items.HorseHair}, {it: Items.HorseCum}];
// Effects
Items.EquiniumPlus.PushEffect(TF.ItemEffects.SetEars, {odds: 0.8, race: Race.horse, str: "equine ears"});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.SetTail, {odds: 0.8, race: Race.horse, color: Color.brown, str: "a brown, bushy horse tail"});
Items.EquiniumPlus.PushEffect(function(target) {
	var parse = {
		name: target.NameDesc(),
		s: target == player ? "" : "s",
		possessive: target.possessive(),
		Possessive: target.Possessive(),
		multiCockDesc : function() { return target.MultiCockDesc(); }
	};
	var cocks = target.AllCocks();
	// Create new cock
	if(cocks.length == 0) {
		var cock = new Cock(Race.horse, Color.pink);
		cock.length.base    = 25;
		cock.thickness.base = 7;
		cock.sheath = 1;
		cocks.push(cock);
		Text.AddOutput("[name] grow[s] a huge horsecock!", parse);
		Text.Newline();
	}
	else if(TF.SetRaceAll(cocks, Race.horse)) {
		if(cocks.length > 1)
			Text.AddOutput("All of [possessive] cocks turn into horsecocks!", parse);
		else
			Text.AddOutput("[Possessive] cock turns into a horsecock!", parse);
		Text.Newline();
	}
	var size = false;
	for(var i = 0; i < cocks.length; i++) {
		// Base size
		var inc = cocks[i].length.IncreaseStat(25, 100);
		var inc2 = cocks[i].thickness.IncreaseStat(7, 100);
		if(inc == null)
			inc = cocks[i].length.IncreaseStat(50, 5);
		if(inc2 == null)
			inc2 = cocks[i].thickness.IncreaseStat(12, 1);
		if(inc || inc2) size = true;
	}
	if(size) {
		parse["s"]    = target.NumCocks() > 1 ? "s" : "";
		parse["notS"] = target.NumCocks() > 1 ? "" : "s";
		Text.Newline();
		Text.AddOutput("[Possessive] [multiCockDesc] shudder[notS], the stiff dick[s] growing significantly longer and thicker.", parse);
	}
});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.8, value: true, num: 2});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.SetBalls, {ideal: 2, count: 2});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.IncStr, {odds: 0.4, ideal: 50, max: 3});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.IncSta, {odds: 0.4, ideal: 50, max: 3});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.DecInt, {odds: 0.2, ideal: 20, max: 1});
Items.EquiniumPlus.PushEffect(TF.ItemEffects.DecDex, {odds: 0.2, ideal: 20, max: 1});
