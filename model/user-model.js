/**
 * Created by Visal on 7/5/2017.
 */

module.exports = function (sequelize, Datatype) {
    return sequelize.define('users', {
        first_name: {
            type: Datatype.STRING,
            allowNull: false,
            validate:{
                len:[1,20]
            }
        },
        last_name: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                len:[1, 20]
            }
        },
        age: {
            type: Datatype.INTEGER,
            allowNull: false
        }
    })
}