import React from "react";
import { connect } from "react-redux";
import {
  setUsers,
  unfollow,
  follow,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../assets/common/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    follwingInProgress: state.usersPage.follwingInProgress,
  };
};

// let mapDispatchToProps=(dispatch)=>{
//     return{
//         follow:(userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount:(totalUsersCount)=>{
//             dispatch(setUsersTotalCountAC(totalUsersCount))
//         },
//         toggleIsFetching:(isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching: toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
