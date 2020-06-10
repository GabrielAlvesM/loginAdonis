"use strict";

class UserController {
  async update({ params, request, response }) {}

  async destroy({ params, auth }) {
    const user = await User.findOrFail(params.id);

    await user.delete();

    return `${user.username} deleted`;
  }
}

module.exports = UserController;
