import clsx from "clsx";
import css from "./FriendList.module.css";

function FriendListItem({ data }) {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={data.avatar} alt="Avatar" width="48" />
      <p className={css.name}>{data.name}</p>
      <p className={clsx(css.status, data.isOnline ? css.online : css.offline)}>
        {data.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
