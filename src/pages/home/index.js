import React from "react";
import style from "./index.module.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["buttons", "typeface", "ui", "accessibility", "team"];
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        <div className={style.mainsuggestionContainer}>
          {suggestions.map(item => (
            <li
              className={style.suggestionItem}
              onClick={() => this.suggestionSelected(item)}
            >
              {item}
            </li>
          ))}
        </div>
      </ul>
    );
  }

  onSubmit = () => {
    if (this.state.text === "team") {
      this.props.history.push("/team");
    } else {
      window.location.reload();
    }
  };

  render() {
    const { text } = this.state;
    console.log(text);
    console.log(this.state.suggestions);
    return (
      <div className={style.mainContainer}>
        <div className={style.homeContainer}>
          <div className={style.searchContainer}>
            <h2 className={style.subTitle}>The envisioning justice</h2>
            <h1 className={style.mainTitle}>Design System</h1>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="search"
                className={style.searchInput}
                value={text}
                onChange={this.onTextChanged}
              ></input>
              {this.renderSuggestions()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
