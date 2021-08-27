import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

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
                    // disabled={props.followingInProgress.some((id) => id === u.id)}

                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    // disabled={props.followingProgress.some((id) => id === u.id)}

                    onClick={() => {
                      props.follow(u.id);
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
