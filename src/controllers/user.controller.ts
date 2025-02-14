import { Request, RequestHandler, Response } from "express";
import { users } from "../database/user.db";

//create new user
export const register: RequestHandler = (req, res) => {
  console.log(req.body);
  const { name, password, email } = req.body;
  const findUserName = users.find((user) => user.name === name);
  if (findUserName) {
    res.send({ data: findUserName, message: "iim nertei hereglegch bna" });
    return;
  }
  const findUserEmail = users.find((user) => user.email === email);
  if (findUserEmail) {
    res.send({
      data: findUserEmail,
      message: "burtgeltei gmail account baina",
    });
    return;
  }
  const lastUser = users[users.length - 1];
  const newUserId = lastUser?._id ? Number(lastUser._id) + 1 : 1;
  const newUser = { _id: newUserId.toString(), name, password, email };
  users.push(newUser);
  res.send(users);
};

//login
export const login: RequestHandler = (req, res) => {
  const { name, password } = req.body;
  const user = users.find((user) => user.name == name);
  if (!user) {
    res.send("bvrtgeltei hereglegch oldsongui");
    return;
  }
  if (password === user.password) {
    res.send("succsessful login");
    return;
  }
  res.send("password buruu baina");
};

//all users
export const allUsers: RequestHandler = (req, res) => {
  res.send(users);
};

//update users
export const updateUser: RequestHandler = (req, res) => {
  const { _id, name } = req.body;

  const fixUserProfile = users.find((user) => user._id == _id);

  if (!fixUserProfile) {
    res.status(404).json({ message: "Hereglegch oldsongujie" });
    return;
  }
  fixUserProfile.name = name
    res.send(fixUserProfile);
  
};
