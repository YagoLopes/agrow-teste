const User = require("../models/User");
module.exports = {
  async index(req, res) {
    const users = await User.find(); 
    return res.json(users);
  },
  async show(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
  },

  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      //Find the user given the email
      const user = await User.findOne({ email: email, password: password });
      if (!user) {
        return res.status(500).json({ error: "Usuário ou senha invalida" });
      }
      return res.json({ _id: user._id, name: user.name });
    } catch (error) {
      return res.status(500).json({ error: "Usuario ou senha invalida!!" });
    }
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
    
      return res.json(user);
  },

  async destroy(req, res) {
    await User.findByIdAndDelete(req.params.id);

    return res.json();
  }
};