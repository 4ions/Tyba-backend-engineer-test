var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { Register } = require('../../models');
const config = require("../../config/auth.config");


const signUp = async (req, res) => {

    try {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        // Verificando campos obligatorios
        if (!username || !password || !email) {
            return res.status(400).json({ error: 'Missing arguments' });
        }

        const registerInfo = await Register.create({
            username: username,
            password: bcrypt.hashSync(password, 8),
            email: email,
            city: req.body.city
        });
        return res.status(201).json({
            registerInfo,
        });

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};


const signIn = async (req, res) => {
    try {
        const user = await Register.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!user) {
            return res.status(404).json({ error: "Username not found" });
        }
        
        let passwordIsvalid = bcrypt.compareSync(
            req.body.password, user.password
        );
        
        if (!passwordIsvalid) {
            return res.status(401).json({
                error: "Invalid Password"
            });
        }

        let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 288000 // 8 horas
        });

        return res.status(200).send({
            accessToken: token
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};



module.exports = {
    signUp,
    signIn

}