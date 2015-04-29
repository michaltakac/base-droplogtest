getAllDroplists = function() {
	var zulrah       = ZulrahDrops,
	    vorago       = VoragoDrops,
	    armadylRs3   = ArmadylDropsRs3,
	    bandosRs3    = BandosDropsRs3,
	    zamorakRs3   = ZamorakDropsRs3,
	    saradominRs3 = SaradominDropsRs3,
	    corpOsrs     = CorpDropsOsrs,
	    corpRs3      = CorpDropsRs3,
	    araxxor      = AraxxorDrops,
	    nex          = NexDrops,
	    tds          = TormentedDemonDropsRS3,
	    qbd          = QbdDrops,
	    rots         = RotsDrops,
	    kbdRs3       = KbdDropsRs3,
	    kk           = KalphiteKingDrops,
	    kqRs3        = KalphiteQueenDropsRs3;

	var all = zulrah
		.concat(
			vorago, 
			armadylRs3, 
			bandosRs3, 
			zamorakRs3, 
			saradominRs3, 
			corpRs3,
			corpOsrs,
			araxxor,
			nex,
			tds,
			qbd,
			rots,
			kbdRs3,
			kk,
			kqRs3
		);
	return all;
}

getDropTitle = function(title, droplist) {
    var dropTitle = _.findWhere( getDroplist(droplist), {title: title});
    return dropTitle;   
}
getDropImg = function(image) {
    var dropImg = _.findWhere( getAllDroplists(), {img: image});
    return dropImg;   
}
getDropBoss = function(boss) {
	var dropBoss = _.findWhere( getAllDroplists(), {boss: boss});
    return dropBoss;
}
kmFormat = function(input) {
	return numeral(input).format('0.0a');
}
gpFormat = function(input) {
	return numeral(input).format('0,0');
}
getDroplist = function(droplist) {
	switch(droplist) {
        // RS3
        case "BandosDropsRs3":
            return BandosDropsRs3;
            break;
        case "ZamorakDropsRs3":
            return ZamorakDropsRs3;
            break;
        case "SaradominDropsRs3":
            return SaradominDropsRs3;
            break;
        case "ArmadylDropsRs3":
            return ArmadylDropsRs3;
            break;
        case "ZamorakDropsRs3":
            return ZamorakDropsRs3;
            break;
        case "AraxxorDrops":
            return AraxxorDrops;
            break;
        case "NexDrops":
            return NexDrops;
            break;
        case "QbdDrops":
            return QbdDrops;
            break;
        case "RotsDrops":
            return RotsDrops;
            break;
        case "CorpDropsRs3":
            return CorpDropsRs3;
            break;
        case "TormentedDemonDropsRS3":
            return TormentedDemonDropsRS3;
            break;
        case "KalphiteKingDrops":
            return KalphiteKingDrops;
            break;
        case "KbdDropsRs3":
            return KbdDropsRs3;
            break;
        case "KalphiteQueenDropsRs3":
            return KalphiteQueenDropsRs3;
            break;
        case "VoragoDrops":
            return VoragoDrops;
            break;
        case "ChaosElementalDropsRs3":
            return ChaosElementalDropsRs3;
            break;
        case "BarrowsDropsRs3":
            return BarrowsDropsRs3;
            break;
        case "GiantMoleDropsRs3":
            return GiantMoleDropsRs3;
            break;
        // OSRS
        case "KbdDropsOsrs":
            return KbdDropsOsrs;
            break;
        case "ZulrahDrops":
            return ZulrahDrops;
            break;
        case "VenenatisDrops":
            return VenenatisDrops;
            break;
        case "CallistoDrops":
            return CallistoDrops;
            break;
        case "VetionDrops":
            return VetionDrops;
            break;
        case "ChaosFanaticDrops":
            return ChaosFanaticDrops;
            break;
        case "KrakenDrops":
            return KrakenDrops;
            break;
        case "CrazyArcheologistDrops":
            return CrazyArcheologistDrops;
            break;
        case "ScorpiaDrops":
            return ScorpiaDrops;
            break;
        // If not met, break
        default:
            return false;
            break;
    }
}