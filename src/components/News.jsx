import React, { Component } from "react";

class News extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  renderTags(){
      if(this.state.tags.length === 0) return <p>There is no tag</p>
      return  <ul>
          {this.state.tags.map(tag => 
            <li key={tag}>{tag}</li>
          )}
        </ul>   
  }
  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getBagesClass()}>
          {this.formetCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <div>
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  getBagesClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formetCount() {
    const { count } = this.state;
    //  return this.state.count === 0 ? 'Zero' : this.state.count
    return count === 0 ? "Zero" : count;
 
    
  }

    }
  
export default News;
