const Menu = require("../models/menuModel");

exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json({
      status: "success",
      data: menu,
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      message: "something went wrong",
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
    console.log("error", e);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!menu) {
      console.log("error", e);
      return res.status(500).json({
        status: "fail",
        message: "Food not found",
      });
    }

    res.status(200).json(menu);
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(500).json({
        status: "fail",
        message: "Something went wrong",
      });
    }

    res.status(204).json({
      status: "success",
      message: "Menu deleted",
    });
  } catch (e) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};
