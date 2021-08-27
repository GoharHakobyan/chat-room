import React from "react";
import Profile from "./ProfileInfo";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileConatiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileConatiner); ///sarqel enq HOC vor amen angam chgrenq `
// let AuthRedirectComponent = (props) => {
//   if (!this.props.isAuth) return <Redirect to={"/login"} />;
//   return <ProfileConatiner {...props} />;
// };
// nra hamara arvum vor amen angam redirect i wrapper ha chsarqenq,mnacac notern withAuthRedirect um

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WrapIt = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { getUserProfile })(WrapIt);
