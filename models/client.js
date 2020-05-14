module.exports = (sequelize, DataTypes) => {

    let Client = sequelize.define('Client', {

        Firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PhoneNumber: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        Question: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    })
    // create the tables in the database, force is true - it will update the database
    Client.sync( {force: false} ).then( () => {
        console.log("Synced client table")
    }) 

    return Client // returns our client model
}