import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <>
        <FriendList friends={friends} />
      </>
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
