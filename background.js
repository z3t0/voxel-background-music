
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

  this.voxelSfx = game.plugins.get('voxel-sfx');
  if(!this.voxelSfx) throw new Error('voxel-background-music requires voxel-sfx')


  this.enable();
}

BackgroundMusicPlugin.prototype.enable = function() {
  var self = this;
  this.voxelSfx.play('damage/fallsmall');
  // Register listeners
  console.log("PLAYING BACKGROUND")

}

BackgroundMusicPlugin.prototype.disable = function() {
  // Remove Listeners
  // TODO add control to voxel-sfx
}
