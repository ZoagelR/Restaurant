const Menu = require("../models/menuModel");

exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json({
      status: "success",
      data: menu,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json({
      status: "success",
      data: menu,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!menu) {
      return res.status(404).json({
        status: "fail",
        message: "Food not found",
      });
    }
    res.json(menu);
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).json({
        status: "fail",
        message: "Food not found",
      });
    }
    res.json({
      status: "success",
      message: "Menu deleted",
    });
  } catch (e) {
    res.json({
      status: "fail",
      message: e,
    });
  }
};
