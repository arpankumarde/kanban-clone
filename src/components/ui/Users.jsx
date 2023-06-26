import { User1, User2, User3, User4, User5 } from "../../static/avatars";


export default function Users({ users, width, height, offset, overlap }) {
  const renderUsers = users.length > 4 ? users.slice(0, 4) : users;
  const count = users.length > 4 ? users.length - 4 : 0;

  const usersObj = {
    User1: User1,
    User2: User2,
    User3: User3,
    User4: User4,
    User5: User5,
  };

  return (
    <div className='flex'>
      {renderUsers.map((user, idx) => {
        const styles =
          overlap === "right"
            ? {
              zIndex: 20 - idx,
              marginLeft: offset === "4" ? "-4px" : "-8px",
            }
            : {
              zIndex: 20 + idx,
              marginRight: offset === "4" ? "-4px" : "-8px",
            };
        return (
          <img
            src={usersObj[user]}
            alt={user}
            className='border border-white rounded-full'
            width={width}
            height={height}
            style={styles}
            key={user}
          />
        );
      })}
      {count !== 0 && (
        <span className='flex justify-center items-center bg-[#F4D7DA] border border-white rounded-full text-red text-[15px] font-medium z-40' style={{ width: width, height: height }}>
          +{count}
        </span>
      )}
    </div>
  );
}
