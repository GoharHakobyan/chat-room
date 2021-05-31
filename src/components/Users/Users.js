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
      <div>
        {pages.map((item) => {
          return (
            <span
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
        <div key={u.id}>
          <span>
            <span>
              <NavLink to={"/profile/" + u.id}>
                <div style={{ width: "100px" }}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt="dimich"
                    style={{ width: "100%" }}
                  />
                </div>
              </NavLink>

              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/?{u.id}`,
                          {},
                          {
                            withCredentials: true,
                          },
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowingProgress(false);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.toggleFollowingProgress}
                    onClick={() => {
                      props.toggleFollowingProgress(true);

                      axios
                        .post(`https://social-network.samuraijs.com/api/1.0/follow/?{u.id}`, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "ded6c5db-dc38-4784-bc9f-19cd2b22c221",
                          },
                        })
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowingProgress(false);
                        });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
