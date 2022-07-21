// This is a generated file. Do not edit it directly.
// Make your changes to presets/warlock.json then rebuild
// this file with `npm run build-presets -- warlock`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"warlock","name":"Warlock","description":"Start with high intelligence and Form of Mist.","author":"3snow_p7im","weight":-300},"stats":false,"startingEquipment":[{"slot":"Head","item":"Wizard hat"}],"lockLocation":[{"location":"Soul of Bat","locks":["Leap Stone","Gravity Boots","Soul of Bat","Power of Mist"]},{"location":"Fire of Bat","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Echo of Bat","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Force of Echo","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Power of Wolf","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Skill of Wolf","locks":["Gravity Boots","Soul of Bat","Power of Mist"]},{"location":"Form of Mist","locks":["Leap Stone","Gravity Boots","Soul of Bat","Power of Mist"]},{"location":"Power of Mist","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Gas Cloud","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Gravity Boots","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Leap Stone","locks":["Jewel of Open","Leap Stone","Gravity Boots","Soul of Bat","Power of Mist"]},{"location":"Holy Symbol","locks":["Jewel of Open + Merman Statue"]},{"location":"Merman Statue","locks":["Jewel of Open"]},{"location":"Bat Card","locks":["Gravity Boots","Soul of Bat","Power of Mist"]},{"location":"Ghost Card","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Faerie Card","locks":["Gravity Boots","Soul of Bat","Power of Mist"]},{"location":"Demon Card","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Sword Card","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Heart of Vlad","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Tooth of Vlad","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Rib of Vlad","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Ring of Vlad","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Eye of Vlad","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Spike Breaker","locks":["Jewel of Open + Soul of Bat + Echo of Bat"]},{"location":"Gold ring","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Power of Mist"]},{"location":"Silver ring","locks":["Jewel of Open + Spike Breaker"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"],"escapeRequires":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Crystal cloak","locks":["Jewel of Open"]},{"location":"Mormegil","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Dark Blade","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Ring of Arcana","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Trio","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Holy mail","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Jewel sword","locks":["Soul of Wolf + Soul of Bat"]},{"location":"Mystic pendant","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Ankh of Life","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Morningstar","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Goggles","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Silver plate","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Cutlass","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Platinum mail","locks":["Soul of Bat","Gravity Boots","Power of Mist"]},{"location":"Falchion","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Gold plate","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Bekatowa","locks":["Soul of Bat","Gravity Boots","Power of Mist"]},{"location":"Holy rod","locks":["Leap Stone","Soul of Bat","Gravity Boots","Power of Mist"]},{"location":"Library Onyx","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Alucart sword","locks":["Cube of Zoe + Soul of Bat","Cube of Zoe + Leap Stone","Cube of Zoe + Gravity Boots","Cube of Zoe + Power of Mist"]},{"location":"Broadsword","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Estoc","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Olrox Garnet","locks":["Soul of Bat","Gravity Boots + Leap Stone","Power of Mist"]},{"location":"Blood cloak","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Shield rod","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Knight shield","locks":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Holy sword","locks":["Soul of Bat","Gravity Boots","Power of Mist"]},{"location":"Bandanna","locks":["Jewel of Open"]},{"location":"Secret boots","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Power of Mist"]},{"location":"Nunchaku","locks":["Jewel of Open + Holy Symbol"]},{"location":"Knuckle duster","locks":["Jewel of Open"]},{"location":"Caverns Onyx","locks":["Jewel of Open + Merman Statue","Jewel of Open + Soul of Bat","Jewel of Open + Holy Symbol + Leap Stone","Jewel of Open + Power of Mist"]},{"location":"Combat knife","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Ring of Ares","locks":["Jewel of Open + Demon Card + Soul of Bat","Jewel of Open + Demon Card + Leap Stone","Jewel of Open + Demon Card + Power of Mist","Jewel of Open + Demon Card + Soul of Wolf + Power of Wolf","Jewel of Open + Nosedevil Card + Soul of Bat","Jewel of Open + Nosedevil Card + Leap Stone","Jewel of Open + Nosedevil Card + Power of Mist","Jewel of Open + Nosedevil Card + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Bloodstone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Icebrand","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Power of Mist"],"comment":"Access must also give at least Leap Stone","escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Walk armor","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Power of Mist"]},{"location":"Beryl circlet","locks":["Holy glasses + Soul of Bat + Soul of Wolf"]},{"location":"Talisman","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Katana","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Goddess shield","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Twilight cloak","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Talwar","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Sword of Dawn","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Bastard sword","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Royal cloak","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Lightning mail","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Moon rod","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Sunstone","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Luminus","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Dragon helm","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Shotel","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Staurolite","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Badelaire","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Forbidden Library Opal","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Reverse Caverns Diamond","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Reverse Caverns Opal","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Reverse Caverns Garnet","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Osafune katana","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Alucard shield","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Alucard sword","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Necklace of J","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Floating Catacombs Diamond","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Sword of Hador","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Alucard mail","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Gram","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]},{"location":"Fury plate","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Power of Mist"]}],"complexityGoal":{"min":6,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]},"writes":[{"comment":"Jump to injected code","address":"0x000fa97c","type":"word","value":"0x0c04db00"},{"address":"0x00158c98","type":"word","value":"0x3c038009","comment":"lui v1, 0x8009"},{"type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"comment":"sb v0, 0x796b (v1)","type":"word","value":"0xa062796b"},{"type":"word","value":"0x34020063","comment":"ori v0, 0x0063"},{"comment":"sb v0, 0x7bc0 (v1)","type":"word","value":"0xa0627bc0"},{"type":"word","value":"0x34020001","comment":"ori v0, 0x0001"},{"comment":"sb v0, 0x7bb8 (v1)","type":"word","value":"0xa0627bb8"},{"comment":"sb v0, 0x7bbc (v1)","type":"word","value":"0xa0627bbc"},{"comment":"sb v0, 0x7bc4 (v1)","type":"word","value":"0xa0627bc4"},{"comment":"j 0x800e493c","type":"word","value":"0x0803924f"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"Dont consume mana transforming into mist","type":"short","address":"0x00118b34","value":"0x0000"},{"comment":"Don't consume mana in mist form","type":"short","address":"0x00118ae8","value":"0x0000"},{"comment":"Summon Spirit cost 1 mana","type":"char","address":"0x000b5260","value":"0x01"},{"comment":"Dark Metamorphosis cost 2 mana","type":"char","address":"0x000b5244","value":"0x02"},{"comment":"Hellfire/Dark Inferno cost 2 mana","type":"char","address":"0x000b527c","value":"0x02"},{"comment":"Tetra spirit cost 3 mana","type":"char","address":"0x000b5298","value":"0x03"},{"comment":"Soul Steal cost 4 mana","type":"char","address":"0x000b52d0","value":"0x04"}]})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
