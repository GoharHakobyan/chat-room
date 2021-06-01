import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.numbersContainer}>
        {pages.map((item) => {
          return (
            <span
              key={Math.random()}
              className={props.currentPage === item && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(item);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={styles.card}>
          <span>
            <NavLink to={"/profile/" + u.id}>
              <div className={styles.cardImageContainer}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt={"dimich" + u.id}
                  style={{ width: "100%" }}
                />
              </div>
            </NavLink>

            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "0c4e8118-11dd-4f58-b8d8-ac7fd306b39a",
                          },
                        },
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.follwingInProgress}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);

                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "0c4e8118-11dd-4f58-b8d8-ac7fd306b39a",
                          },
                        },
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
