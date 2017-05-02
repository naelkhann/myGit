import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({

})

class IssueView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.issue.title,
      body: this.props.issue.body,
      state: this.props.issue.state,
      view: false,
      editing: false
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  }

  renderIssueBtn(status){
      let btnStatus = ""
      status === "open" ? btnStatus = "Close" : btnStatus = "Open";
      return (
        <div className="issue-btns-container">
          <a className="issue-btn" onClick={this.issueOpenCloseSubmit}>{btnStatus} Issue</a>
          <a className="issue-btn" onClick={() => this.state.view ? this.setState({view : false}) : this.setState({view : true})}>View Issue</a>
        </div>
      )
  }

  renderIssueView(title, body){
    if(this.state.view){
      if(this.state.editing){
        return(
          <form className="issue-view-container" onSubmit={this.issueUpdateSubmit}>
            <label>Title: <i className="fa fa-pencil" onClick={() => {this.state.editing ? this.setState({editing: false}) : this.setState({editing: true})}}></i></label>
            <input type="text" value={this.state.title} onChange={this.update('title')}></input>
            <label>Body:</label>
            <textarea value={this.state.body} onChange={this.update('body')}></textarea>
          </form>
        )
      } else {
        return(
          <form className="issue-view-container" onSubmit={this.issueUpdateSubmit}>
            <label>Title:  <i className="fa fa-pencil" onClick={() => {this.state.editing ? this.setState({editing: false}) : this.setState({editing: true})}}></i></label>
            <p>{this.state.title}</p>
            <label>Body:</label>
            <p>{this.state.body}</p>
          </form>
        )
      }
    }
  }

  render(){
    const issue = this.props.issue;
    return (
      <div key={this.props.key}>
        <p className="issue-text">{`#${issue.number}`} - {issue.title}</p>
        <p className={issue.state === "open" ? "issue-open" : "issue-closed"}>{issue.state.toUpperCase()}</p>
        {this.renderIssueBtn(issue.state)}
        {this.renderIssueView(issue.title, issue.body)}
      </div>
    )
  }
}

export default connect(null, null)(IssueView);
