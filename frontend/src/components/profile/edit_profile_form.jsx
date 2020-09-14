import React from 'react';
import NavBar from '../../components/nav/navbar_container';
import beagle from '../../images/beagle.png';
import chihuahua from '../../images/chihuahua.png';
import corgi from '../../images/corgi.png';
import husky from '../../images/husky.png';
import default_avatar from "../../images/default_avatar.png";

class Headers extends React.Component {
  render() {
    const headers = this.props.forms.map((form, index) => {
      return (
        <li
          key={index}
          onClick={() => this.props.onTabChosen(index)}
        >
          {form}{" "}
        </li>
      );
    });

    return <ul className="edit-form-headers">{headers}</ul>;
  }
}

export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.forms = ["Profile", "Avatar"];
    this.avatars = { default_avatar, beagle, chihuahua, corgi, husky };

    this.state = {
      selectedForm: 0,
      handle: props.currentUser.handle,
      blurb: props.currentUser.blurb,
      avatar: this.avatars[props.currentUser.avatar],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectForm = this.selectForm.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderAvatars() {

    return Object.keys(this.avatars).map((key) => {
      return (
        <div onClick={this.handleAvatar()} key={key}>
            <img
                src={this.avatars[key]}
                height="80px"
                width="80px"
                alt={this.avatars[key]}
            />
        </div>
      );
    });
  }

  handleAvatar() {
    return (e) => 
        this.setState({
            avatar: e.target.alt
        }, () => console.log(this.state))
  }

  renderDefaults() {
    return (
      <div className="defaults-container">
        <form className="form">
            <input
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Handle"
            />
            <input
              type="text"
              value={this.state.blurb}
              onChange={this.update("blurb")}
              placeholder="Blurb"
            />
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    let handle;
    let blurb;

    if (this.state.handle) {
      let first = this.state.handle[0].toUpperCase();
      handle = first + this.state.handle.slice(1);
    } else {
      handle = this.state.handle;
    }

    if (!this.state.blurb) {
      blurb = "Hello, I love burping";
    } else {
      blurb = this.state.blurb;
    }

    let user = {
      handle: handle,
      blurb: blurb,
      avatar: this.state.avatar,
    };

    this.props.updateUser(user);
  }

  selectForm(num) {
    this.setState({ selectedForm: num });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    let pane;

    if (this.state.selectedForm === 0) {
      pane = this.renderDefaults();
    } else {
      pane = this.renderAvatars();
    }

    return (
      <div className="edit-form-wrapper">
        <NavBar />
        <div className="edit-form-container">
          <div>
            <img src={this.state.avatar} height="80px" width="80px" alt=""></img>
          </div>

          <div className="edit-form-options">
            <div className="edit-buttons">
              <h1>Edit Profile</h1>
              <button>Update Profile</button>
            </div>

            <Headers
              selectedForm={this.state.selectedForm}
              onTabChosen={this.selectForm}
              forms={this.forms}
            />
            {pane}
          </div>
        </div>
      </div>
    );
  }
}
