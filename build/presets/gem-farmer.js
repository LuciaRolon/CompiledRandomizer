// This is a generated file. Do not edit it directly.
// Make your changes to presets/gem-farmer.json then rebuild
// this file with `npm run build-presets -- gem-farmer`.
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
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"gem-farmer","name":"Gem farmer","description":"All progression must be purchased from the librarian. Released on April 1st, 2021.","author":"3snow_p7im","weight":300},"stats":false,"preventLeaks":false,"itemLocations":[{"zone":"*","item":"*","replacement":"Luck potion"},{"zone":"ST0","item":"Heart","index":1,"replacement":"Heart"},{"zone":"ST0","item":"Heart","index":2,"replacement":"Heart"},{"zone":"ST0","item":"Heart","index":3,"replacement":"Heart"},{"zone":"ST0","item":"Heart","index":4,"replacement":"Heart"},{"zone":"ST0","item":"Heart","index":5,"replacement":"Heart"},{"zone":"ST0","item":"Big heart","index":1,"replacement":"Big heart"},{"zone":"ST0","item":"Big heart","index":2,"replacement":"Big heart"},{"zone":"ST0","item":"Big heart","index":3,"replacement":"Big heart"},{"zone":"ST0","item":"Cross","replacement":"Cross"},{"zone":"ST0","item":"Holy Water","replacement":"Holy Water"},{"zone":"ST0","item":"Shield rod","replacement":"Shield rod"},{"zone":"ST0","item":"Dark shield","replacement":"Dark shield"},{"zone":"ST0","item":"Power of Sire","replacement":"Power of Sire"},{"zone":"ST0","item":"Firebrand","replacement":"Firebrand"},{"zone":"ST0","item":"Badelaire","replacement":"Badelaire"},{"zone":"ST0","item":"Moon rod","replacement":"Moon rod"},{"zone":"ST0","item":"Heart Refresh","replacement":"Heart Refresh"},{"zone":"ST0","item":"Sunglasses","replacement":"Sunglasses"}],"enemyDrops":[{"enemy":"*","items":["Luck potion","Luck potion"]},{"enemy":"Bone Scimitar","items":["Jewel sword","Alucard shield"]},{"enemy":"Global","items":["Luck potion","Heart","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Luck potion","Heart","Heart","Heart","Heart","Heart","Heart","Heart","Heart","Heart","Heart","Heart","Big heart","Big heart","Luck potion","Luck potion","Luck potion","Heart","Luck potion","Luck potion"]}],"prologueRewards":[{"item":"Heart Refresh","replacement":"Luck potion"},{"item":"Neutron bomb","replacement":"Luck potion"},{"item":"Potion","replacement":"Luck potion"}],"relicLocations":false,"relicLocationsExtension":false,"placeRelic":[{"location":"Soul of Bat","relic":null},{"location":"Fire of Bat","relic":null},{"location":"Echo of Bat","relic":null},{"location":"Force of Echo","relic":null},{"location":"Soul of Wolf","relic":null},{"location":"Power of Wolf","relic":null},{"location":"Skill of Wolf","relic":null},{"location":"Form of Mist","relic":null},{"location":"Power of Mist","relic":null},{"location":"Gas Cloud","relic":null},{"location":"Cube of Zoe","relic":null},{"location":"Spirit Orb","relic":null},{"location":"Gravity Boots","relic":null},{"location":"Leap Stone","relic":null},{"location":"Holy Symbol","relic":null},{"location":"Faerie Scroll","relic":null},{"location":"Jewel of Open","relic":"Holy glasses"},{"location":"Merman Statue","relic":null},{"location":"Bat Card","relic":null},{"location":"Ghost Card","relic":null},{"location":"Faerie Card","relic":null},{"location":"Demon Card","relic":null},{"location":"Sword Card","relic":null},{"location":"Sprite Card","relic":null},{"location":"Nosedevil Card","relic":null},{"location":"Heart of Vlad","relic":null},{"location":"Tooth of Vlad","relic":null},{"location":"Rib of Vlad","relic":null},{"location":"Ring of Vlad","relic":null},{"location":"Eye of Vlad","relic":null},{"location":"Spike Breaker","relic":null},{"location":"Gold ring","relic":null},{"location":"Silver ring","relic":null},{"location":"Holy glasses","relic":null}],"writes":[{"comment":"Lapis lazuli","address":"0x047a3094","type":"string","value":"04004600f4010000"},{"comment":"Library card","type":"string","value":"0000a600f4010000"},{"comment":"Soul of Bat","type":"string","value":"05ff0000f4010000"},{"comment":"Holy glasses","type":"string","value":"01ff220050c30000"},{"comment":"Heart of Vlad","type":"string","value":"05ff190050c30000"},{"comment":"Tooth of Vlad","type":"string","value":"05ff1a0050c30000"},{"comment":"Rib of Vlad","type":"string","value":"05ff1b0050c30000"},{"comment":"Ring of Vlad","type":"string","value":"05ff1c0050c30000"},{"comment":"Eye of Vlad","type":"string","value":"05ff1d0050c30000"},{"comment":"Crissaegrim","type":"string","value":"0000a40050c30000"},{"comment":"Dragon helm","type":"string","value":"01002d0050c30000"},{"comment":"Dracula tunic","type":"string","value":"0200170050c30000"},{"comment":"Twilight cloak","type":"string","value":"0300380050c30000"},{"comment":"Ring of Varda","type":"string","value":"04004a0050c30000"},{"comment":"j 0x801d4740","address":"0x047dbde0","type":"word","value":"0x080751d0"},{"comment":"sll v1, t0, 0x03","address":"0x048029a8","type":"word","value":"0x000818c0"},{"type":"word","value":"0x3c028018","comment":"lui v0, 0x8018"},{"type":"word","value":"0x2442134c","comment":"addiu v0, v0, 0x134c"},{"type":"word","value":"0x00431821","comment":"addu v1, v0, v1"},{"type":"word","value":"0x90620000","comment":"lbu v0, 0x0000 (v1)"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","value":"0x2c420005","comment":"sltiu v0, v0, 0x0005"},{"type":"word","value":"0x10400003","comment":"beq v0, r0, pc + 0x10"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","value":"0x08075180","comment":"j 0x801d4600"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","value":"0x90630002","comment":"lbu v1, 0x0002 (v1)"},{"type":"word","value":"0x3c028009","comment":"lui v0, 0x8009"},{"type":"word","value":"0x00431021","comment":"addu v0, v0, v1"},{"type":"word","value":"0x90427964","comment":"lbu v0, 0x7964 (v0)"},{"type":"word","value":"0x340300ff","comment":"ori v1, r0, 0x00ff"},{"type":"word","value":"0x0806cac7","comment":"j 0x801b2b1c"},{"type":"word","value":"0x30420001","comment":"andi v0, v0, 0x0001"},{"comment":"j 0x801d4790","address":"0x047dc584","type":"word","value":"0x080751f0"},{"comment":"sltiu v0, v1, 0x0005","address":"0x04802a28","type":"word","value":"0x2c620005"},{"type":"word","value":"0x10400003","comment":"beq v0, r0, pc + 0x10"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","value":"0x080751a0","comment":"j 0x801d4680"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","value":"0x90a20002","comment":"lbu v0, 0x0002 (a1)"},{"type":"word","value":"0x0806cc64","comment":"j 0x801d3190"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"j 0x801d4820","address":"0x047df46c","type":"word","value":"0x08075208"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"sltiu v0, s2, 0x001a","address":"0x04802bb8","type":"word","value":"0x2e420019"},{"type":"word","value":"0x10400004","comment":"beq v0, r0, pc + 0x14"},{"type":"word","value":"0x3c07801d","comment":"lui a3, 0x801d"},{"type":"word","value":"0x24e748c0","comment":"addiu a3, a3, 0x48c0"},{"type":"word","value":"0x0806d6a2","comment":"j 0x801b5a88"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","comment":"sltiu v0, s2, 0x001a","value":"0x2e42001a"},{"type":"word","value":"0x10400004","comment":"beq v0, r0, pc + 0x14"},{"type":"word","value":"0x3c07801d","comment":"lui a3, 0x801d"},{"type":"word","value":"0x24e748cd","comment":"addiu a3, a3, 0x48cd"},{"type":"word","value":"0x0806d6a2","comment":"j 0x801b5a88"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","comment":"sltiu v0, s2, 0x001b","value":"0x2e42001b"},{"type":"word","value":"0x10400004","comment":"beq v0, r0, pc + 0x14"},{"type":"word","value":"0x3c07801d","comment":"lui a3, 0x801d"},{"type":"word","value":"0x24e748dc","comment":"addiu a3, a3, 0x48dc"},{"type":"word","value":"0x0806d6a2","comment":"j 0x801b5a88"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","comment":"sltiu v0, s2, 0x001c","value":"0x2e42001c"},{"type":"word","value":"0x10400004","comment":"beq v0, r0, pc + 0x14"},{"type":"word","value":"0x3c07801d","comment":"lui a3, 0x801d"},{"type":"word","value":"0x24e748eb","comment":"addiu a3, a3, 0x48eb"},{"type":"word","value":"0x0806d6a2","comment":"j 0x801b5a88"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","comment":"sltiu v0, s2, 0x001d","value":"0x2e42001d"},{"type":"word","value":"0x10400004","comment":"beq v0, r0, pc + 0x14"},{"type":"word","value":"0x3c07801d","comment":"lui a3, 0x801d"},{"type":"word","value":"0x24e748f8","comment":"addiu a3, a3, 0x48f8"},{"type":"word","value":"0x0806d6a2","comment":"j 0x801b5a88"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"addiu a3, a3, 0x4906","type":"word","value":"0x24e74906"},{"type":"word","value":"0x0806d6a2","comment":"j 0x801b5a88"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"Label: Soul of Bat","address":"0x04802c58","type":"string","value":"334f554c004f4600224154ff00"},{"comment":"Label: Heart of Vlad","type":"string","value":"2845415254004f4600364c4144ff00"},{"comment":"Label: Tooth of Vlad","type":"string","value":"344f4f5448004f4600364c4144ff00"},{"comment":"Label: Rib of Vlad","type":"string","value":"324942004f4600364c4144ff00"},{"comment":"Label: Ring of Vlad","type":"string","value":"32494e47004f4600364c4144ff00"},{"comment":"Label: Eye of Vlad","type":"string","value":"255945004f4600364c4144ff00"},{"comment":"List length","type":"char","address":"0x047dbe84","value":"0x0e"}]})

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
