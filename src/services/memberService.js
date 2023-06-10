const Member = require("../database/Member");

const getMember = (memberId) => {
  try {
    const member = Member.getMember(memberId);
    return member;
  } catch (error) {
    throw error;
  }
};
module.exports = { getMember };