import css from "./Profile.module.css";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div>
        <img className={css.avatar} src={avatar} alt="User avatar" width="200" />

        <p className={css.username}>{username}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          Followers <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          Views <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          Likes<span className={css.statsValue}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
