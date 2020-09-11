import React from 'react';
import beagle from '../../images/beagle.png';
import chihuahua from '../../images/chihuahua.png';
import corgi from '../../images/corgi.png';
import husky from '../../images/husky.png';

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

    return <ul >{headers}</ul>;
  }
}

export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForm: 0,
    };

    this.forms = ['select a form','avatar', 'handle', 'blurb'];

    this.selectForm = this.selectForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateAvatar() {
    console.log("clicked");
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="input-wrapper">
          {/* <input
                    type="text"
                    value={this.state.handle}
                    onChange={this.update("handle")}
                    placeholder="Handle"
                  /> */}
          <br />
          <input type="submit" value="Update Avatar!" />
        </div>
      </form>
    );
  }

  updateHandle() {
    return (
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-wrapper">
                  {/* <input
                    type="text"
                    value={this.state.handle}
                    onChange={this.update("handle")}
                    placeholder="Handle"
                  /> */}
                  <br />
                  <input type="submit" value="Update Handle!" />
                </div>
        </form>
    )
  }

  updateBlurb() {
      console.log('in update blurb')
    return (
    <form className="form" onSubmit={this.handleSubmit}>
        <div className="input-wrapper">
        {/* <input
                        type="text"
                        value={this.state.handle}
                        onChange={this.update("handle")}
                        placeholder="Handle"
                    /> */}
        <br />
        <input type="submit" value="Update Blurb!" />
        </div>
    </form>
    );
  }

  showDefaultForm() {
      return (
          <div>default form</div>
      )
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  selectForm(num) {
    this.setState({ selectedForm: num });
  }

  render() {
    let pane;

    if (this.state.selectedForm === 0) {
        pane = this.showDefaultForm();
    } else if (this.state.selectedForm === 1) {
        pane = this.updateAvatar();
    } else if (this.state.selectedForm === 2) {
        pane = this.updateHandle();
    } else {
        pane = this.updateBlurb();
    }

    return (
      <div>
        <h1>Forms</h1>
        <div>
          <Headers
            selectedForm={this.state.selectedForm}
            onTabChosen={this.selectForm}
            forms={this.forms}
          ></Headers>
          <div >
            <article>{pane}</article>
          </div>
        </div>
      </div>
    );
  }
}
