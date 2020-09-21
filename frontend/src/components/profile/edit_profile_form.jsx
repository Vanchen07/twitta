import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import avatars from '../../images/avatars';
import "./profile.css";
import { withRouter } from 'react-router-dom';

class Headers extends React.Component {
  render() {
    const headers = this.props.forms.map((form, index) => {
      const selected = this.props.selectedForm;
      const klass = index === selected ? "active" : "";

      return (
        <li
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}
        >
          {form}{" "}
        </li>
      );
    });

    return <ul className="edit-form-headers">{headers}</ul>;
  }
}

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.forms = ["Profile", "Avatar"];

    this.state = {
      selectedForm: 0,
      handle: '',
      blurb: '',
      favoriteFoods: '',
      location: '',
      avatar: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectForm = this.selectForm.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.fetchUsers().then((users) => {
      // console.log(users.users)
      let user = users.users[this.props.currentUserId];

      return this.setState({
        handle: user.handle,
        blurb: user.blurb,
        favoriteFoods: user.favoriteFoods,
        location: user.location,
        avatar: avatars[user.avatar],
      })
      }
    );
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderAvatars() {

    return (
      <div className="avatars-container">
        {
        Object.keys(avatars).map((key) => {
        return (
          <div className="profile-top" onClick={this.handleAvatar()} key={key}>
            <div className="profile-img edit">
              <img
                  src={avatars[key]}
                  alt={avatars[key]}
              />
            </div>
          </div>
          );
        })
        }
      </div>
    )
  }

  handleAvatar() {
    return (e) => {
      return this.setState({
          avatar: e.target.alt
      })
    }
  }

  renderDefaults() {
    return (
      <div className="defaults-container">
        <form className="edit-form">
          {/* <div className="edit-input-wrapper"> */}
          <div className="edit-input-wrapper">
            <label >Handle:</label>
            <input
              id="handle"
              type="text"
              value={this.state.handle}
              onChange={this.update("handle")}
              placeholder="Handle"
            />
          </div>

          <div className="edit-input-wrapper">
            <label >Blurb:</label>
            <input
              id="blurb"
              type="text"
              value={this.state.blurb}
              onChange={this.update("blurb")}
              placeholder="Blurb"
            />
          </div>
          <div className="edit-input-wrapper">
            <label >Favorite Foods:</label>
            <input
              id="favorite-foods"
              type="text"
              value={this.state.favoriteFoods}
              onChange={this.update("favoriteFoods")}
              placeholder="Favorite foods"
            />
          </div>
          <div className="edit-input-wrapper">
            <label >Location:</label>
            <input
              id="location"
              type="text"
              value={this.state.location}
              onChange={this.update("location")}
              placeholder="Favorite foods"
            />
          </div>
          {/* </div> */}
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

    let avatarName;
    Object.keys(avatars).forEach(key => {
      if (avatars[key] === this.state.avatar) {
        avatarName = key;
      }
    })

    let user = {
      id: this.props.currentUser._id,
      handle: handle,
      blurb: blurb,
      avatar: avatarName,
      favoriteFoods: this.state.favoriteFoods,
      location: this.state.location
    };
    
    console.log(user)
    
    this.props.modifyUser(user).then(() => this.props.history.push(`/profile/${user.id}`));
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
      <div>
        <NavBarContainer />
        <div className="profile">
          <div className="edit-form-options">
            <div className="profile-top align">
              <div className="profile-img">
                <img src={this.state.avatar} alt=""></img>
              </div>
              <div className="edit-icon" onClick={this.handleSubmit}>
                <i className="fas fa-check-circle"></i>
                {/* <i class="far fa-check-circle"></i> */}
              </div>
            </div>
            <div>
              <div className="edit-buttons">
                <h1>Edit Profile</h1>
              </div>
              <Headers
                selectedForm={this.state.selectedForm}
                onTabChosen={this.selectForm}
                forms={this.forms}
              />
            </div>

            {pane}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProfileForm);