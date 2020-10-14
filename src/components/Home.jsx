import React from "react";

class Home extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: "",
    sex: "",
    agree: false,
    skills: "",
  };
  handleChange = (event) => {
    //console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  hangleCheckBox = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  };
  handleSkillsBox = event =>{

  }
  render() {
    const { name, country, bio, birthday, agree } = this.state;
    return (
      <div className="container">
        <input
          className="form-control my-2"
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={this.handleChange}
        />
        <select
          className="form-control my-2"
          name="country"
          value={country}
          onChange={this.handleChange}
        >
          <option value="bangladesh">Bangladesh</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="china">China</option>
        </select>

        <textarea
          className="form-control my-2"
          name="bio"
          placeholder="About Yourself"
          value={bio}
          onChange={this.handleChange}
        ></textarea>
        <input
          className="form-control my-2"
          type="date"
          name="birthday"
          value={birthday}
          onChange={this.handleChange}
        />
        <div className="form-control my-2">
          <input
            type="radio"
            name="sex"
            value="Male"
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="sex"
            value="Female"
            onChange={this.handleChange}
          />
          Female
        </div>
        {/* <div>
          Skils <br />
          <input
            type="checkbox"
            name="skils"
            value="java"
            checked={skills.includes('Java')}
            onChange={this.handleSkillsBox}
          />
        </div> */}
        <div>
          <input
            type="checkbox"
            name="agree"
            value={agree}
            onChange={this.hangleCheckBox}
          />
          I agree all terams and condition
        </div>
        <button onClick={() => console.log(this.state)}>Show Data</button>
      </div>
    );
  }
}
export default Home;
