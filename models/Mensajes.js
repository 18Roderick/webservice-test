module.exports = function(sequelize, DataTypes) {
  let Mensajes = sequelize.define('Mensajes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    }
  });

  return Mensajes;
};
