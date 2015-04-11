
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
  this.game.materials.artPacks.on('loadedAll', this.loaded = function(){
    this.voxelSfx = game.plugins.get('voxel-sfx');
    if(!this.voxelSfx) throw new Error('voxel-background-music requires voxel-sfx')
    this.voxelSfx.play('random/background', true);
  });
  // Register listeners
  console.log("PLAYING BACKGROUND")

}

BackgroundMusicPlugin.prototype.disable = function() {

}
