
'use strict';

module.exports = function(game, opts) {
  return new BackgroundMusicPlugin(game, opts);
};

module.exports.pluginInfo = {
  clientOnly: true,
  loadAfter: ['voxel-sfx']
};

function BackgroundMusicPlugin(game, opts) {

  this.game = game;
  this.artPacks = this.game.materials.artPacks;


  this.enable();
}

BackgroundMusicPlugin.prototype.enable = function() {
  var self = this;
  self.voxelSfx = game.plugins.get('voxel-sfx');
  if(!this.voxelSfx) throw new Error('voxel-background-music requires voxel-sfx')

  self.game.materials.artPacks.on('loadedAll', this.loaded = function(){
    self.voxelSfx.play('random/background', true, 0.7);
  });
  console.log("PLAYING BACKGROUND")

}

BackgroundMusicPlugin.prototype.disable = function() {
  var self = this;
  self.voxelSfx.pause('random/background');
}
