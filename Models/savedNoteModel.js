module.exports = (sequelize, DataTypes) => {
  const savedNote = sequelize.define( "saved_notes", {
  }, {timestamps: false}, )
  return savedNote
}