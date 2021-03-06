import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConversationForm from "../private-messages/ConversationForm";
import ConversationFeed from "../private-messages/ConversationFeed";
import Spinner from "../common/Spinner";
import { getMessages } from "../../actions/messagingActions";

class privateMessages extends Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    const { conversations, loading } = this.props.messaging;
    let messageContent;

    if (conversations === null || loading) {
      messageContent = <Spinner />;
    } else {
      messageContent = <ConversationFeed conversations={conversations} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ConversationForm />
              {messageContent}
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
privateMessages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messaging: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  messaging: state.messaging
});

export default connect(
  mapStateToProps,
  { getMessages }
)(privateMessages);
