export default {
  key: "UserInformation",
  async handle({ data }) {
    const { user } = data;

    console.log(user);
  },
};
